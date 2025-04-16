<script lang="ts">
  import HexMapArrowsViz from './HexMapArrowsViz/HexMapArrowsViz.svelte';
  import data from '../../../../data/appdata-change-in-first-preference.json';
  import { matchElectorate } from '../../../builder/components/SpreadsheetImport/util';
  import { onMount } from 'svelte';
  import { arrowDataFormatter } from './utils';

  let { firstPreferenceArrows, ...props } = $props();
  let arrowData = $state({});

  $effect(() => {
    arrowData = data.diffedElectorates.reduce((obj, electorate) => {
      const matchedElectorate = matchElectorate(electorate.electorate);
      if (!matchedElectorate) {
        // console.error("couldn't match", electorate.electorate);
        return obj;
      }
      const party = electorate.candidates.find(candidate => candidate.party === firstPreferenceArrows);
      if (!party) {
        // console.error(`couldn't find party`, firstPreferenceArrows, electorate.candidates);
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
for ${firstPreferenceArrows}: ${arrowData[id] ? arrowData[id].toFixed(3) + '%' : 'not applicable'}`;
    };
  });
  onMount(() => {
    return () => {
      $arrowDataFormatter = undefined;
    };
  });

  function scaleArrowSize(value) {
    const minArrowScale = 0.3;
    const maxArrowScale = 1.5;
    const absVal = Math.abs(value);
    return Math.min(maxArrowScale, minArrowScale + absVal / 20);
  }

  let getColourForValue = $derived.by(() => {
    return () => {
      return `var(--a-${firstPreferenceArrows.length > 3 ? 'OTH' : firstPreferenceArrows.toUpperCase()}, hotpink)`;
    };
  });
</script>

<HexMapArrowsViz {arrowData} arrowHeight={0.08} {...props} {scaleArrowSize} {getColourForValue} rotationDegrees={10} />
