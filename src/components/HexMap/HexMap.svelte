<script lang="ts">
  import { Tween } from 'svelte/motion';
  import HexMapGroup from './HexMapGroup/HexMapGroup.svelte';
  import { cubicInOut } from 'svelte/easing';
  import HexMapLabels from './HexMapLabels/HexMapLabels.svelte';
  let {
    config = {},
    layout = {},
    allocations = {},
    focuses = {},
    certainties = {},
    labelsToShow = {},
    showStateLabels = false,
    showElectorateLabels = false,
    showFocusedElectorateLabels = false,
    onClick = () => {}
  } = $props();
  let svgEl = $state<SVGElement>();
  let svgWidth = $state(0);
  let svgHeight = $state(0);
  let previousAllocations = $state();
  let previousFocuses = $state();

  /** Are any of the electorates focused? If so, we use different styles for unallocated */
  let hasAnyFocuses = $derived.by(() => Object.values(focuses).some(Boolean));

  /** Are all of the electorates allocated? If so, turn off state borders. */
  let isFilled = $derived.by(() => {
    const allocationValues = Object.values(allocations);
    return allocationValues.length !== 0 && allocationValues.every(Boolean);
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
    const [newX, newY, newW, newH] = layout.viewbox;
    viewboxX.set(newX);
    viewboxY.set(newY);
    viewboxWidth.set(newW);
    viewboxHeight.set(newH);
  });

  // Set properties manually on hexes. Svelte is slow, and I don't trust it to
  // be performant creating all 150+ electorates
  $effect(() => {
    const _allocations = allocations;
    const _focuses = focuses;
    const _certainties = certainties;
    // const _previousAllocations = untrack(() => previousAllocations || {});
    // const _previousFocuses = untrack(() => previousFocuses || {});
    if (!svgEl) {
      return;
    }
    const hexes = svgEl.querySelectorAll('polygon.hex');
    hexes.forEach(hex => {
      if (!(hex instanceof SVGPolygonElement)) {
        return;
      }
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
    // previousAllocations = _allocations;
    // previousFocuses = _focuses;
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="hexmap"
  onclick={({ target, clientX, clientY }) => {
    const code = (target as SVGPolygonElement)?.dataset?.code;
    if (!code || !onClick) {
      return;
    }
    onClick({ code, clientX, clientY });
  }}
>
  <svg
    bind:this={svgEl}
    bind:clientWidth={svgWidth}
    bind:clientHeight={svgHeight}
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
        {layout}
        offset={layout.positions[group.name]}
        {isFilled}
        {focuses}
        {hasAnyFocuses}
        {showElectorateLabels}
        {showFocusedElectorateLabels}
        {labelsToShow}
      />
    {/each}
  </svg>

  {#if showStateLabels}
    <div
      class="hexmap__labels"
      style:width={`${svgWidth}px`}
      style:height={`${svgHeight}px`}
      style:margin-left={`${0 - svgWidth / 2}px`}
      style:margin-top={`${0 - svgHeight / 2}px`}
    >
      <HexMapLabels labels={layout.labels} />
    </div>
  {/if}
</div>

<style lang="scss">
  .hexmap {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hexmap__labels {
    position: absolute;
    top: 0;
    left: 50%;
    top: 50%;
    pointer-events: none;
  }
  .hexmap svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>
