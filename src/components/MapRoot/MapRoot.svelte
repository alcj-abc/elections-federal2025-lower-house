<script lang="ts">
  /**
   * A root component that swaps between the geo and hex maps
   */
  import GeoMap from '../GeoMap/GeoMap.svelte';
  import HexMap from '../HexMap/HexMap.svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';

  let { vizType = 'hex', ...componentProps } = $props();
</script>

<StyleRoot>
  {#if vizType === 'geo'}
    <GeoMap {...componentProps} />
  {/if}

  {#if vizType === 'hex'}
    <HexMap {...componentProps} />
  {/if}
</StyleRoot>
