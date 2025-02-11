<script lang="ts">
  import { untrack } from 'svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';
  import CustomPropsRoot from '../CustomPropsRoot/CustomPropsRoot.svelte';
  import HexMapGroup from './HexMapGroup/HexMapGroup.svelte';
  let { layout = 'COUNTRY', allocations = {} } = $props();
  let svgEl = $state<SVGElement>();
  let previousAllocations = $state();

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
      const newAllocation = _allocations[electorateCode];
      if (_previousAllocations[electorateCode] !== newAllocation) {
        hex.style.setProperty('fill', `var(--a-${newAllocation})`);
        hex.style.setProperty('stroke', newAllocation ? `var(--c-white)` : `var(--c-lightgrey)`);
      }
    });
    previousAllocations = allocations;
  });
</script>

<svg bind:this={svgEl} viewBox={[0, 0, 1000, 1000].join(' ')}>
  {#each config.groups as group}
    <HexMapGroup {...group} offset={layouts[layout][group.name]} />
  {/each}
</svg>
