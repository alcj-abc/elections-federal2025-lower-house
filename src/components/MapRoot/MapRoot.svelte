<script lang="ts">
  /**
   * A root component that swaps between the geo and hex maps
   */
  import GeoMap from '../GeoMap/GeoMap.svelte';
  import HexMap from '../HexMap/HexMap.svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';
  import Totals from '../Totals/Totals.svelte';

  let { vizType = 'hex', totals, allocations, certainties, ...componentProps } = $props();
</script>

<StyleRoot>
  {#if vizType === 'geo'}
    <GeoMap {allocations} {certainties} {...componentProps} />
  {/if}

  {#if vizType === 'hex'}
    <HexMap {allocations} {certainties} {...componentProps} />
  {/if}
  <Totals {allocations} {certainties} {totals} {...componentProps} />
</StyleRoot>
