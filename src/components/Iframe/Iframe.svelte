<script lang="ts">
  import HexMap from '../HexMap/HexMap.svelte';
  import config from '../../../data/appdata-built.json';
  import layouts from '../../../data/appdata-layouts.json';
  import { onMount } from 'svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';

  const ALLOWED_HOSTS = ['localhost', 'abc.net.au', 'abc-prod.net.au', 'abc-stage.net.au', 'abc-test.net.au'];

  let allocations = $state({});

  function onClick(data) {
    if (window.opener) {
      window.opener.postMessage({
        type: 'click',
        payload: data
      });
    }
  }

  const actions = {
    setAllocations: newAllocations => {
      allocations = newAllocations;
    }
  };

  function onMessage(event) {
    // check the origin against our allowlist
    const hostname = new URL(event.origin).hostname;
    const splitHostname = hostname.split('.');
    const isAllowed = ALLOWED_HOSTS.some(thisHostname => {
      const thisSplitHostname = thisHostname.split('.');
      const matchedHostname = splitHostname.slice(0 - thisSplitHostname.length);
      return matchedHostname.join('.') === thisHostname;
    });
    if (!isAllowed) {
      return;
    }

    // Validate the action
    const action = String(event.data?.type || '');

    // Webpack hot reloading posts events prefixed with 'webpack'
    if (!action || action.includes('webpack')) {
      return;
    }

    // Validate the action to run, then run it
    const actionFn = actions[String(action)];
    if (!actionFn) {
      console.log(event);
      throw new Error(`Action "${action}" doesn't exist. Expected one of ${Object.keys(actions)}"`);
    }

    actionFn(event.data?.payload);
  }

  onMount(() => {
    window.addEventListener('message', onMessage, false);
    return () => window.removeEventListener('message', onMessage, true);
  });
</script>

<StyleRoot>
  <HexMap {config} layout={layouts.COUNTRY} {allocations} focuses={{}} {onClick} />
</StyleRoot>
