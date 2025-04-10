<script lang="ts">
  import { onMount } from 'svelte';
  import { partyColours } from './store';
  import defaultColours from '../../../data/appdata-colours.json';

  let { children, rootEl = $bindable(), colours = defaultColours } = $props();

  onMount(() => {
    if (!rootEl) {
      return;
    }
    $partyColours = {
      allocated: colours.allocated,
      uncertain: colours.uncertain
    };

    /** Rewrite the human-readable config to abbreviated CSS variables.*/
    const keyMap = {
      allocated: 'a',
      uncertain: 'u'
    };
    Object.entries(colours).forEach(([key, variable]) => {
      const baseKey = keyMap[key] || key;
      Object.entries(variable).forEach(([name, value]) => {
        // Create CSS variables for each config, in the form `--a-ALP: red;`
        const cssKey = `--${baseKey}-${name}`;
        rootEl.style.setProperty(cssKey, value);
      });
    });
  });
</script>

<div class="style-root" bind:this={rootEl}>{@render children?.()}</div>

<style lang="scss">
  .style-root :global(*) {
    box-sizing: border-box;
  }
  .style-root {
    height: 100%;
    font-family: ABCSans, sans-serif;
  }
</style>
