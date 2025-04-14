<script lang="ts">
  import { onMount } from 'svelte';
  import { partyColours } from './store';
  import defaultColours from '../../../data/appdata-colours.json';

  let { rootEl = $bindable(), colours = defaultColours } = $props();

  $effect(() => {
    const _colours = colours;
    const _rootEl = rootEl;
    if (!_rootEl) {
      return;
    }
    $partyColours = {
      allocated: _colours.allocated,
      uncertain: _colours.uncertain
    };

    /** Rewrite the human-readable config to abbreviated CSS variables.*/
    const keyMap = {
      allocated: 'a',
      uncertain: 'u'
    };
    Object.entries(_colours).forEach(([key, variable]) => {
      const baseKey = keyMap[key] || key;
      Object.entries(variable).forEach(([name, value]) => {
        // Create CSS variables for each config, in the form `--a-ALP: red;`
        const cssKey = `--${baseKey}-${name}`;
        _rootEl.style.setProperty(cssKey, value);
      });
    });
  });

  onMount(() => {
    if (!rootEl) {
      return;
    }
  });
</script>

<svelte:body bind:this={rootEl} />
