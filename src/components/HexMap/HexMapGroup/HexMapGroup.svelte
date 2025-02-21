<script lang="ts">
  import HexLabels from './HexLabels/HexLabels.svelte';

  let {
    name = '',
    svgHexes = '',
    hexes = [],
    svgOutline = '',
    offset = [Infinity, Infinity],
    isFilled = false,
    allocations,
    focuses,
    hasAnyFocuses = false,
    labelsToShow = {},
    showElectorateLabels,
    showFocusedElectorateLabels
  } = $props();

  const radius = 16;
  function hexToPx(coord = [0, 0]) {
    const newX = coord[0] * (radius * Math.sqrt(3));
    const newY = coord[1] * 1.5 * radius;
    return [newX, newY].map(px => `${Math.round(px)}px`);
  }

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
  class:group--map-is-filled={isFilled}
  class:group--has-focuses={hasAnyFocuses}
>
  <g class="group-hexes">
    {@html svgHexes}
  </g>
  <g class="group-hex-strokes">
    {@html svgHexes}
  </g>
  {#if isVisible}
    <HexLabels {hexes} {allocations} labelsToShow={labels} {showElectorateLabels} />
  {/if}
  <g class="group-outline">{@html svgOutline}</g>
</g>

<style lang="scss">
  .group {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }
  .group--never-rendered {
    // don't render states at all if they're not needed.
    // prevents flash on first load
    display: none;
  }
  .group--hidden {
    opacity: 0;
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
    stroke: var(--c-black);
    stroke-width: 2px;
    transition:
      opacity 0.5s,
      stroke 0.2s;
    vector-effect: non-scaling-stroke;
  }
  .group--map-is-filled :global(.hex-outline) {
    opacity: 0;
    // transition to white because it's the same colour as the hex outlines and
    // black looks weird.
    stroke: white;
  }

  // Party colours
  $parties: Any, ALP, NXT, CLP, GRN, IND, KAP, LIB, LNP, NAT, ONP, OTH, PUP, Teal;
  @each $code in $parties {
    .group-hexes :global(.hex[data-allocation='#{""+$code}']) {
      fill: var(--a-#{$code});
    }
  }
  .group-hexes :global(.hex[data-allocation='null']) {
    fill: var(--a-null);
    stroke: var(--c-empty-border);
  }

  // Strokes
  .group-hex-strokes :global(.hex) {
    fill: none;
    stroke: none;
    stroke-width: 1px;
  }
  .group-hex-strokes :global(.hex:not([data-allocation='null'])) {
    fill: none;
    stroke: var(--c-filled-border);
    stroke-width: 1px;
  }

  // Uncertainty hash
  .group-hex-strokes :global(.hex[data-certain='null']) {
    fill: url(#uncertainty-hash);
  }

  .group--has-focuses {
    // remove state borders
    :global(.hex-outline) {
      opacity: 0;
      stroke: white;
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
      opacity: 0.2; // FIXME: needs design
    }
    .group-hex-strokes :global(.hex:not([data-allocation='null'])[data-focused='false']) {
      stroke: var(--c-white);
    }
  }
</style>
