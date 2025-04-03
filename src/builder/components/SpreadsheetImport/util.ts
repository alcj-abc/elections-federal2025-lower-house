import parties from '../../../../data/parties.json';
import { electorates } from '../../../lib/hashConfig';

export function parseTsv(tsv) {
  return tsv
    .split('\n')
    .filter(Boolean)
    .map(row => row.split('\t'));
}

/** Match electorate name to electorate */
export function matchElectorate(electorateName = '') {
  const sanitisedElectorateName = electorateName.trim().toLowerCase();
  return electorates.find(electorate => {
    return (
      electorate.name.toLowerCase() === sanitisedElectorateName ||
      electorate.id.toLocaleLowerCase() === sanitisedElectorateName
    );
  });
}

/** Sanitise allocations */
function matchAllocation(allocationName = '') {
  const sanitisedAllocationName = allocationName.trim().toLowerCase();
  if (!sanitisedAllocationName) {
    return null;
  }

  // Keyword match
  const matches = [
    {
      keywords: ['labor', 'alp'],
      code: 'ALP'
    },
    {
      keywords: ['nat', 'national'],
      code: 'NAT'
    },
    {
      keywords: ['lnp', 'clp', 'lib', 'coalition'],
      code: 'LNP'
    },
    {
      keywords: ['grn', 'green'],
      code: 'GRN'
    },

    // matches on party codes like 'onp', 'ind'(ependent), 'oth'(er)
    ...Object.keys(parties.hashCodes).map(code => ({
      keywords: [code.toLowerCase()],
      code
    }))
  ];

  const matched = matches.find(match => match.keywords.some(keyword => sanitisedAllocationName.includes(keyword)));

  if (!matched) {
    return undefined;
  }

  return matched.code;
}

/** Given a spreadsheet, match electorates and allocations and parse it into rows */
export function parseSpreadsheet(tsv) {
  const cells = parseTsv(tsv)
    .map(([electorate, allocation, certainty = 'unset', focus = 'unset']) => {
      const matchedElectorate = matchElectorate(electorate);
      const matchedAllocation = matchAllocation(allocation);
      if (electorate === 'Name') {
        return null;
      }
      return {
        electorate,
        allocation,
        certainty,
        matchedCertainty: certainty.toLowerCase() === 'true',
        focus,
        matchedFocus: focus.toLowerCase() === 'true',
        matchedElectorate,
        matchedAllocation,
        isOk: matchedElectorate && (matchedAllocation || matchedAllocation === null)
      };
    })
    .filter(row => row?.electorate);

  const hasFocuses = cells.some(cell => cell.matchedFocus);
  const hasCertainties = cells.some(cell => cell.matchedCertainty);

  return cells.map(cell => ({
    ...cell,
    matchedFocus: hasFocuses ? cell.matchedFocus : null,
    matchedCertainty: hasCertainties ? cell.matchedCertainty : true
  }));
}

/** Convert spreadsheet rows into a hashconfig */
export function applyHashConfig(rows, hashConfig) {
  const allocations = { ...hashConfig.allocations };
  const focuses = { ...hashConfig.focuses };
  const certainties = { ...hashConfig.certainties };
  rows.forEach(({ isOk, matchedElectorate, matchedAllocation, matchedCertainty, matchedFocus }) => {
    if (!isOk || !matchedElectorate) {
      return;
    }
    const electorateId = matchedElectorate.id;
    allocations[electorateId] = (matchedAllocation === 'None' ? null : matchedAllocation) || null;
    certainties[electorateId] = matchedCertainty || null;
    focuses[electorateId] = matchedFocus || null;
  });
  return {
    ...hashConfig,
    allocations,
    focuses,
    certainties
  };
}
