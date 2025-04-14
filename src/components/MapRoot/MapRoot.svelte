<script lang="ts">
  import { onMount } from 'svelte';
  /**
   * A root component that swaps between the geo and hex maps
   */
  import GeoMap from '../GeoMap/index.svelte';
  import HexMap from '../HexMap/HexMap.svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';
  import Totals from '../Totals/Totals.svelte';

  let {
    vizType = 'hex',
    totals,
    allocations: sourceAllocations,
    certainties,
    showTotals,
    combineCoalition,
    hideTotals = false,
    isInline = false,
    ...componentProps
  } = $props();

  let allocations = $derived.by(() => {
    if (!combineCoalition) {
      return sourceAllocations;
    }
    return Object.entries(sourceAllocations).reduce((obj, [id, allocation]) => {
      obj[id] = allocation === 'NAT' ? 'LNP' : allocation;
      return obj;
    }, {});
  });

  // If the component is rendering "inline", lazy load it to stop the page
  // thrashing on load
  let rootEl = $state<HTMLDivElement>();
  let isRenderable = $state(isInline ? false : true);
  onMount(() => {
    if (!isInline || !rootEl) {
      return;
    }
    let observer = new IntersectionObserver(
      items => {
        if (items[0].isIntersecting) {
          isRenderable = true;
          observer.unobserve(rootEl as Element);
        }
      },
      { rootMargin: '50%' }
    );
    observer.observe(rootEl);
    return () => observer.disconnect();
  });
</script>

<div class="interactive" bind:this={rootEl}>
  <div class="interactive__map">
    <div class="interactive__map-inner">
      {#if vizType === 'geo'}
        <GeoMap {allocations} {certainties} {isInline} {...componentProps} />
      {/if}

      {#if vizType === 'hex'}
        <HexMap {allocations} {certainties} {...componentProps} />
      {/if}
    </div>
  </div>

  <!-- Hide totals allows inline graphics to take up the full space -->
  {#if !hideTotals}
    <div class="interactive__totals">
      <Totals {allocations} {certainties} {totals} {showTotals} {...componentProps} />
    </div>
  {/if}
</div>

<style lang="scss">
  .interactive {
    position: relative;
    height: 100%;
    max-height: min(100%, 100vh);
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
  .interactive__map-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
