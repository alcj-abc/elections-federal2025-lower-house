<script lang="ts">
  let { name = '', svgHexes = '', svgOutline = '', offset = [Infinity, Infinity] } = $props();

  const radius = 16;
  function hexToPx(coord = [0, 0]) {
    const newX = coord[0] * (radius * Math.sqrt(3));
    const newY = coord[1] * 1.5 * radius;
    return [newX, newY].map(px => `${Math.round(px)}px`);
  }

  let transform = $state('');
  let isVisible = $derived.by(() => offset[0] !== Infinity);
  $effect(() => {
    if (isVisible) {
      transform = `translate(${hexToPx(offset).join(',')})`;
    }
  });
</script>

<g class="group" data-name={name} style:transform class:group--hidden={!isVisible}>
  <g style="display:none">{@html svgOutline}</g>
  {@html svgHexes}
</g>

<style lang="scss">
  .group {
    transition: all 0.5s;
  }
  .group :global(.hex) {
    transition: all 0.3s;
    vector-effect: non-scaling-stroke;
    fill: var(--c-white);
    stroke: 1px solid var(--c-lightgrey);
  }
</style>
