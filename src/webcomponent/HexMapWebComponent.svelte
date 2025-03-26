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
  let {
    allocations = {},
    certainties = {},
    showStateLabels = false,
    showElectorateLabels = false,
    onClick = () => {},
    layout = "COUNTRY",
    focuses = {},
    isStaticLayout = true,
    isInteractive = true
  } = $props();
</script>

<StyleRoot>
  <HexMap
    {config}
    layout={layouts[layout]}
    {allocations}
    {certainties}
    {focuses}
    {showStateLabels}
    {showElectorateLabels}
    {onClick}
    {isStaticLayout}
    {isInteractive}
  />
</StyleRoot>
