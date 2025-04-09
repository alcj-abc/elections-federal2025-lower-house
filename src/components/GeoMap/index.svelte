<script lang="ts">
  import { onMount, type Component } from 'svelte';

  const MAPLIBRE_URL = 'https://www.abc.net.au/res/sites/news-projects/maplibre/v5.3.0/maplibre-gl.js';
  const props = $props();
  let GeoMap = $state<Component | null>(null);

  const promises = {};
  function importModule(url) {
    if (promises[url]) {
      return promises[url];
    }
    promises[url] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = url;
      s.type = 'module';
      s.addEventListener('load', resolve);
      s.addEventListener('error', reject);
      document.head.appendChild(s);
    });
    return promises[url];
  }

  onMount(() => {
    Promise.all([importModule(MAPLIBRE_URL), import(/* webpackChunkName: "dynamic-geo-map" */ './GeoMap.svelte')]).then(
      ([_, module]) => {
        GeoMap = module.default as Component;
      }
    );
  });
</script>

{#if GeoMap}
  <GeoMap {...props} />
{/if}
