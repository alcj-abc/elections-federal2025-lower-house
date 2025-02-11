<script lang="ts">
  import { Tween } from 'svelte/motion';
  import { untrack } from 'svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';
  import HexMapGroup from './HexMapGroup/HexMapGroup.svelte';
  import { cubicInOut, cubicOut, linear, quartInOut } from 'svelte/easing';
  let { layout = 'COUNTRY', allocations = {} } = $props();
  let svgEl = $state<SVGElement>();
  let previousAllocations = $state();

  const initial = layouts[layout].viewbox;
  const tweenOptions = {
    easing: cubicInOut,
    duration: 1100
  };
  let viewboxX = new Tween(initial[0], tweenOptions);
  let viewboxY = new Tween(initial[1], tweenOptions);
  let viewboxWidth = new Tween(initial[2], tweenOptions);
  let viewboxHeight = new Tween(initial[3], tweenOptions);

  $effect(() => {
    const [newX, newY, newW, newH] = layouts[layout].viewbox;
    viewboxX.set(newX);
    viewboxY.set(newY);
    viewboxWidth.set(newW);
    viewboxHeight.set(newH);
  });

  // Set properties manually on hexes. Svelte is slow, and I don't trust it to
  // be performant creating all 150+ electorates
  $effect(() => {
    const _allocations = allocations;
    const _previousAllocations = untrack(() => previousAllocations || {});
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
      if (_previousAllocations[electorateCode] !== newAllocation) {
        hex.style.setProperty('fill', `var(--a-${newAllocation})`);
        hex.style.setProperty('stroke', newAllocation ? `var(--c-white)` : `var(--c-lightgrey)`);
      }
    });
    previousAllocations = allocations;
  });
</script>

<svg
  bind:this={svgEl}
  viewBox={[viewboxX.current, viewboxY.current, viewboxWidth.current, viewboxHeight.current].join(' ')}
>
  {#each config.groups as group}
    <HexMapGroup {...group} offset={layouts[layout].positions[group.name]} />
  {/each}
</svg>
