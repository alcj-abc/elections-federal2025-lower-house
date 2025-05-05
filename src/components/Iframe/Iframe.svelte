<script lang="ts">
  import { decodeSchema } from '@abcnews/hash-codec';
  import { onMount } from 'svelte';
  import { schema } from '../../lib/hashConfig/schema';
  import parse from '@abcnews/alternating-case-to-object';
  import MapRoot from '../MapRoot/MapRoot.svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';

  let decodedData = $state();

  onMount(async () => {
    const parsedData = parse(window.location.hash.slice(1));
    decodedData = await decodeSchema({ schema, data: parsedData });
  });
</script>

{#if decodedData}
  <MapRoot {config} {...decodedData} layout={layouts[decodedData?.layout]} isInline={true} />
{/if}

<style lang="scss">
  :global {
    body {
      margin: 0;
      padding: 0;
    }
    .iframe-mount {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
