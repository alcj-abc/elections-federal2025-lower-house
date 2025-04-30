<script lang="ts">
  import { hexToPx } from '../../../../lib/utils';
  import { fade } from 'svelte/transition';
  import HexMapArrow from '../HexMapArrow/HexMapArrow.svelte';

  let { groups, layout, arrowData, arrowHeight, getColourForValue, getRotationForValue } = $props();
</script>

{#each groups as group}
  {#if layout.positions[group.name]}
    <g
      class="hex-map-arrows"
      transform={`translate(${hexToPx(layout.positions[group.name], '').join(',')})`}
      transition:fade={{ duration: 750 }}
    >
      {#each group.hexes as { coordPx, id }}
        <HexMapArrow
          {coordPx}
          rotation={getRotationForValue(arrowData[id])}
          opacity={!arrowData[id] ? 0 : 1}
          value={arrowData[id] || 0}
          colour={getColourForValue(arrowData[id])}
          {arrowHeight}
        />
      {/each}
    </g>
  {/if}
{/each}
