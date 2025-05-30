<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { hexToPx } from '../../../lib/utils';
  import HexLabels from './HexLabels/HexLabels.svelte';
  import { fade } from 'svelte/transition';

  let {
    groups,
    isStaticLayout,
    layout,
    allocations,
    focuses,
    certainties,
    showElectorateLabels,
    showFocusedElectorateLabels,
    labelsToShow,
    isOutlineOnly = false,
    showStateOutlinesOnTop = false,
    hexFlip = 'None'
  } = $props();

  let svgEl = $state<SVGGElement>();

  let hasRendered = $state(false);
  onMount(() => {
    setTimeout(() => {
      hasRendered = true;
    }, 1);
  });

  /** Are some of the electorates allocated?  */
  let hasAllocations = $derived.by(() => {
    const allocationValues = Object.values(allocations);
    return allocationValues.length !== 0 && allocationValues.some(Boolean);
  });

  /** Are all the electorates allocated? If so, turn off state borders. */
  let hasAllAllocations = $derived.by(() => {
    const allocationValues = Object.values(allocations);
    return allocationValues.length !== 0 && allocationValues.every(Boolean);
  });

  /** Are any of the electorates focused? If so, we use different styles for unallocated */
  let hasAnyFocuses = $derived.by(() => Object.values(focuses).some(Boolean));

  // Set properties manually on hexes. Svelte is slow, and I don't trust it to
  // be performant creating all 150+ electorates
  let hexElements = $derived.by(() =>
    Array.from(svgEl?.querySelectorAll('polygon.hex') || []).filter(hex => hex instanceof SVGPolygonElement)
  );

  let existingValues = { allocation: {} };
  $effect(() => {
    const _allocations = { ...allocations };
    const _focuses = focuses;
    const _certainties = certainties;

    hexElements.forEach(hex => {
      const electorateCode = hex.dataset.id;
      if (!electorateCode) {
        return;
      }

      // set allocation
      const newAllocation = _allocations[electorateCode] || null;
      const existingAllocation = existingValues.allocation[electorateCode];
      hex.dataset.allocation = newAllocation;

      if (hexFlip === 'Flip' && existingAllocation !== newAllocation) {
        hex.style.setProperty('--allocationFrom', `var(--a-${existingAllocation})`);
        hex.style.setProperty('--allocationTo', `var(--a-${newAllocation})`);
        hex.classList.add('hex--flip');
      }
      existingValues.allocation[electorateCode] = newAllocation;

      const newFocus = hasAnyFocuses ? _focuses[electorateCode] || false : true;
      hex.dataset.focused = newFocus;

      const newCertainty = _certainties[electorateCode] || null;
      hex.dataset.certain = newCertainty;
    });
  });

  /**
   * Derive the props to render each group. Svelte iterates this to
   * render each state.
   */
  let derivedGroups = $derived.by(() => {
    const _groups = groups;
    const _layout = layout;
    return _groups.map(group => {
      const offset = _layout.positions[group.name];
      const isVisible = offset && offset[0] !== Infinity;
      const transform = hexToPx(offset).join(',');
      const labels = hasAnyFocuses && showFocusedElectorateLabels ? focuses : labelsToShow;

      const groupProps = {
        'data-name': group.name,
        style: `transform: translate(${transform})`,
        class: [
          'group',
          !isVisible && 'group--hidden',
          isStaticLayout && 'group--map-is-static',
          !hasAllocations && 'group--map-is-empty',
          hasAllAllocations && 'group--map-is-full',
          hasAnyFocuses && 'group--has-focuses',
          isOutlineOnly && 'group--is-outline',
          hasRendered && 'group--rendered'
        ]
          .filter(Boolean)
          .join(' ')
      };

      return {
        isVisible,
        labels,
        group,
        groupProps
      };
    });
  });

  let areStateOutlinesOnTop = $derived.by(() => showStateOutlinesOnTop || (hasAllocations && hasAnyFocuses));
</script>

