<script lang="ts">
  import layouts from '../../../data/appdata-layouts.json';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import parties from '../../../data/parties.json';
  import config from '../../../data/appdata-built.json';

  let { graphics } = $props();
  $effect(() => {
    console.log('eeee', graphics);
  });
</script>

<div class={`inline-graphics inline-graphics--grid-${graphics.length % 3}`}>
  {#each graphics as { layout, ...graphic }}
    <div class="inline-graphics__graphic">
      <MapRoot {config} {...graphic} layout={layouts[layout]} totals={parties.totals} />
    </div>
  {/each}
</div>

<style lang="scss">
  .inline-graphics__graphic {
    min-height: 400px;
    outline: 1px solid hotpink;
    position: relative;
  }

  .inline-graphics {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  @media (min-width: 46.5rem) {
    .inline-graphics--grid-2 {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
    .inline-graphics--grid-0 {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
