import fs from 'fs';
const config = JSON.parse(fs.readFileSync('data/config.json', 'utf8'));

const newMap = {
  HINK: 'LEIC',
  LEIC: 'DAWS',
  WBAY: 'HERB',
  DAWS: 'CAPR',
  HERB: 'HINK',
  FAIR: 'FAIR',
  CAPR: 'FLYN',
  LONG: 'WBAY',
  FISH: 'LONG',
  BONN: 'FISH',
  FLYN: 'BLAI',
  DICK: 'DICK',
  PETR: 'PETR',
  BRIS: 'LILL',
  LILL: 'BONN',
  KENN: 'KENN',
  WRIG: 'GROO',
  RANK: 'MORE',
  MORE: 'RYAN',
  GRIF: 'BRIS',
  FADD: 'GRIF',
  BOWM: 'BOWM',
  MARA: 'MARA',
  GROO: 'WRIG',
  BLAI: 'OXLE',
  OXLE: 'RANK',
  RYAN: 'FORD',
  FORD: 'FADD',
  MONC: 'MONC',
  MCPH: 'MCPH',
  PARK: 'NENG',
  COWP: 'HUNT',
  LYNE: 'PATE',
  LIND: 'DOBE',
  MACQ: 'SHOR',
  DOBE: 'LYNE',
  SHOR: 'COWP',
  HUNT: 'PAGE',
  PATE: 'RICH',
  CALA: 'PARK',
  PAGE: 'CALA',
  RICH: 'MACQ',
  MCMA: 'CHIF',
  BENN: 'BERO',
  MITC: 'BENN',
  BRFD: 'BRFD',
  NEWC: 'MACK',
  RIVE: 'FARR',
  NENG: 'LIND',
  EMON: 'MCMA',
  WHIT: 'GREE',
  MACA: 'FOWL',
  CHIF: 'PARR',
  FOWL: 'BLAX',
  GREE: 'WATS',
  REID: 'REID',
  WARR: 'WARR',
  FARR: 'RIVE',
  GILM: 'MACA',
  CUNN: 'WERR',
  WERR: 'BANK',
  COOK: 'BART',
  PARR: 'GRAY',
  BLAX: 'SYDN',
  GRAY: 'WENT',
  HUGH: 'HUGH',
  BANK: 'COOK',
  WATS: 'CUNN',
  SYDN: 'KSMI',
  BART: 'WHIT',
  WENT: 'GILM',
  KSMI: 'EMON',
  GORT: 'HAWK',
  CORI: 'WANN',
  LALO: 'BALL',
  FRAS: 'GORT',
  WILL: 'COOP',
  COOP: 'CHIS',
  WANN: 'CORA',
  HAWK: 'MARI',
  KOOY: 'WILL',
  CHIS: 'KOOY',
  HOTH: 'HOTH',
  BRUC: 'BRUC',
  CASE: 'CASE',
  BALL: 'CORI',
  MARI: 'FRAS',
  HIGG: 'MACK',
  SWAN: 'TMP1',
  BULL: 'CANN',
  CANN: 'TANG',
  TANG: 'SWAN',
  BARK: 'SPEN',
  SPEN: 'BARK',
  HASL: 'HASL',
  CURT: 'CURT',
  COWA: 'COWA',
  KING: 'BOOT',
  BERO: 'MITC',
  MACK: 'ROBE',
  TMP1: 'CANN',
  CORA: 'LALO',
  DURA: 'DURA',
  PEAR: 'PEAR',
  DEAK: 'DEAK',
  MOOR: 'MOOR',
  ASTO: 'ASTO',
  FREM: 'FREM',
  PERT: 'PERT',
  ROBE: 'NEWC',
  BOOT: 'STUR',
  STUR: 'KING'
};

const electorates = config
  .flatMap(group => group.hexes.map(hex => ({ ...hex, group: group.name })))
  .toSorted((a, b) => a.index - b.index);

const electoratesByCode = Object.values(electorates).reduce((obj, electorate) => {
  obj[electorate.id] = electorate;
  return obj;
}, {});

config.forEach(state =>
  state.hexes.forEach((hex, i) => {
    const newId = newMap[hex.id];
    if (!newId) return;
    console.log('replace', hex.id, 'with', newId);

    const newElectorate = electoratesByCode[newId];
    state.hexes[i] = { ...newElectorate, coord: hex.coord, group: undefined };
  })
);

const uniques = {};
const duplicates = {};
config.forEach(state =>
  state.hexes.forEach(hex => {
    const superhex = { ...hex, state: state.name };
    if (uniques[superhex.id]) {
      duplicates[superhex.id] = duplicates[superhex.id] || [uniques[superhex.id]];
      duplicates[superhex.id].push(superhex);
    }
    uniques[superhex.id] = superhex;
  })
);

console.log(Object.values(duplicates).map(dup => dup.map(hex => `${hex.shortName} - ${hex.coord}/${hex.state}`)));
console.log(Object.entries(duplicates).length, 'duplicates');

fs.writeFileSync('data/config.json', JSON.stringify(config));
