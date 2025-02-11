/**
 * Code to sort electorates by safety, so we can use run length encoding to
 * encode smaller strings.
 */
const sortIndex = ['VERY_SAFE', 'SAFE', 'MARGINAL'];
const sortedParties = Object.entries(
  historical.reduce((obj, current) => {
    obj[current.holder] = obj[current.holder] || [];
    obj[current.holder].push(current);
    return obj;
  }, {})
).map(([name, chunk]) => ({
  name,
  chunk: chunk.toSorted((a, b) => sortIndex.indexOf(a.security) - sortIndex.indexOf(b.security))
}));

const indexes = [];
sortedParties.forEach(electorates =>
  indexes.push(...electorates.chunk.filter(electorate => electorate.security !== 'marginal'))
);
sortedParties.forEach(electorates =>
  indexes.push(...electorates.chunk.filter(electorate => electorate.security === 'marginal'))
);
console.log(indexes);

config.forEach(state =>
  state.hexes.forEach(electorate => {
    electorate.id = indexes.findIndex(index => index.id === electorate.code);
  })
);

copy(JSON.stringify(config));
