<script lang="ts">
  /**
   * A root component that swaps between the geo and hex maps
   */
  import GeoMap from '../GeoMap/GeoMap.svelte';
  import HexMap from '../HexMap/HexMap.svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';
  import Totals from '../Totals/Totals.svelte';

  let { vizType = 'hex', totals, allocations, certainties, showTotals, ...componentProps } = $props();
</script>

<StyleRoot>
  <div class="interactive">
    <div class="interactive__map">
      {#if vizType === 'geo'}
        <GeoMap {allocations} {certainties} {...componentProps} />
      {/if}

      {#if vizType === 'hex'}
        <HexMap {allocations} {certainties} {...componentProps} />
      {/if}
    </div>
    <div class="interactive__totals">
      <Totals {allocations} {certainties} {totals} {showTotals} {...componentProps} />
    </div>
  </div>
</StyleRoot>

<style lang="scss">
  .interactive {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: stretch;
  }
  .interactive__map {
    flex: 1;
    position: relative;
  }
</style>
