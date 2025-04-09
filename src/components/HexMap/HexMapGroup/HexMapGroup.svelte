<script lang="ts">
  import { hexToPx } from '../../../lib/utils';
  import HexLabels from './HexLabels/HexLabels.svelte';

  let {
    name = '',
    svgHexes = '',
    hexes = [],
    svgOutline = '',
    offset = [Infinity, Infinity],
    hasAllocations,
    hasAllAllocations,
    allocations,
    focuses,
    certainties,
    hasAnyFocuses = false,
    /** The hex map is to be used as a base for other visualisations, such as the arrow map */
    isOutlineOnly = false,
    labelsToShow = {},
    showElectorateLabels,
    showFocusedElectorateLabels,
    isStaticLayout
  } = $props();

  let transform = $state(`translate(${hexToPx(offset).join(',')})`);
  let hasBeenVisible = $state(false);
  let isVisible = $derived.by(() => offset[0] !== Infinity);
  $effect(() => {
    if (isVisible) {
      transform = `translate(${hexToPx(offset).join(',')})`;
      hasBeenVisible = true;
    }
  });

  let labels = $derived.by(() => {
    if (hasAnyFocuses && showFocusedElectorateLabels) {
      return focuses;
    }
    return labelsToShow;
  });
</script>

<g
  class="group"
  data-name={name}
  style:transform
  class:group--never-rendered={!hasBeenVisible}
  class:group--hidden={!isVisible}
  class:group--map-is-static={isStaticLayout}
  class:group--map-is-empty={!hasAllocations}
  class:group--map-is-full={hasAllAllocations}
  class:group--has-focuses={hasAnyFocuses}
  class:group--is-outline={isOutlineOnly}
>
  <g class="group-hexes">
    {@html svgHexes}
  </g>
  <g class="group-outline group-outline__under">{@html svgOutline}</g>
  <g class="group-outline group-outline__over" style:opacity={hasAnyFocuses && !hasAllocations ? 0 : 1}>
    {@html svgOutline}
  </g>
  <g class="group-hex-strokes">
    {@html svgHexes}
  </g>
  {#if isVisible}
    <HexLabels {hexes} {allocations} {certainties} labelsToShow={labels} {showElectorateLabels} />
  {/if}
</g>

<style lang="scss">
  .group:not(.group--map-is-static) {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }

  .group--never-rendered {
    // don't render states at all if they're not needed.
    // prevents flash on first load
    display: none;
  }
  .group--hidden {
    opacity: 0;
    pointer-events: none;
  }
  .group-hex-strokes,
  .group-outline {
    pointer-events: none;
  }
  .group :global(.hex) {
    transition: all 0.5s;
    vector-effect: non-scaling-stroke;
  }

  // Group/state outlines
  .group-outline :global(.hex-outline) {
    fill: none;
    stroke: var(--c-state-outline);
    stroke-width: 1.5px;
    transition:
      opacity 0.5s,
      stroke 0.5s;
    vector-effect: non-scaling-stroke;
  }
  .group--map-is-empty:not(.group--has-focuses) .group-outline :global(.hex-outline) {
    stroke: var(--c-empty-state-outline);
  }
  .group--map-is-full:not(.group--has-focuses) .group-outline :global(.hex-outline) {
    stroke: transparent;
  }

  // Party colours
  $parties: Any, ALP, CLP, GRN, IND, KAP, LIB, LNP, NAT, ONP, OTH, PUP, Teal, CA;
  @each $code in $parties {
    .group-hexes :global(.hex[data-allocation='#{""+$code}']) {
      fill: var(--a-#{$code});
    }
  }

  .group-hexes :global(.hex[data-allocation='null']) {
    fill: var(--a-null);
    stroke: var(--a-null-border);
    stroke-width: 1.5px;
  }

  .group--map-is-empty .group-hexes :global(.hex) {
    fill: var(--a-empty);
    stroke: var(--a-empty-border);
    stroke-width: 1px;
  }

  // Strokes
  .group-hex-strokes :global(.hex) {
    fill: transparent;
    stroke: transparent;
    stroke-width: 1.5px;
  }
  .group-hex-strokes :global(.hex:not([data-allocation='null'])) {
    fill: transparent;
    stroke: var(--c-filled-border);
    stroke-width: 1.5px;
  }

  // Uncertainty hash
  .group-hex-strokes :global(.hex[data-certain='null']:not([data-allocation='null'])) {
    fill: url(#uncertainty-hash);
    stroke-width: 2px;
  }

  .group--has-focuses {
    .group-hexes :global(.hex) {
      stroke-width: 1.5px;
    }
    // Focused null hexes turn white w black border
    .group-hexes :global(.hex[data-allocation='null'][data-focused='true']) {
      fill: var(--c-white);
    }
    .group-hex-strokes :global(.hex[data-allocation='null'][data-focused='true']) {
      stroke: var(--c-black);
    }

    // unfocused null hexes turn white with grey border underneath
    .group-hexes :global(.hex[data-allocation='null'][data-focused='false']) {
      fill: #ebebeb;
      stroke: #fff;
    }
    .group-hex-strokes :global(.hex[data-allocation='null'][data-focused='false']) {
      stroke: transparent;
    }

    // allocated but unfocused hexes fade out
    .group-hexes :global(.hex:not([data-allocation='null'])[data-focused='false']) {
      opacity: 0.1;
    }
    .group-hex-strokes :global(.hex:not([data-allocation='null'])[data-focused='false']) {
      stroke: var(--c-white);
    }

    &:not(.group--map-is-empty) .group-outline :global(.hex-outline) {
      stroke: #60646c;
    }
  }

  .group--is-outline :global {
    .hex {
      stroke: white !important;
      fill: #f1f1f1;
      stroke-width: 1.5 !important;
    }
    .hex-outline {
      stroke: #cdcbcb !important;
    }
  }
</style>
