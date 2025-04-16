import config from '../data/config.json';

export const liveDataName = config.liveData.name;

/**
 * Get allocations & certainties from live data
 */
export function getMapAllocationsAndCertainty(data) {
  return data.data.electorates.reduce(
    (obj, electorate) => {
      const id = electorate.code;
      obj.allocations[id] = electorate.leadingCandidate?.party?.code || null;
      obj.certainties[id] = !!electorate.isCalled;
      return obj;
    },
    {
      allocations: {},
      certainties: {}
    }
  );
}

import partiesConfig from '../data/parties.json';

/**
 * Get primary vote count for the given party code(s)
 */
export function getPrimaryCountPct(data, codes: string[] = []): { string: number | null } {
  return data.data.electorates.reduce((obj, electorate) => {
    const id = electorate.code;
    const matchedCandidate = electorate.accumulatedCandidates.find(candidate =>
      codes.includes(partiesConfig.synonyms[candidate.party.code] || candidate.party.code)
    );
    const pct = matchedCandidate?.simple?.pct;
    obj[id] = pct ? Number(pct) : null;
    return obj;
  }, {});
}

/**
 * Get the swing in each electorate for the given party code(s).
 * @param data
 * @param codes - The party codes to return matches for. E.g. ['ALP'] or ['LNP', 'CLP', 'LIB']
 * @returns
 */
export function getSwing(data, codes = []) {
  return data.data.electorates.reduce((obj, electorate) => {
    const id = electorate.code;
    const swing = electorate.swingDial.find(candidate => codes.includes(candidate.party.code));
    const swingString = swing?.predicted2CP?.swing;
    obj[id] = typeof swingString === 'string' ? Number(swingString) : null;
    return obj;
  }, {});
}

let liveDataPromise;
export async function getLiveData({ cache } = { cache: true }) {
  if (cache && liveDataPromise) {
    return liveDataPromise;
  }
  liveDataPromise = fetch(config.liveData.url).then(res => res.json());
  return liveDataPromise;
}
