<script lang="ts">
  import { hexToPx } from '../../../../lib/utils';
  import data from '../../../../../data/appdata-change-in-first-preference.json';
  import { matchElectorate } from '../../../../builder/components/SpreadsheetImport/util';
  import { arrowData } from './utils';
  import { onMount } from 'svelte';

  let { hexes, offset, firstPreferenceArrows } = $props();

  const arrowHeight = 0.08;
  $effect(() => {
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
  });
  onMount(() => {
    return () => {
      $arrowData = {};
    };
  });

  function scaleArrowSize(value) {
    const minArrowScale = 0.3;
    const maxArrowScale = 1.5;
    const absVal = Math.abs(value);
    return Math.min(maxArrowScale, minArrowScale + absVal / 20);
  }
</script>

<g class="hex-map-arrows" transform={`translate(${hexToPx(offset, '').join(',')})`}>
  {#each hexes as hex}
    {#if $arrowData[hex.id]}
      <g transform={`translate(${hex.coordPx.join(' ')}) rotate(10)`}>
        <path
          id="shape"
          transform={`scale(${scaleArrowSize($arrowData[hex.id])} ${$arrowData[hex.id] * arrowHeight})`}
          d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z"
          style:fill={`var(--a-${firstPreferenceArrows.length > 3 ? 'OTH' : firstPreferenceArrows.toUpperCase()}, hotpink)`}
          stroke-width="2"
        />
        <path
          id="shape"
          transform={`translate(0 ${-63 * $arrowData[hex.id] * arrowHeight}) rotate(${$arrowData[hex.id] < 0 ? 180 : 0}) scale(${scaleArrowSize($arrowData[hex.id])})`}
          d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064"
          style:stroke={`var(--a-${firstPreferenceArrows.length > 3 ? 'OTH' : firstPreferenceArrows.toUpperCase()}, hotpink)`}
          stroke-width="2"
          fill="none"
        />
      </g>
    {/if}
  {/each}
</g>

<style lang="scss">
  path,
  g {
    transition: all 0.5s;
  }
</style>
