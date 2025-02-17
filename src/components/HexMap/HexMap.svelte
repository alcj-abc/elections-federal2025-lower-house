<script lang="ts">
  import { Tween } from 'svelte/motion';
  import { untrack } from 'svelte';
  import HexMapGroup from './HexMapGroup/HexMapGroup.svelte';
  import { cubicInOut } from 'svelte/easing';
  import HexMapLabels from './HexMapLabels/HexMapLabels.svelte';
  let {
    config = {},
    layout = {},
    allocations = {},
    focuses = {},
    onClick = () => {},
    onHover = () => {},
    onBlur = () => {}
  } = $props();
  let svgEl = $state<SVGElement>();
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
      const electorateCode = hex.dataset.code;
      if (!electorateCode) {
        return;
      }
      // set allocation
      const newAllocation = _allocations[electorateCode] || null;
      hex.dataset.allocation = newAllocation;
      const newFocus = hasAnyFocuses ? _focuses[electorateCode] || false : true;
      hex.dataset.focused = newFocus;
    });
    // previousAllocations = _allocations;
    // previousFocuses = _focuses;
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="hexmap"
  onclick={onClick
    ? ({ target, clientX, clientY }) =>
        onClick({ code: (target as SVGPolygonElement)?.dataset?.code, clientX, clientY })
    : undefined}
>
  <svg
    bind:this={svgEl}
    viewBox={[viewboxX.current, viewboxY.current, viewboxWidth.current, viewboxHeight.current].join(' ')}
  >
    {#each config.groups as group}
      <HexMapGroup {...group} offset={layout.positions[group.name]} {isFilled} {hasAnyFocuses} />
    {/each}
  </svg>
  <HexMapLabels labels={layout.labels} />
</div>

<style lang="scss">
  .hexmap {
    position: relative;
  }
</style>
