<script lang="ts">
  import { allocationMap, hashConfig } from '../../hashConfig';
  import ContextMenu from '../ContextMenu/ContextMenu.svelte';
  const allocationStrings = Object.values(allocationMap);

  let { position = [0, 0], electorate = {}, onClose = () => {} } = $props();

  let allocation = $derived.by(() => $hashConfig.allocations[electorate.code]);
</script>

<ContextMenu {position} {onClose}>
  <h1 class="section">
    <strong>{electorate.name}</strong>
    <small style="color: var(--c-grey)">{electorate.code}</small>
  </h1>
  <hr />

  <label class="item">
    <div class="section">
      <input
        type="checkbox"
        checked={$hashConfig.focuses[electorate.code]}
        onchange={e => {
          $hashConfig.focuses = { ...$hashConfig.focuses, [electorate.code]: (e.target as HTMLInputElement)?.checked };
          onClose();
        }}
      /> Focused
    </div></label
  >
  <label class="item"
    ><div class="section">
      <input
        type="checkbox"
        disabled={$hashConfig.showElectorateLabels || $hashConfig.showFocusedElectorateLabels}
        checked={$hashConfig.labelsToShow[electorate.code]}
        onchange={e => {
          $hashConfig.labelsToShow = {
            ...$hashConfig.labelsToShow,
            [electorate.code]: (e.target as HTMLInputElement)?.checked
          };
          onClose();
        }}
      /> Show Label
    </div></label
  >
  <hr />
  <div class="section">
    <ul class="menu menu--double">
      {#each Object.values(allocationMap) as allocationOption}
        <li>
          <button
            class="item"
            disabled={allocation === allocationOption}
            onclick={e => {
              e.preventDefault();
              $hashConfig.allocations = {
                ...$hashConfig.allocations,
                [electorate.code]: allocationOption === 'None' ? null : allocationOption
              };
              onClose();
            }}
          >
            <div
              class="circle"
              data-allocation={allocationOption}
              style:background={`var(--a-${allocationOption})`}
            ></div>
            {allocationOption}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</ContextMenu>

<style lang="scss">
  h1 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
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
    padding: 0.75rem;
  }
  .circle {
    display: inline-block;
    margin-right: 0.5em;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
  }
  .circle[data-allocation='None'] {
    border: 1px solid var(--c-grey);
  }

  .item,
  button.item {
    display: block;
    width: 100%;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    margin: 0 !important;
    font-size: 1rem;
    &:focus-visible,
    &:hover {
      background: Highlight;
      color: HighlightText;
    }
  }
  hr {
    border: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
