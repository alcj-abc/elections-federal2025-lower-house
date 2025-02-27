<script lang="ts">
  import debounce from 'debounce';
  import { type Map as MapType, type MapOptions, LngLatBounds, Map } from 'maplibre-gl';
  import mapConfig from '../../../data/appdata-mapconfig.json';
  import { onMount, untrack } from 'svelte';
  import { electorateIdToNumber } from './utils';
  import patternURL from './pattern.webp';
  import { partyColours } from '../StyleRoot/store';
  let {
    geoArea = 'Australia',
    isInteractive = false,
    config = {},
    allocations = {},
    focuses = {},
    certainties = {},
    labelsToShow = {},
    showStateLabels = false,
    showElectorateLabels = false,
    showFocusedElectorateLabels = false,
    onClick = () => {}
  } = $props();

  let mapRootEl = $state<HTMLElement>();
  let map = $state<MapType>();
  let bounds = $state([
    [0, 0],
    [0, 0]
  ]);
  let isElectoratePolygonsLoaded = $state(false);
  let isInspecting = $state(false);
  let resizeDirtyValue = $state(Math.random());
  let electorates = $derived.by(() => config.groups.flatMap(state => state.hexes));

  /** Are any of the electorates focused? If so, we use different styles for unallocated */
  let hasAnyFocuses = $derived.by(() => Object.values(focuses).some(Boolean));

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
        // @ts-ignore
        color: $partyColours[allocation] || $partyColours.null,
        geoProps: mapConfig.electoratesGeo.find(geoProps => geoProps.id.toUpperCase() === id)
      };
    })
  );

  $effect(() => {
    console.log({
      showElectorateLabels,
      electoratesRenderProps
    });
  });

  // Load the map, set up the layers, get everything started
  $effect(() => {
    if (!mapRootEl) {
      return;
    }
    untrack(() => {
      if (!mapRootEl) {
        return;
      }
      const center = new LngLatBounds(mapConfig.areas[geoArea] || mapConfig.areas.Australia).getCenter();
      const mapOptions = {
        ...mapConfig.baseConfig,
        container: mapRootEl,
        center,
        interactive: isInteractive
      } as MapOptions;
      map = new Map(mapOptions);

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
          map?.addImage('diagonal_stripes_pattern', image.data);
        });

        map.addLayer({
          id: 'electorate_polygons_fill',
          type: 'fill',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'fill-opacity': ['coalesce', ['feature-state', 'opacity'], 1],
            'fill-color': ['coalesce', ['feature-state', 'fill'], '#fff']
          }
        });

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

        map.addLayer({
          id: 'electorate_polygons_baseline',
          type: 'line',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'line-opacity': ['coalesce', ['feature-state', 'opacity'], 1],
            'line-color': '#ddd',
            'line-width': 1
          }
        });

        map.addLayer({
          id: 'electorate_polygons_line',
          type: 'line',
          source: 'electorate_polygons',
          'source-layer': 'federalelectorates2025',
          paint: {
            'line-color': ['coalesce', ['feature-state', 'stroke'], 'transparent'],
            'line-width': 1
          }
        });

        map.addLayer({
          id: 'electorate_points_label',
          type: 'symbol',
          source: 'electorate_points',
          layout: {
            'text-field': '{name}',
            'text-anchor': 'center',
            'text-max-width': 6,
            'text-font': ['ABC Sans Bold'],
            'text-size': 13
          },
          paint: {
            'text-opacity': ['coalesce', ['feature-state', 'opacity'], 0],
            'text-color': '#000',
            'text-halo-color': '#fff',
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

        map.on(
          'resize',
          debounce(() => {
            resizeDirtyValue = Math.random();
          }, 200)
        );

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

  const updateMapState = (isInspectionChange = false) => {
    if (!map || !isElectoratePolygonsLoaded) {
      return;
    }

    electoratesRenderProps.forEach(electorateRenderProps => {
      const { id, hasAllocation, annotation, certainty, focus, color, geoProps } = electorateRenderProps;
      const geoPropsID = id.toLowerCase();

      map?.setFeatureState(
        {
          source: 'electorate_polygons',
          sourceLayer: 'federalelectorates2025',
          id: geoPropsID
        },
        {
          opacity: hasAnyFocuses && !focus ? 0.25 : 1,
          'pattern-opacity': certainty ? 0 : 1,
          fill: color,
          stroke: hasAllocation ? '#fff' : focus ? '#000' : 'transparent'
        }
      );

      map?.setFeatureState(
        {
          source: 'electorate_points',
          id: electorateIdToNumber(geoPropsID)
        },
        { opacity: isInspecting || annotation ? 1 : 0 }
      );
    });

    if (!isInspectionChange) {
      let nextBounds = mapConfig.areas[geoArea];

      const focusedElectoratesGeoProperties = electoratesRenderProps
        .filter(({ focus }) => focus)
        .map(electorate => electorate.geoProps);

      if (geoArea === 'FocusDriven' && focusedElectoratesGeoProperties.length > 0) {
        const [{ east, north, south, west }, ...remainingGeoProps] = focusedElectoratesGeoProperties;

        nextBounds = [
          [east, north],
          [west, south]
        ];

        if (remainingGeoProps.length) {
          nextBounds = remainingGeoProps.reduce(
            (memo, geoProps) => [
              [Math.max(memo[0][0], geoProps.east), Math.max(memo[0][1], geoProps.north)],
              [Math.min(memo[1][0], geoProps.west), Math.min(memo[1][1], geoProps.south)]
            ],
            nextBounds
          );
        }
      }

      bounds = nextBounds;
    }
  };

  // When dependencies change, update the map.
  $effect(() => {
    const deps = [isElectoratePolygonsLoaded, geoArea, electoratesRenderProps];
    deps && updateMapState(false);
  });

  $effect(() => {
    const deps = [isInspecting];
    deps && updateMapState(true);
  });

  $effect(() => {
    const deps = [map, bounds, resizeDirtyValue];
    if (!map || !bounds || !deps) {
      return;
    }
    let textIgnorePlacementTimeout;

    map.fitBounds(new LngLatBounds(bounds), mapConfig.fitBounds);
    textIgnorePlacementTimeout = setTimeout(
      () => map?.setLayoutProperty('electorate_points_label', 'text-ignore-placement', geoArea !== 'Australia'),
      geoArea === 'Australia' ? 250 : 750
    );

    return () => {
      clearTimeout(textIgnorePlacementTimeout);
    };
  });
</script>

<!-- While the alt key is held down on an interactive graphic, we enable
'inspecting' mode. Currently, this displays labels on each electorate to
help with authoring graphics in the editor. -->
<svelte:window
  onkeydown={event => (isInspecting = isInteractive ? event.altKey : false)}
  onkeyup={event => (isInspecting = isInteractive ? event.altKey : false)}
/>

<div class="geomap" bind:this={mapRootEl}></div>

<style lang="scss">
  .geomap {
    width: 100%;
    height: 100%;
  }
</style>
