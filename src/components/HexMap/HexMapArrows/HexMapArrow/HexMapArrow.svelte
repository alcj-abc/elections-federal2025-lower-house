<script lang="ts">
  /**
   * An arrow in a hex map visualisation
   */
  let { coordPx, rotation, colour, opacity = 1, value, arrowHeight, tether = 'base' } = $props();

  let scaleSize = $derived.by(() => {
    const minArrowScale = 0.3;
    const maxArrowScale = 1.5;
    const absVal = Math.abs(value);
    return Math.min(maxArrowScale, minArrowScale + absVal / 20);
  });

  /** Offset the arrow by its own height, so instead of pointing *from*
   * someplace, it points *to* someplace
   */
  let extraOffset = $derived.by(() => {
    if (tether === 'base') {
      return '';
    }
    return `translate(0 ${63 * value * arrowHeight})`;
  });
</script>

<g data-tether={tether} transform={`translate(${coordPx.join(' ')}) rotate(${rotation})`} style:opacity>
  <!-- arrow body -->
  <path
    transform={`${extraOffset} scale(${scaleSize} ${value * arrowHeight})`}
    d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z"
    style:fill={colour}
    stroke-width="2"
  />
  <!-- arrowhead -->
  <path
    transform={`translate(0 ${-63 * value * arrowHeight}) ${extraOffset} rotate(${value < 0 ? 180 : 0}) scale(${scaleSize})`}
    d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064"
    style:stroke={colour}
    stroke-width="2"
    fill="none"
  />
</g>

<style lang="scss">
  path,
  g {
    transition: all 0.5s;
  }
</style>
