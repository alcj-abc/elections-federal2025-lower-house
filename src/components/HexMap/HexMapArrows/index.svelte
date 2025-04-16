<script lang="ts">
  import { onMount, type Component as ComponentType } from 'svelte';
  let props = $props();
  let Component = $state<ComponentType | null>(null);
  onMount(() => {
    import(/* webpackChunkName: "dynamic-hex-map-arrows" */ './HexMapArrowsFirstPreference.svelte').then(module => {
      Component = module.default as ComponentType;
    });
  });
</script>

{#if Component}
  <Component {...props} />
{/if}
