<script lang="ts">
  import { allocationMap, hashConfig } from '../../hashConfig';
  import ContextMenu from '../ContextMenu/ContextMenu.svelte';
  const allocationStrings = Object.values(allocationMap);

  let { position = [0, 0], electorate = {}, allocation = 'n', onClose = () => {} } = $props();
</script>

<ContextMenu {position} {onClose}>
  <h1 class="section">
    <strong>{electorate.code}</strong>
    {electorate.name}
  </h1>

  <div class="section">
    <ul class="menu menu--double">
      {#each Object.values(allocationMap) as allocation}
        <li>
          <button
            class="item"
            onclick={e => {
              e.preventDefault();
              $hashConfig.allocations[electorate.code] = allocation === 'None' ? null : allocation;
              onClose();
            }}
          >
            <div class="circle" style:background={`var(--a-${allocation})`}></div>
            {allocation}
          </button>
        </li>
      {/each}
    </ul>

    <h2 data-placeholder>.</h2>
  </div>
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
  .menu--double {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 0.25rem;
    & li {
      white-space: nowrap;
    }
  }
  .section {
    padding: 0.5rem;
  }
  .circle {
    display: inline-block;
    margin-right: 0.5em;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
  }

  .item,
  button.item {
    display: block;
    width: 100%;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    &:focus-visible,
    &:hover {
      background: Highlight;
      color: HighlightText;
    }
  }
</style>
