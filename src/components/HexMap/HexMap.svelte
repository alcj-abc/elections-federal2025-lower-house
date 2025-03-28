<script lang="ts">
  import { Tween } from 'svelte/motion';
  import HexMapGroup from './HexMapGroup/HexMapGroup.svelte';
  import { cubicInOut } from 'svelte/easing';
  import HexMapStateLabels from './HexMapStateLabels/HexMapStateLabels.svelte';
  import { onMount } from 'svelte';
  import HexMapKeyboardNav from './HexMapKeyboardNav/HexMapKeyboardNav.svelte';
  import HexMapArrows from './HexMapGroup/HexMapArrows/HexMapArrows.svelte';
  import HexMapInteractionHandlers from './HexMapInteractionHandlers/HexMapInteractionHandlers.svelte';
  import HexMapFocusIndicator from './HexMapFocusIndicator/HexMapFocusIndicator.svelte';
  let {
    config = {},
    layout = {},
    allocations = {},
    focuses = {},
    certainties = {},
    /* A custom list of labels to show */
    labelsToShow = {},
    /** Show state labels */
    showStateLabels = false,
    /** Show all electorate labels */
    showElectorateLabels = false,
    /** When an electorate is focused, show the hex label */
    showFocusedElectorateLabels = false,
    /** Should the map transition between layouts - no for the web component*/
    isStaticLayout = false,
    /** Call back to this function when someone clicks the map*/
    onClick = ({ code }) => {},
    /** Call back to this function when someone hovers a hexagon*/
    onHover = ({ code }) => {},
    /** Override the viewbox with your own */
    customViewbox = null,
    /** Receive the current value of the viewbox (excluding animation frames) */
    onViewboxChange = ({ newViewbox }) => {},
    /** Is the map intended to be clicked on? If so, we include HexMapKeyboardNav for accessibility porpoises*/
    isInteractive = false,
    /** Party for whom to show first preference arrows */
    firstPreferenceArrows = 'None',
    /** which electorate is currently focused */
    selectedElectorate = null
  } = $props();
  let svgEl = $state<SVGElement>();
  let svgRatio = $state(0);
  let userFocusedElectorate = $state<null | string>(null);

  /** Are any of the electorates focused? If so, we use different styles for unallocated */
  let hasAnyFocuses = $derived.by(() => Object.values(focuses).some(Boolean));

  /** Are all of the electorates allocated? If so, turn off state borders. */
  let hasAllocations = $derived.by(() => {
    const allocationValues = Object.values(allocations);
    return allocationValues.length !== 0 && allocationValues.some(Boolean);
  });

  const initial = layout.viewbox;
  const tweenOptions = {
    easing: cubicInOut,
    duration: 1100
  };
  let viewboxX = new Tween(initial[0], tweenOptions);
  let viewboxY = new Tween(initial[1], tweenOptions);
  let viewboxWidth = new Tween(initial[2], tweenOptions);
  let viewboxHeight = new Tween(initial[3], tweenOptions);

  $effect(() => {
    const [newX, newY, newW, newH] = customViewbox || layout.viewbox;
    viewboxX.set(newX);
    viewboxY.set(newY);
    viewboxWidth.set(newW);
    viewboxHeight.set(newH);
  });

  $effect(() => {
    onViewboxChange(layout.viewbox);
  });

  // Set properties manually on hexes. Svelte is slow, and I don't trust it to
  // be performant creating all 150+ electorates
  let hexes = $derived.by(() =>
    Array.from(svgEl?.querySelectorAll('polygon.hex') || []).filter(hex => hex instanceof SVGPolygonElement)
  );
  $effect(() => {
    const _allocations = { ...allocations };
    const _focuses = focuses;
    const _certainties = certainties;

    hexes.forEach(hex => {
      const electorateCode = hex.dataset.id;
      if (!electorateCode) {
        return;
      }

      // set allocation
      const newAllocation = _allocations[electorateCode] || null;
      hex.dataset.allocation = newAllocation;
      const newFocus = hasAnyFocuses ? _focuses[electorateCode] || false : true;
      hex.dataset.focused = newFocus;
      const newCertainty = _certainties[electorateCode] || null;
      hex.dataset.certain = newCertainty;
    });
  });

  onMount(() => {
    if (!svgEl) {
      return;
    }
    // calculate the ratio of the SVG on first render. This shouldn't change.
    const style = svgEl.getBoundingClientRect();
    svgRatio = style.height / style.width;
  });
</script>

<div class="hexmap">
  <HexMapInteractionHandlers {isInteractive} {onClick} {onHover}>
    <div
      class="hexmap__viz"
      class:hexmap__viz--vertical={svgRatio <= 1}
      style:aspect-ratio={svgRatio ? svgRatio.toFixed(3) : null}
    >
      <svg
        bind:this={svgEl}
        viewBox={[viewboxX.current, viewboxY.current, viewboxWidth.current, viewboxHeight.current].join(' ')}
      >
        <defs id="defs1">
          <pattern
            id="uncertainty-hash"
            patternUnits="userSpaceOnUse"
            width="5.2070173"
            height="2.9824252"
            patternTransform="translate(393.99999,558.99999)"
            preserveAspectRatio="xMidYMid"
          >
            <path
              clip-path="none"
              style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none"
              d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"
            />
          </pattern>
        </defs>
        {#each config.groups as group}
          <HexMapGroup
            {...group}
            {isStaticLayout}
            {layout}
            offset={layout.positions[group.name]}
            {hasAllocations}
            {allocations}
            {focuses}
            {hasAnyFocuses}
            {showElectorateLabels}
            {showFocusedElectorateLabels}
            {labelsToShow}
          />
        {/each}

        <HexMapFocusIndicator groups={config.groups} id={userFocusedElectorate} {layout} />

        <HexMapFocusIndicator groups={config.groups} id={selectedElectorate} {layout} />

        {#if firstPreferenceArrows !== 'None'}
          {#each config.groups as group}
            <HexMapArrows hexes={group.hexes} offset={layout.positions[group.name]} {firstPreferenceArrows} />
          {/each}
        {/if}

        {#if showStateLabels}
          <div class="hexmap__labels">
            <HexMapStateLabels labels={layout.labels} overlayLabels={layout.overlayLabels} />
          </div>
        {/if}
      </svg>
    </div>

    {#if isInteractive}
      <HexMapKeyboardNav
        groups={config.groups}
        {layout}
        onChange={newValue => {
          userFocusedElectorate = newValue;
        }}
        {onClick}
      />
    {/if}
  </HexMapInteractionHandlers>
</div>

<style lang="scss">
  .hexmap {
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .hexmap__labels {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .hexmap svg {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .hexmap__viz {
    position: relative;
    margin: 0 auto;
    max-height: 100%;
  }
</style>
