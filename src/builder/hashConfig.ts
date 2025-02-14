import { writable } from 'svelte/store';
import { parse, stringify } from '@abcnews/alternating-case-to-object';
import { decodeSchema, encodeSchema, getRleCodec } from 'hash-codec';

import layouts from '../../data/appdata-layouts.json';
import data from '../../data/appdata-built.json';
import historical19 from '../../data/appdata-historical-2019.json';
import historical22 from '../../data/appdata-historical-2022.json';
import { invertMap } from '../lib/utils';
import { getBinaryCodec } from 'hash-codec/src/BinaryCodec/BinaryCodec';
/** Array containing all the individual electorate hexes */
export const electorates = data.groups
  .flatMap(group => group.hexes.map(hex => ({ ...hex, group: group.name })))
  .toSorted((a, b) => a.id - b.id);

export const electoratesByCode = Object.values(electorates).reduce((obj, electorate) => {
  obj[electorate.code] = electorate;
  return obj;
}, {});

const groups = data.groups;
export { historical19, historical22, groups };

const rleDelineator = 'q';
const nullAllocationDelineator = 'x';
const rleCodec = getRleCodec({ delineator: rleDelineator });
export const allocationMap = {
  a: 'None',
  // z: 'Any',
  b: 'ALP',
  // c: 'NXT',
  d: 'CLP',
  e: 'GRN',
  f: 'IND',
  g: 'KAP',
  h: 'LIB',
  i: 'LNP',
  j: 'NAT',
  k: 'ONP',
  l: 'OTH',
  m: 'PUP',
  t: 'Teal'
};
// @ts-ignore
if (allocationMap[rleDelineator] || nullAllocationDelineator === rleDelineator) {
  throw new Error('Can not use delineator in allocation map');
}

/**
 * Take a schema and set up a Svelte Store to sync with the url bar
 * @param schema
 */
function makeHashConfigStore<T>(schema) {
  async function getHash() {
    const hash = window.location.hash.slice(1);
    const data = parse(hash);
    const decodedData = await decodeSchema({ schema, data: data });
    return decodedData;
  }

  const hashConfig = writable<T>();

  getHash().then(data => {
    hashConfig.set(data);
    hashConfig.subscribe(async data => {
      if (!data) return;
      const encodedData = await encodeSchema({ schema, data });
      const stringifiedHash = '#' + stringify(encodedData);
      if (window.location.hash !== stringifiedHash) {
        window.location.hash = stringifiedHash;
      }
    });
  });

  return hashConfig;
}

/** get electorate values in a stable order */
function getSortedValues(obj) {
  return electorates.map(({ code }) => obj[code]);
}

function putValues(arr) {
  return electorates.reduce((obj, { code }, i) => {
    obj[code] = arr[i] ?? null;
    return obj;
  }, {});
}

const binaryCodecRle = getBinaryCodec({ maxBits: 4 });
export const schema = {
  layout: {
    type: 'enum',
    key: 'l',
    defaultValue: 'EXPLODED',
    values: Object.keys(layouts)
  },
  allocations: {
    type: 'custom',
    codec: {
      encode: async (electorateMap: { [key: string]: string }) => {
        const allocationMapInverted = await invertMap(allocationMap);
        const replacedElectorates = Object.entries(electorateMap).reduce((obj, [electorateCode, allocation]) => {
          obj[electorateCode] = allocationMapInverted[allocation] || 'x';
          return obj;
        }, {});
        const string = getSortedValues(replacedElectorates)
          .map(val => val ?? 'x')
          .join('');
        const encodedString = await rleCodec.encode(string);
        return encodedString;
      },
      decode: async (electorateString: string) => {
        const str = await rleCodec.decode(electorateString).catch(e => {
          console.error('decoding string failed', electorateString, e);
          return '';
        });
        const electorateMap = str.split('').reduce((obj, val, index) => {
          const key = electorates[index].code;
          obj[key] = allocationMap[String(val)] || null;
          return obj;
        }, {});
        return electorateMap;
      }
    },
    key: 'a',
    defaultValue: electorates.reduce((obj, current) => {
      obj[current.code] = null;
      return obj;
    }, {})
  },
  focuses: {
    type: 'custom',
    codec: {
      encode: async function (focuses) {
        const values = getSortedValues(focuses);
        const bin = binaryCodecRle.encode(values);
        return bin;
      },
      decode: async function (encodedString) {
        const values = binaryCodecRle.decode(encodedString);

        return putValues(values);
      }
    },
    defaultValue: electorates.reduce((obj, current) => {
      obj[current.code] = null;
      return obj;
    }, {})
  }
};

export const hashConfig = makeHashConfigStore<{
  layout: string;
  allocations: Object;
  focuses: Object;
}>(schema);
