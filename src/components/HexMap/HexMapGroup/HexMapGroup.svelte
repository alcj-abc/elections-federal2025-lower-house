<script lang="ts">
  let { name = '', svgHexes = '', svgOutline = '', offset = [Infinity, Infinity], isFilled } = $props();

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
  {@html svgHexes}
  <g class="group-outline" class:group-outline--map-is-filled={isFilled}>{@html svgOutline}</g>
</g>

<style lang="scss">
  .group {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }
  .group--hidden {
    opacity: 0;
  }
  .group :global(.hex) {
    transition: all 0.5s;
    vector-effect: non-scaling-stroke;
    fill: var(--c-white);
    stroke: 1px solid var(--c-lightgrey);
  }

  .group-outline :global(.hex-outline) {
    fill: none;
    stroke: var(--c-black);
    stroke-width: 2px;
    transition:
      opacity 0.5s,
      stroke 0.2s;
  }
  .group-outline--map-is-filled :global(.hex-outline) {
    opacity: 0;
    // transition to white because it's the same colour as the hex outlines and
    // black looks weird.
    stroke: white;
  }
</style>