<g
  bind:this={svgEl}
  onanimationend={e => {
    const hex = e.target as SVGPathElement;
    hex.classList.remove('hex--flip');
  }}
>
  <!-- hexagon colours, state outlines -->
  {#each derivedGroups as { groupProps, group }}
    <g {...groupProps}>
      <g class="group-hexes">
        {@html group.svgHexes}
      </g>

      {#if !areStateOutlinesOnTop}
        <g class="group-outline group-outline__under" out:fade={{ duration: 200, delay: 200 }}>
          {@html group.svgOutline}
        </g>
      {/if}
    </g>
  {/each}
  <!-- Hexagon focused/allocated outlines, labels above state outlines  -->
  {#each derivedGroups as { groupProps, isVisible, labels, group }}
    <g {...groupProps}>
      <g class="group-hex-strokes">
        {@html group.svgHexes}
      </g>
      {#if areStateOutlinesOnTop}
        <g class="group-outline group-outline__over" transition:fade={{ duration: 200 }}>{@html group.svgOutline}</g>
      {/if}
      {#if isVisible}
        <HexLabels hexes={group.hexes} {allocations} {certainties} labelsToShow={labels} {showElectorateLabels} />
      {/if}
    </g>
  {/each}
</g>

<style lang="scss">
  .group:not(.group--map-is-static) {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }

  // There is a race condition that starts the map black before filling it with
  // allocations. Don't enable transitions until that has completed
  .group--rendered {
    :global {
      .hex {
        transition: all 0.5s;
      }
      .hex-outline {
        transition:
          opacity 0.5s,
          stroke 0.5s;
      }
    }
  }
  .group--hidden {
    opacity: 0;
    pointer-events: none;
  }
  .group-hex-strokes,
  .group-outline {
    pointer-events: none;
  }
  .group :global {
    .hex {
      vector-effect: non-scaling-stroke;
      fill: transparent;

      // hex flipping animation setup
      transform-box: fill-box;
      transform-origin: 50% 50%;
      --hexFlipMinWidth: 0.03;
      @media (min-width: 46.5rem) {
        --hexFlipMinWidth: 0.03;
      }

      &.hex--flip {
        animation: hex-flip 1s ease-in-out;
      }
    }
  }

  // Group/state outlines
  .group-outline :global(.hex-outline) {
    fill: transparent;
    stroke: var(--c-stateOutline);
    stroke-width: 1.5px;
    vector-effect: non-scaling-stroke;
  }
  .group--map-is-empty:not(.group--has-focuses) .group-outline :global(.hex-outline) {
    stroke: var(--c-emptyStateOutline);
  }
  .group--map-is-full:not(.group--has-focuses) .group-outline :global(.hex-outline) {
    stroke: var(--c-fullStateOutline);
  }

  // Party colours
  $parties: Any, ALP, CLP, GRN, IND, KAP, LIB, LNP, NAT, ONP, OTH, PUP, Teal, CA, TOP;
  @each $code in $parties {
    .group-hexes :global(.hex[data-allocation='#{""+$code}']) {
      fill: var(--a-#{$code});
    }
  }

  .group-hexes :global(.hex[data-allocation='null']) {
    fill: var(--a-null);
    stroke: var(--a-nullBorder);
    stroke-width: 1.5px;
  }

  .group--map-is-empty .group-hexes :global(.hex) {
    fill: var(--c-empty);
    stroke: var(--c-emptyBorder);
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
    stroke: var(--c-filledBorder);
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
      fill: #fff;
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
  }

  .group--is-outline :global {
    .hex {
      opacity: 0;
    }
    .hex-outline {
      stroke: var(--c-emptyBorder) !important;
    }
  }

  @keyframes hex-flip {
    from {
      transform: none;
      fill: var(--allocationFrom);
    }

    50% {
      transform: scaleX(var(--hexFlipMinWidth));
      stroke: transparent;
      fill: var(--allocationFrom);
    }
    50.01% {
      fill: var(--allocationTo);
    }

    to {
      transform: none;
      fill: var(--allocationTo);
    }
  }
</style>
