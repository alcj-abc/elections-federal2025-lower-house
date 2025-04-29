/**
 * Given a config, attempt to work out a human readable name
 */
export const defaultMarkerName = config => {
  if (config.arrowChart !== 'None') {
    return ['Arrow chart', config.arrowChart].join(' ');
  }

  return [
    config.vizType,
    config.vizType === 'geo' ? config.geoArea : config.layout.replace(/_/g, ' ').toLowerCase()
  ].join(' ');
};
