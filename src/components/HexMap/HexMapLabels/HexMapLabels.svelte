<script lang="ts">
  import { fade } from 'svelte/transition';

  let { labels } = $props();
</script>

<!-- These labels don't make sense on their own, need alternative content -->
<div class="labels" aria-hidden="true">
  {#each labels as label}
    {#key label}
      <div
        transition:fade={{ duration: 1000 }}
        class="label"
        style:left={label.left + '%'}
        style:top={label.top + '%'}
        style:width={label.width + '%'}
        style:margin-left={Math.round(0 - label.width / 2) + '%'}
      >
        {label.name}
      </div>
    {/key}
  {/each}
</div>

<style lang="scss">
  .labels {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  .label {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
    position: absolute;
    height: 2em;
    margin-top: -1em;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--Border, #000);
    text-align: center;
    font-family: ABCSans, 'ABC Sans Nova';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    -webkit-text-stroke: 2px white;
    paint-order: stroke fill;
  }
</style>
