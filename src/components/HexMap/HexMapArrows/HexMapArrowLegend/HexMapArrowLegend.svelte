<script lang="ts">
  import { fade } from 'svelte/transition';
  import HexMapArrow from '../HexMapArrow/HexMapArrow.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  const svgElCurrentScale: Writable<number> = getContext('svgElCurrentScale');

  let currentScale = $derived.by(() => $svgElCurrentScale);

  let {
    caption = '',
    scales,
    arrowHeight,
    getRotationForValue,
    getColourForValue,
    countedPct,
    alpLnp = false,
    chartName = ''
  } = $props();

  const breakpoints = {
    largeScreen: {
      left: 0,
      top: 460,
      fontSize: '18px',
      yOffset: 25,
      arrowGap: 35,
      captionSize: '24px'
    },
    smallScreen: {
      left: 0,
      top: 460,
      fontSize: '12px',
      yOffset: 15,
      arrowGap: 20,
      captionSize: '18px'
    }
  };

  let breakpoint = $derived.by(() => {
    return breakpoints[currentScale < 1.2 ? 'largeScreen' : 'smallScreen'];
  });

  let transform = $derived.by(() => `scale(${currentScale.toFixed(2)})`);
</script>

{#if caption}
  <g transform={`scale(${$svgElCurrentScale.toFixed(2)})`}>
    <g transform="translate(0,10)">
      <text class="caption" style:font-size={breakpoint.captionSize}>{caption}</text>
    </g>
  </g>
{/if}

<g
  class="hex-map-arrow-legend"
  transform={`translate(${breakpoint.left} ${breakpoint.top - (alpLnp ? breakpoint.yOffset : 0)})`}
  style:--fontSize={breakpoint.fontSize}
  transition:fade
>
  {#each scales as { name, value, tether, colour = null }, i}
    <g transform={`translate(${i * breakpoint.arrowGap * currentScale} 0)`}>
      <HexMapArrow
        coordPx={[10, 0]}
        {arrowHeight}
        rotation={getRotationForValue(value)}
        colour={getColourForValue(value)}
        {value}
        {tether}
      />
      <text class="hex-map-arrow-legend" y={breakpoint.yOffset} {transform} style:fill={colour}
        ><tspan>{name}</tspan></text
      >
    </g>
  {/each}

  {#if alpLnp}
    <text class="labor" y={breakpoint.yOffset * 2} {transform}>Labor</text>
    <g transform={`translate(${2 * breakpoint.arrowGap * currentScale} 0)`}>
      <text class="lnp" y={breakpoint.yOffset * 2} {transform}>L/NP</text>
    </g>
  {/if}

  <text y={breakpoint.yOffset * (alpLnp ? 3 : 2)} {transform}>{chartName}</text>
  {#if countedPct}
    <text class="hex-map-arrow-legend__light" y={breakpoint.yOffset * (alpLnp ? 4 : 3)} {transform}>
      {countedPct}% counted
    </text>
  {/if}
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

  .lnp {
    fill: var(--a-LNP);
  }
  .labor {
    fill: var(--a-ALP);
  }
  .lnp,
  .labor {
    font-weight: bold;
  }

  .caption {
    color: #000;

    /* Text Regular/lg */
    font-family: ABCSans;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
  }
</style>
