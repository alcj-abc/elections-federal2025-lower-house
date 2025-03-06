<script lang="ts">
  import Scrollyteller from '@abcnews/svelte-scrollyteller';
  import { onMount } from 'svelte';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';
  import { decodeSchema } from 'hash-codec';
  import { schema } from '../../builder/hashConfig';

  let { panels = [], onMarker = () => {} } = $props();
  let options = $state();
  let resolvedPanels = $state([]);

  const setConfig = d => {
    options = d;
    onMarker(resolvedPanels.find(panel => panel.data === d));
  };

  $effect(() => {
    console.log('options', options);
  });

  $effect(() => {
    const _panels = panels;
    Promise.all(
      _panels.map(async panel => {
        const decodedData = await decodeSchema({ schema, data: panel.data });
        return {
          ...panel,
          panelClass: '',
          data: decodedData,
          originalData: panel.data
        };
      })
    ).then(decodedPanels => {
      resolvedPanels = decodedPanels;
      options = resolvedPanels[0]?.data;
    });
  });
</script>

{#if options}
  <Scrollyteller panels={resolvedPanels} onMarker={setConfig} layout={{ align: 'left', resizeInteractive: true }}>
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
