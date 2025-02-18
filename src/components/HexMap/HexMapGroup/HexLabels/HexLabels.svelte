<script lang="ts">
  import { fade } from 'svelte/transition';

  let { hexes, labelsToShow = {}, showAll = false, showElectorateLabels = false } = $props();

  let labels = $derived.by(() => {
    if (showElectorateLabels) {
      return hexes;
    }
    return hexes.filter(({ code }) => labelsToShow[code]);
  });
</script>

<g class="hexlabels">
  {#each labels as { coordPx, code }}
    <g transform={`translate(${coordPx.join(' ')})`}>
      <text class="hexlabels__text">
        <!-- {multiLineLabel
      ? multiLineLabel.map((line, index) => (
          <tspan key={index} x="0" y="-0.6em" dy={`${index * 1.2}em`}>
            {line}
          </tspan>
        ))
      : label} -->
        {code}
      </text>
    </g>
  {/each}
</g>

<style lang="scss">
  .hexlabels__text {
    transform: rotate(30deg) translate(0, 0.3em);
    fill: black;
    font-size: 6px;
    font-family: sans-serif;
    text-anchor: middle;
  }
</style>
