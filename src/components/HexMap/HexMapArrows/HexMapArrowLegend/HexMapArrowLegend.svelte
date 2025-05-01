<script lang="ts">
  import { fade } from 'svelte/transition';
  import HexMapArrow from '../HexMapArrow/HexMapArrow.svelte';
  import { getContext } from 'svelte';

  const svgElCurrentScale = getContext('svgElCurrentScale');

  let { scales, arrowHeight, getRotationForValue, getColourForValue, countedPct } = $props();
  let width = $state(0);

  const breakpoints = {
    largeScreen: {
      left: 0,
      top: 460,
      fontSize: '12px',
      yOffset: 20
    },
    smallScreen: {
      left: -60,
      top: 460,
      fontSize: '12px',
      yOffset: 15
    }
  };

  let breakpoint = $derived.by(() => {
    return breakpoints[width > 800 ? 'largeScreen' : 'smallScreen'];
  });

  let transform = $derived.by(() => `scale(${$svgElCurrentScale.toFixed(2)})`);
</script>

<svelte:window bind:innerWidth={width} />

<g
  class="hex-map-arrow-legend"
  transform={`translate(${breakpoint.left} ${breakpoint.top})`}
  style:--fontSize={breakpoint.fontSize}
  transition:fade
>
  {#each scales as { name, value, tether }, i}
    <g transform={`translate(${i * 40 * $svgElCurrentScale} 0)`}>
      <HexMapArrow
        coordPx={[10, 0]}
        {arrowHeight}
        rotation={getRotationForValue(value)}
        colour={getColourForValue(value)}
        {value}
        {tether}
      />
      <text class="hex-map-arrow-legend__light" y={breakpoint.yOffset} {transform}><tspan>{name}</tspan></text>
    </g>
  {/each}

  <text y={breakpoint.yOffset * 2} {transform}>Change in primary vote %</text>
  {#if countedPct}<text class="hex-map-arrow-legend__light" y={breakpoint.yOffset * 3} {transform}
      >{countedPct}% counted</text
    >{/if}
</g>

<style lang="scss">
  .hex-map-arrow-legend {
    fill: black;

    /* Text Regular/xs */
    font-family: ABCSans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 135%; /* 1.0125rem */
    width: 30px;
    text-align: center;
    font-size: var(--fontSize);
  }

  text.hex-map-arrow-legend__light {
    fill: var(--Light-grey-compliant, #767676);
  }
</style>
