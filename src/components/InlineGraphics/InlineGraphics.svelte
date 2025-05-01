<script lang="ts">
  import layouts from '../../../data/appdata-layouts.json';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import config from '../../../data/appdata-built.json';
  import { onMount } from 'svelte';

  let { graphics, mountNode } = $props();
  let gridStyle = $derived.by(() => Math.min(graphics.length, 2));

  // Add the u-pull class in Odyssey to make graphics go full-width
  onMount(() => {
    if (mountNode) {
      mountNode.classList.add('u-pull');
    }
  });
</script>

<div class={`inline-graphics inline-graphics--grid-${gridStyle}`}>
  {#each graphics as { layout, caption, ...graphic }}
    <figure>
      <div class="inline-graphics__graphic">
        <MapRoot {config} {...graphic} layout={layouts[layout]} hideTotals={!graphic.showTotals} isInline={true} />
      </div>
      {#if caption}<figcaption>{caption}</figcaption>{/if}
    </figure>
  {/each}
</div>

<style lang="scss">
  .inline-graphics {
    margin: var(--od-space-component-margin) 0 var(--od-space-component-margin);
  }
  .inline-graphics__graphic {
    position: relative;
    aspect-ratio: 1/1;
    overflow: hidden;
  }
  .inline-graphics {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: calc(100vw - 2rem);
    margin: 0 auto;
  }
  @media (min-width: 46.5rem) {
    .inline-graphics--grid-2 {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }
  figure {
    margin: 0;
  }
  figcaption {
    color: #60646c;
    font-family: ABCSans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    padding-left: 0.41rem;
  }
</style>
