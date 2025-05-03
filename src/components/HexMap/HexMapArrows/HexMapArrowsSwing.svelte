<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import { getContext, onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';
  import { getLiveData } from '../../../liveData';
  import HexMapArrowLegend from './HexMapArrowLegend/HexMapArrowLegend.svelte';
  const { resetViewboxPadding, setViewboxPadding } = getContext<any>('viewbox-padding') || {};

  let { groups, layout, arrowChartPercentCounted } = $props();
  let resultsData = $state();

  let arrowData = $derived.by(() => {
    const _resultsData = resultsData;
    if (!_resultsData) {
      return {};
    }
    /** These are the only parties we want on our swing dial */
    const coalitionParties = ['LIB', 'LNP', 'NAT', 'CLP'];
    return _resultsData.data.electorates.reduce((obj, electorate) => {
      const [alpSwing, lnpSwing] =
        electorate.swingDial[0].party.code === 'ALP' ? electorate.swingDial : [...electorate.swingDial].reverse();
      const isLaborCoalition = alpSwing.party.code === 'ALP' && coalitionParties.includes(lnpSwing.party.code);
      if (isLaborCoalition && Number(electorate.counted || 0) > 5) {
        obj[electorate.code] = Number(alpSwing.predicted2CP?.swing || alpSwing.simple2CP?.swing || 0);
      }
      return obj;
    }, {});
  });

  // Sync to the store so the builder can access it
  $effect(() => {
    $arrowDataFormatter = id => {
      return `Swing: ${arrowData[id] ? `${arrowData[id].toFixed(2)}% to ${arrowData[id] > 0 ? 'ALP' : 'Coalition'}` : 'not applicable'}`;
    };
  });
  onMount(() => {
    return () => {
      $arrowDataFormatter = undefined;
    };
  });

  let getColourForValue = $derived.by(() => {
    return value => {
      return `var(--a-${value < 0 ? 'LNP' : 'ALP'}, hotpink)`;
    };
  });

  // Point labor to the left, Coalition to the right
  const getRotationForValue = value => (value < 0 ? -135 : -45);

  onMount(() => {
    getLiveData({ cache: true }).then(json => {
      resultsData = json;
    });

    const guid = setViewboxPadding('HexMapArrowsSwing', [30, 0, 30, 0]);

    return () => resetViewboxPadding(guid);
  });
  const ARROW_HEIGHT = 0.06;
</script>

{#if resultsData}
  <HexMapArrowsViz {arrowData} arrowHeight={ARROW_HEIGHT} {getRotationForValue} {getColourForValue} {groups} {layout} />
  <HexMapArrowLegend
    chartName="Percentage point swing"
    countedPct={arrowChartPercentCounted ? resultsData?.data?.overall?.counted : undefined}
    arrowHeight={ARROW_HEIGHT}
    {getRotationForValue}
    {getColourForValue}
    scales={[
      { name: '10', value: 10, tether: 'base', colour: 'var(--a-ALP)' },
      { name: '5', value: 5, tether: 'base', colour: 'var(--a-ALP)' },
      { name: '5', value: -5, tether: 'base', colour: 'var(--a-LNP)' },
      { name: '10', value: -10, tether: 'base', colour: 'var(--a-LNP)' }
    ]}
    alpLnp={true}
  />
{/if}
