<script lang="ts">
  import layouts from '../../../data/appdata-layouts.json';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import parties from '../../../data/parties.json';
  import config from '../../../data/appdata-built.json';
  import { onMount } from 'svelte';

  let { graphics, mountNode } = $props();
  let gridStyle = $derived.by(() => (graphics.length === 1 ? '1' : graphics.length % 3 === 0 ? '3' : '2'));

  // Add the u-pull class in Odyssey to make graphics go full-width
  onMount(() => {
    if (mountNode) {
      mountNode.classList.add('u-pull');
    }
  });
</script>

<div class={`inline-graphics inline-graphics--grid-${gridStyle}`}>
  {#each graphics as { layout, ...graphic }}
    <div class="inline-graphics__graphic">
      <MapRoot
        {config}
        {...graphic}
        layout={layouts[layout]}
        totals={parties.totals}
        hideTotals={!graphic.showTotals}
        isInline={true}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .inline-graphics__graphic {
    position: relative;
    aspect-ratio: 1/1;
  }

  .inline-graphics {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (min-width: 46.5rem) {
    .inline-graphics--grid-1 {
      width: calc(50% - 1rem);
      margin: 0 auto;
    }
    .inline-graphics--grid-2 {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
    .inline-graphics--grid-3 {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
