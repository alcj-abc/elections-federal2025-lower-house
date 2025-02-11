<script lang="ts">
  import ContextMenu from '../ContextMenu/ContextMenu.svelte';

  let { position = [0, 0], electorate = {}, allocation = 'n', onClose = () => {} } = $props();
</script>

<ContextMenu {position} {onClose}>
  <h1 class="section">
    <strong>{electorate.code}</strong>
    {electorate.name}
  </h1>

  <h2 class="section">Menu</h2>
  <ul class="menu section"></ul>
</ContextMenu>

<style lang="scss">
  h1,
  h2 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  h1 {
    background: rgba(0, 0, 0, 0.1);
    color: black;
  }
  h2 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .section {
    padding: 0.5rem;
  }
</style>
