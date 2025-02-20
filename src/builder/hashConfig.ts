import { getRleCodec, makeSvelteStore, getBinaryCodec } from 'hash-codec';
import layouts from '../../data/appdata-layouts.json';
import data from '../../data/appdata-built.json';
import historical19 from '../../data/appdata-historical-2019.json';
import historical22 from '../../data/appdata-historical-2022.json';
import mapConfig from '../../data/appdata-mapconfig.json';

import { invertMap } from '../lib/utils';
/** Array containing all the individual electorate hexes */
export const electorates = data.groups
  .flatMap(group => group.hexes.map(hex => ({ ...hex, group: group.name })))
  .toSorted((a, b) => a.id - b.id);

export const electoratesByCode = Object.values(electorates).reduce((obj, electorate) => {
  obj[electorate.code] = electorate;
  return obj;
}, {});

const groups = data.groups;
export { historical19, historical22, groups, mapConfig };

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

const binaryElectorateCodec = {
  encode: async function (electorates) {
    const values = getSortedValues(electorates);
    const bin = binaryCodecRle.encode(values);
    return bin;
  },
  decode: async function (encodedString) {
    const values = binaryCodecRle.decode(encodedString);
    return putValues(values);
  }
};

const defaultNullElectorates = Object.freeze(
  electorates.reduce((obj, current) => {
    obj[current.code] = null;
    return obj;
  }, {})
);
export const schema = {
  vizType: {
    type: 'enum',
    key: 'v',
    defaultValue: 'hex',
    values: ['hex', 'geo']
  },
  layout: {
    type: 'enum',
    key: 'l',
    defaultValue: 'COUNTRY',
    values: Object.keys(layouts)
  },
  geoArea: {
    type: 'enum',
    key: 'g',
    defaultValue: 'Australia',
    values: Object.keys(mapConfig.areas)
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
    defaultValue: defaultNullElectorates
  },
  focuses: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'f',
    defaultValue: defaultNullElectorates
  },
  certainties: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'c',
    defaultValue: defaultNullElectorates
  },
  labelsToShow: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'li',
    defaultValue: defaultNullElectorates
  },
  showLabelsWhen: {
    type: 'enum',
    key: 'lb',
    defaultValue: 'none',
    values: ['none', 'states', 'electorates']
  },
  showStateLabels: {
    type: 'boolean',
    key: 'ls',
    defaultValue: false
  },
  showElectorateLabels: {
    type: 'boolean',
    key: 'le',
    defaultValue: false
  },
  showFocusedElectorateLabels: {
    type: 'boolean',
    key: 'lf',
    defaultValue: false
  }
};

export const hashConfig = makeSvelteStore<{
  layout: string;
  geoArea: string;
  allocations: Object;
  focuses: Object;
  certainties: Object;
  labelsToShow: Object;
  showStateLabels: boolean;
  showElectorateLabels: boolean;
  showFocusedElectorateLabels: boolean;
}>(schema);
