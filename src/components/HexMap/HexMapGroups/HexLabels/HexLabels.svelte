<script lang="ts">
  let { hexes, allocations, certainties, labelsToShow = {}, showElectorateLabels = false } = $props();

  let labels = $derived.by(() => {
    if (showElectorateLabels) {
      return hexes;
    }
    return hexes.filter(({ id }) => labelsToShow[id]);
  });
</script>

<g class="hexlabels">
  {#each labels as { id, coordPx, shortName }}
    <g transform={`translate(${coordPx.join(' ')}) rotate(-30) translate(0 3)`}>
      <text
        class="hexlabels__text"
        class:hexlabels__text--allocation={allocations[id]}
        style:stroke={`var(--u-${allocations[id]})`}
        style:stroke-width="3"
        style:opacity={allocations[id] && !certainties[id] ? 1 : 0}
      >
        {shortName}
      </text>
      <text class="hexlabels__text" style:fill={allocations[id] && certainties[id] ? 'white' : 'black'}>
        {shortName}
      </text>
    </g>
  {/each}
</g>

<style lang="scss">
  .hexlabels {
    pointer-events: none;
  }
  .hexlabels__text {
    font-size: 12px;
    font-weight: 700;
    font-family: ABCSans, sans-serif;
    text-anchor: middle;
    transition: all 0.2s;
  }
</style>
