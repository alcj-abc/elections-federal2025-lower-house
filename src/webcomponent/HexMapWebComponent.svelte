<svelte:options
  customElement={{
    tag: 'abcnews-hexmap',
    shadow: 'open'
  }}
/>

<script>
  import HexMap from '../components/HexMap/HexMap.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';
  import layouts from '../../data/appdata-layouts.json';
  let { allocations = {}, showStateLabels = false, showElectorateLabels = false, onClick = () => {} } = $props();
</script>

<StyleRoot>
  <HexMap layout={layouts.COUNTRY} {allocations} focuses={{}} {showStateLabels} {showElectorateLabels} {onClick} />
</StyleRoot>
