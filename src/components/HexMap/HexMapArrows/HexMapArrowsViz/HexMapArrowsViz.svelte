<script lang="ts">
  import { hexToPx } from '../../../../lib/utils';
  import { fade } from 'svelte/transition';

  let { hexes, offset, rotationDegrees = 10, arrowData, arrowHeight, getColourForValue } = $props();

  /** preprocess our hexagons */
  let hexData = $derived.by(() =>
    hexes
      .map(hex => ({
        id: hex.id,
        coordPx: hex.coordPx,
        value: arrowData[hex.id]
      }))
      .filter(({ value }) => !!value)
  );

  function scaleArrowSize(value) {
    const minArrowScale = 0.3;
    const maxArrowScale = 1.5;
    const absVal = Math.abs(value);
    return Math.min(maxArrowScale, minArrowScale + absVal / 20);
  }
</script>

<g class="hex-map-arrows" transform={`translate(${hexToPx(offset, '').join(',')})`} transition:fade={{ duration: 750 }}>
  {#each hexData as { coordPx, value }}
    <g transform={`translate(${coordPx.join(' ')}) rotate(${rotationDegrees})`}>
      <!-- arrow body -->
      <path
        transform={`scale(${scaleArrowSize(value)} ${value * arrowHeight})`}
        d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z"
        style:fill={getColourForValue(value)}
        stroke-width="2"
      />
      <!-- arrowhead -->
      <path
        transform={`translate(0 ${-63 * value * arrowHeight}) rotate(${value < 0 ? 180 : 0}) scale(${scaleArrowSize(value)})`}
        d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064"
        style:stroke={getColourForValue(value)}
        stroke-width="2"
        fill="none"
      />
    </g>
  {/each}
</g>

<style lang="scss">
  path,
  g {
    transition: all 0.5s;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
