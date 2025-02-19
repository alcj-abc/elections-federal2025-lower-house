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
  import config from '../../data/appdata-built.json';
  let { allocations = {}, showStateLabels = false, showElectorateLabels = false, onClick = () => {} } = $props();
</script>

<StyleRoot>
  <HexMap
    {config}
    layout={layouts.COUNTRY}
    {allocations}
    focuses={{}}
    {showStateLabels}
    {showElectorateLabels}
    {onClick}
  />
</StyleRoot>
