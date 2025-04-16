<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import { onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';
  import { getLiveData } from '../../../liveData';

  let { hexes, offset } = $props();
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
      if (isLaborCoalition) {
        obj[electorate.code] = Number(alpSwing.predicted2CP.swing || alpSwing.simple2CP.swing || 0);
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

  const getRotationForValue = value => (value < 0 ? 135 : 45);

  onMount(() => {
    getLiveData({ cache: true }).then(json => {
      resultsData = json;
    });
  });
</script>

{#if resultsData}
  <HexMapArrowsViz {arrowData} arrowHeight={0.03} {hexes} {offset} {getRotationForValue} {getColourForValue} />
{/if}
