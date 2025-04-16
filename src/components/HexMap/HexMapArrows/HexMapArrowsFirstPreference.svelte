<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import data from '../../../../data/appdata-change-in-first-preference.json';
  import { matchElectorate } from '../../../builder/components/SpreadsheetImport/util';
  import { onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';

  let { arrowChart, hexes, offset } = $props();
  let arrowData = $state({});
  let rotationDegrees = $state(10);

  let partyCode = $derived.by(() => arrowChart.split(' ')[0]);

  $effect(() => {
    arrowData = data.diffedElectorates.reduce((obj, electorate) => {
      const matchedElectorate = matchElectorate(electorate.electorate);
      if (!matchedElectorate) {
        // console.error("couldn't match", electorate.electorate);
        return obj;
      }
      const party = electorate.candidates.find(candidate => candidate.party === partyCode);
      if (!party) {
        // console.error(`couldn't find party`, arrowChart, electorate.candidates);
      }
      return {
        ...obj,
        [matchedElectorate.id]: party?.changeInPercent
      };
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
</script>

<HexMapArrowsViz {arrowData} arrowHeight={0.08} {hexes} {offset} {getColourForValue} {rotationDegrees} />
