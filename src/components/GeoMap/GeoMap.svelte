<script lang="ts">
  /**
   * @file
   * Geographic map, largely ported from the older React version.
   *
   * This component uses Mapbox to render maps, and manually syncs props to
   * mapbox via the effect.
   *
   * 1. Mount the map, create layers with map.addLayer
   * 2. Apply state (style props) to the layers with map.setFeatureState
   */
  import mapConfig from '../../../data/appdata-mapconfig.json';
  import { untrack } from 'svelte';
  import { electorateIdToNumber } from './utils';
  import patternURL from '../../../public/Hash-four@2x.png';
  import { partyColours } from '../StyleRoot/store';
  import type { MapOptions, Map as MapType } from './maplibre-gl';
  import { maps } from './store';

  const { LngLatBounds, Map } = window.maplibregl;
  let {
    geoArea = 'Australia',
    isInteractive = false,
    config = {},
    allocations = {},
    focuses = {},
    certainties = {},
    labelsToShow = {},
    showElectorateLabels = false,
    showFocusedElectorateLabels = false,
    onClick = () => {},
    isInline = false,
    altText = '',
    geoBoundsTopRight = [],
    geoBoundsBottomLeft = []
  } = $props();

  let mapRootEl = $state<HTMLElement>();
  let map = $state<MapType | void>();
  let bounds = $state([
    [0, 0],
    [0, 0]
  ]);
  let isFirstRun = $state(true);
  let isElectoratePolygonsLoaded = $state(false);
  let isInspecting = $state(false);
  let resizeWidth = $state(window.innerWidth);
  let electorates = $derived.by(() => config.groups.flatMap(state => state.hexes));

  /** Are any of the electorates focused? If so, we use different styles for unallocated */
  let hasAnyFocuses = $derived.by(() => Object.values(focuses).some(Boolean));

  let hasAnyAllocations = $derived.by(() => Object.values(allocations).some(Boolean));

  function getGeoArea(geoArea) {
    if (geoArea === 'Custom snapshot') {
      const customBounds = [geoBoundsBottomLeft, geoBoundsTopRight];
      console.log({ customBounds });
      return customBounds;
    }
    return mapConfig.areas[geoArea] || mapConfig.areas.Australia;
  }

  // Load the map, set up the layers, get everything started
  $effect(() => {
    if (!mapRootEl) {
      return;
    }
    untrack(() => {
      if (!mapRootEl) {
        return;
      }
      const center = new LngLatBounds(getGeoArea(geoArea)).getCenter();
      const mapOptions = {
        ...mapConfig.baseConfig,
        container: mapRootEl,
        center,
        interactive: isInteractive
      } as MapOptions;
      const _map = new Map(mapOptions);
      map = _map;

      map.on('load', () => {
        if (!mapRootEl || !map) {
          return;
        }

        map.addSource('electorate_polygons', {
          type: 'vector',
          tiles: [
            'https://www.abc.net.au/res/sites/news-projects/map-vector-tiles-federal-electorates-2025/{z}/{x}/{y}.pbf'
          ],
          minzoom: 0,
          maxzoom: 9,
          bounds: [96.816952, -43.740497, 167.998033, -9.142162],
          promoteId: { federalelectorates2025: 'code' }
        });

        map.addSource('electorate_points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: mapConfig.electoratesGeo.map(geoProps => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [geoProps.longitude, geoProps.latitude]
              },
              id: electorateIdToNumber(geoProps.id),
              properties: {
                ...geoProps,
                // FIXME: why does this throw?
                name: electorates.find(electorate => electorate.id === geoProps.id.toUpperCase())?.name || ''
              }
            }))
          }
        });

        map.loadImage(patternURL).then(image => {
          map?.addImage('diagonal_stripes_pattern', image.data, { pixelRatio: 3 });
        });

        // empty electorate fill
        map.addLayer({
          id: 'electorate_polygons_fill',
          type: 'fill',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'fill-opacity': ['coalesce', ['feature-state', 'opacity'], 1],
            'fill-color': ['coalesce', ['feature-state', 'fill'], '#F1F1F1']
          }
        });

        // electorate pattern
        map.addLayer({
          id: 'electorate_polygons_pattern',
          type: 'fill',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'fill-opacity': ['coalesce', ['feature-state', 'pattern-opacity'], 0],
            'fill-pattern': 'diagonal_stripes_pattern'
          }
        });

        // Electorate outline (light)
        // Used for base outlines
        map.addLayer({
          id: 'electorate_polygons_line_underlay',
          type: 'line',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'line-color': ['coalesce', ['feature-state', 'stroke'], 'transparent'],
            'line-width': ['coalesce', ['feature-state', 'strokeWidth'], 0.5]
          }
        });

        // Second electorate outline (overlaid)
        // Draw more important layers above the base outlines so they don't overlap, e.g. focused outlines
        map.addLayer({
          id: 'electorate_polygons_line_overlay',
          type: 'line',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'line-color': ['coalesce', ['feature-state', 'strokeOverlay'], 'transparent'],
            'line-width': ['coalesce', ['feature-state', 'strokeOverlayWidth'], 0.5]
          }
        });

        // Labels
        map.addLayer({
          id: 'electorate_points_label',
          type: 'symbol',
          source: 'electorate_points',
          layout: {
            'text-field': '{name}',
            'text-anchor': 'center',
            'text-max-width': 6,
            'text-font': ['ABC Sans Bold'],
            'text-size': 12
          },
          paint: {
            'text-opacity': ['coalesce', ['feature-state', 'opacity'], 0],
            'text-color': ['coalesce', ['feature-state', 'fill'], '#000'],
            'text-halo-color': ['coalesce', ['feature-state', 'stroke'], '#fff'],
            'text-halo-width': 1.5
          }
        });

        map.on('sourcedata', () => {
          if (!mapRootEl || !map) {
            return;
          }
          isElectoratePolygonsLoaded = !!map.getSource('electorate_polygons');
          map.resize();
        });

        map.on('resize', () => {
          // We don't actually use the width, but this ensures we only call once
          // per resize
          resizeWidth = window.innerWidth;
        });

        map.on('click', event => {
          if (!onClick) {
            return;
          }

          const { point } = event;
          const features = map?.queryRenderedFeatures(point, { layers: ['electorate_polygons_fill'] });
          if (!features) {
            return;
          }
          if (features.length > 0) {
            const { code } = features[0].properties;

            if (code) {
              onClick({
                code: code.toUpperCase(),
                clientX: point.x,
                clientY: point.y
              });
            }
          }
        });

        updateMapState();
      });
    });
  });

  const electoratesGeoById = mapConfig.electoratesGeo.reduce((obj, geo) => {
    obj[geo.id.toUpperCase()] = geo;
    return obj;
  }, {});

  let electoratesRenderProps = $derived.by(() =>
    electorates.map(electorate => {
      const id = electorate.id;
      const allocation = allocations ? allocations[id] : null;
      const annotationBecauseFocused = showFocusedElectorateLabels ? focuses[id] : false;
      return {
        id,
        name: electorate.name,
        allocation,
        hasAllocation: allocation !== null, // && determineIfAllocationIsMade(allocation),
        hasDefinitiveAllocation: true, //allocation && determineIfAllocationIsDefinitive(allocation),
        certainty: certainties ? certainties[id] : true,
        annotation: annotationBecauseFocused || showElectorateLabels || (labelsToShow ? labelsToShow[id] : false),
        focus: focuses ? focuses[id] : false,
        geoProps: electoratesGeoById[id]
      };
    })
  );
  const updateMapState = (isInspectionChange = false) => {
    if (!map || !isElectoratePolygonsLoaded) {
      return;
    }

    electoratesRenderProps.forEach(electorateRenderProps => {
      const { id, allocation, hasAllocation, annotation, certainty, focus } = electorateRenderProps;
      const geoPropsID = id.toLowerCase();
      const colour = $partyColours.allocated[allocation] || $partyColours.allocated['null'];
      const uncertainColour = $partyColours.uncertain[allocation] || 'white';

      const style = {
        fill: colour,
        opacity: 1,
        strokeWidth: 0.5,
        'pattern-opacity': 0,
        stroke: '#60646C',
        strokeOverlay: 'transparent',
        strokeOverlayOpacity: 0,
        strokeOverlayWidth: 2
      };

      const labelStyle = {
        opacity: isInspecting || annotation ? 1 : 0,
        fill: 'black',
        stroke: 'white'
      };

      if (hasAnyFocuses) {
        if (focus) {
          style.stroke = '#fff';
        } else {
          // Make the unfocused electorates grey
          style.opacity = 0.1;
          // style.stroke = '#CDCBCB';
          // style.fill = '#F1F1F1';
        }
        if (!hasAnyAllocations) {
          if (focus) {
            style.strokeOverlay = '#000';
            style.strokeOverlayWidth = 1;
            style.stroke = 'transparent';
            style.fill = '#fff';
          } else {
            style.opacity = 1;
            style.stroke = '#CDCBCB';
            style.fill = '#F1F1F1';
          }
        }
      }

      if (hasAnyAllocations) {
        style.stroke = '#CDCBCB';
      }

      if (hasAllocation) {
        labelStyle.stroke = colour;
        labelStyle.fill = '#fff';
        style.stroke = 'transparent';
        style.strokeOverlay = '#fff';
        style.strokeOverlayWidth = 0.5;
      }

      if (!certainty) {
        style['pattern-opacity'] = 1;
        labelStyle.stroke = uncertainColour;
        labelStyle.fill = 'black';
      }

      map?.setFeatureState(
        {
          source: 'electorate_polygons',
          sourceLayer: 'federalelectorates2025',
          id: geoPropsID
        },
        style
        // {
        //   // how opaque is the fill
        //   opacity: hasAnyFocuses && !focus ? 0.25 : 1,
        //   // how opaque is the pattern
        //   'pattern-opacity': certainty ? 0 : 1,
        //   // fill colour
        //   fill: color,
        //   // stroke colour
        //   stroke: hasAllocation ? '#fff' : focus ? '#000' : 'transparent',
        //   // stroke width
        //   strokeWidth: hasAnyFocuses && focus ? 1 : 0.5
        // }
      );

      map?.setFeatureState(
        {
          source: 'electorate_points',
          id: electorateIdToNumber(geoPropsID)
        },
        labelStyle
      );
    });

    if (!isInspectionChange) {
      electoratesRenderProps.forEach(prop => {
        if (!prop.geoProps) {
          console.error('missing gepoperoper', prop.id);
        }
      });
      let nextBounds = getGeoArea(geoArea);

      const focusedElectoratesGeoProperties = electoratesRenderProps
        .filter(({ focus }) => focus)
        .map(electorate => electorate.geoProps);

      if (geoArea === 'Focus Driven' && focusedElectoratesGeoProperties.length > 0) {
        const [{ east, north, south, west }, ...remainingGeoProps] = focusedElectoratesGeoProperties;

        let newBounds = [
          [east, north],
          [west, south]
        ];

        if (remainingGeoProps.length) {
          newBounds = remainingGeoProps.reduce(
            (memo, geoProps) => [
              [Math.max(memo[0][0], geoProps.east), Math.max(memo[0][1], geoProps.north)],
              [Math.min(memo[1][0], geoProps.west), Math.min(memo[1][1], geoProps.south)]
            ],
            newBounds
          );
        }

        // This code was written in reverse and I can't be fixing it rn soz. Must be [bottom right, top left]
        nextBounds = newBounds.reverse();
      }

      bounds = nextBounds;
    }
  };

  // When dependencies change, update the map.
  $effect(() => {
    const deps = [isElectoratePolygonsLoaded, geoArea, electoratesRenderProps, isInspecting];
    deps && updateMapState(false);
  });

  // resize map to fit bounds
  $effect(() => {
    const _map = map;
    const _bounds = bounds;
    const _resizeWidth = resizeWidth;
    const areBoundsValid = bounds.every(([x, y]) => x && y);
    const isCustomArea = geoArea === 'Custom snapshot';
    if (!_map || !_bounds || !_resizeWidth || !areBoundsValid) {
      return;
    }

    return untrack(() => {
      let textIgnorePlacementTimeout;

      const padding =
        geoArea === 'Australia' || isCustomArea ? undefined : { top: 16, left: 16, right: 16, bottom: 16 };

      _map?.fitBounds(new LngLatBounds(_bounds as any), {
        padding,
        // If this is an inline map, we don't animate, it's essentially a static graphic
        duration: isInline || isFirstRun ? 0 : 3000
      });
      textIgnorePlacementTimeout = setTimeout(
        () => _map?.setLayoutProperty('electorate_points_label', 'text-ignore-placement', geoArea !== 'Australia'),
        geoArea === 'Australia' ? 250 : 750
      );
      if (isFirstRun) {
        isFirstRun = false;
      }

      return () => {
        clearTimeout(textIgnorePlacementTimeout);
      };
    });
  });

  // Add alt text and proper role to the map <canvas>
  $effect(() => {
    const canvas = map?._canvas;
    if (!canvas || !altText) {
      return;
    }
    canvas.setAttribute('aria-label', altText);
    canvas.setAttribute('role', 'img');
  });

  // save our Map in the global store
  $effect(() => {
    const _map = map;
    return untrack(() => {
      if (!_map) {
        return;
      }
      $maps = Array.from(new Set([...$maps, _map]));
      return () => {
        $maps = $maps.filter(thisMap => thisMap !== _map);
      };
    });
  });
</script>

<!-- While the alt key is held down on an interactive graphic, we enable
'inspecting' mode. Currently, this displays labels on each electorate to
help with authoring graphics in the editor. -->
<svelte:window
  onkeydown={event => (isInspecting = isInteractive ? event.altKey : false)}
  onkeyup={event => (isInspecting = isInteractive ? event.altKey : false)}
/>

<div
  class="geomap"
  class:geomap--ready={!isFirstRun}
  class:geomap--border={geoArea !== 'Australia'}
  class:geomap--inline={isInline}
  bind:this={mapRootEl}
></div>

<style lang="scss">
  .geomap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 1rem;
    overflow: hidden;
    animation: fade-in 1s;
    :global(*) {
      box-sizing: border-box;
    }
    &:not(.geomap--inline) {
      height: calc(100% - 0.75rem);
    }
  }
  .geomap--ready {
    transition: border 1s;
  }
  .geomap--border {
    border: 1px solid #cdcbcb;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
