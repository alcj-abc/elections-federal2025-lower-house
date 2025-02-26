<script lang="ts">
  import Scrollyteller from '@abcnews/svelte-scrollyteller';
  import { onMount } from 'svelte';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';

  let { panels = [] } = $props();
  let options = $state();

  const setConfig = d => {
    options = d;
  };

  onMount(() => {
    options = panels[0]?.data;
  });

  $effect(() => {
    console.log('options', options);
  });
</script>

{#if options}
  <Scrollyteller {panels} onMarker={setConfig} layout={{ align: 'left', resizeInteractive: true }}>
    <div class="container">
      <MapRoot {...options} layout={layouts[options.layout]} {config} />
    </div>
  </Scrollyteller>
{/if}

<style type="scss">
  .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
