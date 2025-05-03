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
 * Get first preference swing for the given party code(s)
 */
export function getPrimarySwingPct(data, checkFn = code => true): { string: number | null } {
  return data.data.electorates.reduce((obj, electorate) => {
    const id = electorate.code;
    if (Number(electorate.counted || 0) <= 5) {
      obj[id] = 0;
      return obj;
    }
    if (!electorate.accumulatedCandidates) {
      console.error('Missing accumulatedCandidates');
      return obj;
    }
    const matchedCandidates = electorate.accumulatedCandidates.filter(candidate => {
      const code = partiesConfig.synonyms[candidate.party.code] || candidate.party.code;
      return checkFn(code);
    });

    const cumulativePct = matchedCandidates.reduce((currentPct, matchedCandidate) => {
      const pct = matchedCandidate?.simple?.swing;

      const sanitisedPct = pct ? Number(pct) : 0;

      return currentPct + sanitisedPct;
    }, 0);
    obj[id] = cumulativePct;
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
