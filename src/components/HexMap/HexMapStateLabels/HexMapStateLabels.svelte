<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  let { labels, overlayLabels = false } = $props();
  let isLoaded = $state();

  // Bug: Labels are doing weird transitions on load, no idea why.
  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    });
  });
</script>

<!-- These labels don't make sense on their own, need alternative content -->
<div
  class="state-labels"
  aria-hidden="true"
  class:state-labels--overlaid={overlayLabels}
  class:state-labels--ready={isLoaded}
>
  {#each labels as label}
    {#key label.name}
      <div
        transition:fade={{ duration: 1000 }}
        class="state-labels__label"
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
  .state-labels {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    container-type: inline-size;
  }
  .state-labels__label {
    position: absolute;
    height: 2em;
    margin-top: -1em;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--Border, #000);
    text-align: center;
    font-family: ABCSans, ABCSans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    -webkit-text-stroke: 5px transparent;
    paint-order: stroke fill;

    @container (min-width: 30rem) {
      font-size: 1.125rem;
    }

    @container (min-width: 38rem) {
      font-size: 1.25rem;
    }
  }

  .state-labels--overlaid .state-labels__label {
    -webkit-text-stroke: 3px #f1f1f1;
    paint-order: stroke fill;

    @container (min-width: 30rem) {
      -webkit-text-stroke: 5px #f1f1f1;
      font-size: 1.125rem;
    }
  }

  .state-labels--ready .state-labels__label {
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }
</style>
