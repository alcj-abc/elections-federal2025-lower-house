<script lang="ts">
  import { hexToPx } from '../../../../lib/utils';
  import data from '../../../../../data/appdata-change-in-first-preference.json';
  import { matchElectorate } from '../../../../builder/components/SpreadsheetImport/util';
  import { arrowData } from './utils';
  import { onMount } from 'svelte';

  let { hexes, offset, firstPreferenceArrows } = $props();

  const arrowHeight = 0.5;
  $effect(() => {
    console.group('first preference arrows');
    $arrowData = data.diffedElectorates.reduce((obj, electorate) => {
      const matchedElectorate = matchElectorate(electorate.electorate);
      if (!matchedElectorate) {
        console.error("couldn't match", electorate.electorate);
        return obj;
      }
      const party = electorate.candidates.find(candidate => candidate.party === firstPreferenceArrows);
      if (!party) {
        console.error(`couldn't find party`, firstPreferenceArrows, electorate.candidates);
      }
      return {
        ...obj,
        [matchedElectorate.id]: party?.changeInPercent
      };
    }, {});
    console.log('all done');

    console.groupEnd();
  });
  onMount(() => {
    return () => {
      $arrowData = {};
    };
  });
</script>

<g class="hex-map-arrows" transform={`translate(${hexToPx(offset, '').join(',')})`}>
  {#each hexes as hex}
    {#if $arrowData[hex.id]}
      <g transform={`translate(${hex.coordPx.join(' ')}) scale(2) rotate(10)`}>
        <path
          transform={`scale(1 ${$arrowData[hex.id] * arrowHeight})`}
          id="path14"
          style="color:#000000;"
          style:fill={`var(--a-${firstPreferenceArrows.length > 3 ? 'OTH' : firstPreferenceArrows.toUpperCase()}, hotpink)`}
          d="M 0 -4.2808757 L -0.74207357 -2.2406901 C -0.56187965 -2.394702 -0.34988926 -2.4842981 -0.13280843 -2.5104411 L -0.13280843 0 L 0.13280843 0 L 0.13280843 -2.5104411 C 0.35029345 -2.4845375 0.56222883 -2.3950633 0.74207357 -2.2406901 L 0 -4.2808757 z "
        />
      </g>
    {/if}
  {/each}
</g>
