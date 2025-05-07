<script lang="ts">
  let { Viz, Sidebar } = $props();
</script>

<div class="builder-frame">
  <div class="builder-frame__viz">{@render Viz?.()}</div>

  <div class="builder-frame__sidebar">{@render Sidebar?.()}</div>
</div>

<style>
  .builder-frame {
    display: flex;
    height: 100vh;
  }
  .builder-frame__viz {
    flex: 1;
    min-width: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 1.69rem;
    background: white;
    color: black;
  }
  .builder-frame__sidebar {
    width: 22rem;
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-left: 1px solid var(--border);
    height: 100vh;
    overflow: auto;
    @media (min-width: 1920px) {
      width: 25rem;
    }
  }
</style>
