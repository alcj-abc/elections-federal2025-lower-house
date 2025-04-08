copy(
  // a TSV in the format id,margin
  tsv
    .split('\n')
    .slice(1)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split('\t'))
    .map(([id, margin]) => {
      let status = 'marginal';
      if (margin >= 6) status = 'safe';
      if (margin >= 12) status = 'very safe';
      return [id.toUpperCase(), status].join('\t');
    }, {})
    .join('\n')
);
