import { writable } from 'svelte/store';
import { parse, stringify } from '@abcnews/alternating-case-to-object';
import { decodeSchema, encodeSchema, getRleCodec } from 'hash-codec';

import layouts from '../../data/appdata-layouts.json';
import data from '../../data/appdata-built.json';
import historical19 from '../../data/appdata-historical-2019.json';
import historical22 from '../../data/appdata-historical-2022.json';
import { invertMap } from '../lib/utils';
/** Array containing all the individual electorate hexes */
export const electorates = data.groups.flatMap(group => group.hexes).toSorted((a, b) => a.id - b.id);

export { historical19, historical22 };

const rleDelineator = 'q';
const nullAllocationDelineator = 'x';
const rleCodec = getRleCodec({ delineator: rleDelineator });
const allocationMap = {
  a: 'None',
  z: 'Any',
  b: 'ALP',
  c: 'NXT',
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

const decodeElectorate = async encodedString => {
  const str = await rleCodec.decode(encodedString).catch(e => {
    console.error('decoding string failed', encodedString, e);
    return '';
  });
  return str.split('').reduce((obj, val, index) => {
    const key = electorates[index].code;
    obj[key] = val;
    return obj;
  }, {});
};
const encodeElecorate = async obj => {
  const string = electorates.map(({ code }) => (obj[code] || 'x').slice(0, 1)).join('');
  const encodedString = await rleCodec.encode(string);
  return encodedString;
};

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
        return encodeElecorate(replacedElectorates);
      },
      decode: async (electorateString: string) => {
        const electorateMap = await decodeElectorate(electorateString);
        const electorateMapDecoded = Object.entries(electorateMap).reduce((obj, [electorateCode, allocation]) => {
          obj[electorateCode] = allocationMap[String(allocation)] || null;
          return obj;
        }, {});
        return electorateMapDecoded;
      }
    },
    key: 'a',
    defaultValue: electorates.reduce((obj, current) => {
      obj[current.code] = null;
      return obj;
    }, {})
  }
};

export const hashConfig = makeHashConfigStore<{
  layout: string;
  allocations: Object;
}>(schema);
