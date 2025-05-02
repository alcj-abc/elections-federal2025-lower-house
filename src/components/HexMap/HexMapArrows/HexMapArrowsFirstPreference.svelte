<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import baselineFirstPreferences from '../../../../data/appdata-first-preference-2019.json';
  import { getContext, onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';
  import { getLiveData, getPrimaryCountPct } from '../../../liveData';
  import HexMapArrowLegend from './HexMapArrowLegend/HexMapArrowLegend.svelte';

  const { resetViewboxPadding, setViewboxPadding, arrowChartPercentCounted } = getContext<any>('viewbox-padding') || {};

  const partyNames = {
    ALP: 'Labor',
    LNP: 'L/NP',
    IND: 'Independents',
    ONP: 'One Nation',
    TOP: 'Trumpet of Patriots'
  };
  let { arrowChart, groups, layout } = $props();
  const ARROW_HEIGHT = 0.08;
  let resultsData = $state();

  let partyCode = $derived.by(() => String(arrowChart.split(' ')[0]));
  let newPrimaryCounts = $derived.by(() => {
    if (!resultsData) {
      return {};
    }
    return getPrimaryCountPct(resultsData, code => code === partyCode);
  });

  let arrowData = $derived.by(() => {
    const _resultsData = resultsData;
    const _partyCode = partyCode;
    const _newPrimaryCounts = newPrimaryCounts;
    if (!_resultsData || !_newPrimaryCounts) {
      return;
    }
    return _resultsData.data.electorates.reduce((obj, electorate) => {
      const id = electorate.code;
      const originalParties = baselineFirstPreferences[id]?.pct;
      let originalPct = originalParties?.[_partyCode] || 0;
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
    const guid = setViewboxPadding('HexMapArrowsFirsPreference', [30, 0, 30, 0]);

    getLiveData({ cache: true }).then(json => {
      resultsData = json;
    });

    return () => resetViewboxPadding(guid);
  });
</script>

{#if resultsData}
  <HexMapArrowsViz {groups} {layout} {arrowData} arrowHeight={ARROW_HEIGHT} {getRotationForValue} {getColourForValue} />
  <HexMapArrowLegend
    caption={partyNames[partyCode] || partyCode}
    countedPct={arrowChartPercentCounted ? resultsData?.data?.overall?.counted : undefined}
    arrowHeight={ARROW_HEIGHT}
    {getRotationForValue}
    {getColourForValue}
    scales={[
      { name: '-10', value: -10, tether: 'head' },
      { name: '-5', value: -5, tether: 'head' },
      { name: '5', value: 5, tether: 'base' },
      { name: '10', value: 10, tether: 'base' }
    ]}
  />
{/if}

<style lang="scss">
</style>
