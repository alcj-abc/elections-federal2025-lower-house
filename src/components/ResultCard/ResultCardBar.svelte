<script lang="ts">
  let { candidates = [] } = $props();
  let hasResults = $derived.by(() => candidates.every(({ percent }) => percent));
</script>

<div class="result-card-bar">
  <div class="result-card-bar__tick"></div>
  <div class="result-card-bar__tick result-card-bar__tick--top"></div>
  <div class="result-card-bar__track" class:result-card-bar__track--empty={!hasResults}>
    {#each candidates as { id, percent }}
      {#if percent}
        <div
          class="result-card-bar__pty"
          style:background-color={`var(--a-${id}, fuchsia)`}
          style:width={`${percent}%`}
        ></div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  $barHeight: 0.625rem;
  .result-card-bar {
    position: relative;
  }
  .result-card-bar__track {
    height: $barHeight;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    display: flex;
    gap: 0.14rem;
    z-index: 2;
  }
  .result-card-bar__track--empty {
    background: #f1f2f3;
  }
  .result-card-bar__pty {
    height: 100%;
  }

  .result-card-bar__tick {
    position: absolute;
    z-index: 1;
    left: calc(50% - 0.5px);
    top: -0.1875rem;
    width: 1px;
    height: 1rem;
    background: #999;
  }
  .result-card-bar__tick--top {
    z-index: 3;
    height: $barHeight;
    top: 0;
    background: white;
  }
</style>
