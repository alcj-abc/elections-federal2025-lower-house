<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import baselineFirstPreferences from '../../../../data/appdata-first-preference-baseline.json';
  import { onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';
  import { getLiveData, getPrimaryCountPct } from '../../../liveData';

  let { arrowChart, hexes, offset } = $props();
  let arrowData = $state({});
  let resultsData = $state();

  let partyCode = $derived.by(() => String(arrowChart.split(' ')[0]));
  let newPrimaryCounts = $derived.by(() => {
    if (!resultsData) {
      return {};
    }
    return getPrimaryCountPct(resultsData, [partyCode]);
  });

  $effect(() => {
    const _resultsData = resultsData;
    const _partyCode = partyCode;
    const _newPrimaryCounts = newPrimaryCounts;
    if (!_resultsData || !_newPrimaryCounts) {
      return;
    }
    arrowData = _resultsData.data.electorates.reduce((obj, electorate) => {
      const id = electorate.code;
      const originalPct = baselineFirstPreferences[id]?.pct?.[_partyCode];
      const newPct = newPrimaryCounts[id];
      const diff = originalPct && newPct ? newPct - originalPct : 0;

      obj[id] = diff;
      return obj;
    }, {});
  });

  // Sync to the store so the builder can access it
  $effect(() => {
    $arrowDataFormatter = id => {
      return `Change in first pref
for ${partyCode}: ${arrowData[id] ? arrowData[id].toFixed(3) + '%' : 'not applicable'}`;
    };
  });
  onMount(() => {
    return () => {
      $arrowDataFormatter = undefined;
    };
  });

  let getColourForValue = $derived.by(() => {
    return () => {
      return `var(--a-${partyCode.length > 3 ? 'OTH' : partyCode.toUpperCase()}, hotpink)`;
    };
  });

  const getRotationForValue = () => 20;

  onMount(() => {
    getLiveData({ cache: true }).then(json => {
      resultsData = json;
    });
  });
</script>

<HexMapArrowsViz {arrowData} arrowHeight={0.08} {hexes} {offset} {getRotationForValue} {getColourForValue} />
