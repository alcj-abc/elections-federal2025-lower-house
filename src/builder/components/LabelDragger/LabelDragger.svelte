<script lang="ts">
  import { isDraggingEnabled, offsets } from './utils';

  let { children } = $props();
  let currentLabel = $state('');
  let originalCoords = $state([0, 0]);

  function mouseDown(e) {
    if (e.target.classList.contains('state-labels__label')) {
      currentLabel = e.target.textContent.trim();
      originalCoords = [e.screenX, e.screenY];
    }
  }
  function mouseUp() {
    if (!currentLabel) {
      return;
    }
    currentLabel = '';
  }
  function blur() {
    if (!currentLabel) {
      return;
    }
    currentLabel = '';
  }
  function mouseMove(e) {
    if (!currentLabel) {
      return;
    }
    const [prevX, prevY] = originalCoords;
    const { screenX, screenY } = e;
    const deltaX = screenX - prevX;
    const deltaY = screenY - prevY;

    $offsets[currentLabel] = [deltaX / 4, deltaY / 4];
  }
</script>

{#if $isDraggingEnabled}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="label-dragger" onmousedown={mouseDown} onmouseup={mouseUp} onblur={blur} onmousemove={mouseMove}>
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}

<style lang="scss">
  .label-dragger {
    width: 100%;
    height: 100%;
  }
  .label-dragger :global(.state-labels__label) {
    pointer-events: auto !important;
    cursor: grab;
  }
</style>
