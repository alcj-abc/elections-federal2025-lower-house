<script lang="ts">
  import { arrowData } from '../../../components/HexMap/HexMapGroup/HexMapArrows/utils';
  import { allocationMap, hashConfig } from '../../../lib/hashConfig';
  import Circle from '../Circle/Circle.svelte';
  import ContextMenu from '../ContextMenu/ContextMenu.svelte';
  // import HexagonRedistribute from './HexagonRedistribute/HexagonRedistribute.svelte';
  let { position = [0, 0], electorate = {}, onClose = () => {} } = $props();
  let allocation = $derived.by(() => $hashConfig.allocations[electorate.id]);
</script>

<ContextMenu {position} {onClose}>
  <h1 class="section">
    <strong>{electorate.name}</strong>
    <small style="opacity:0.5">{electorate.id}</small>
  </h1>
  <hr />
  <!-- <HexagonRedistribute {electorate} />
  <hr /> -->
  {#if Object.values($arrowData).length > 0}
    <div class="section">
      Change in first preference
      <br />
      vote for {$hashConfig.firstPreferenceArrows}: {$arrowData[electorate.id]
        ? $arrowData[electorate.id].toFixed(3) + '%'
        : 'not applicable'}
    </div>
    <hr />
  {/if}

  <label class="item">
    <div class="section">
      <input
        type="checkbox"
        checked={$hashConfig.focuses[electorate.id]}
        onchange={e => {
          $hashConfig.focuses = { ...$hashConfig.focuses, [electorate.id]: (e.target as HTMLInputElement)?.checked };
          onClose();
        }}
      /> Focused
    </div>
  </label>
  <label class="item">
    <div class="section">
      <input
        type="checkbox"
        disabled={$hashConfig.showElectorateLabels || $hashConfig.showFocusedElectorateLabels}
        checked={$hashConfig.labelsToShow[electorate.id]}
        onchange={e => {
          $hashConfig.labelsToShow = {
            ...$hashConfig.labelsToShow,
            [electorate.id]: (e.target as HTMLInputElement)?.checked
          };
          onClose();
        }}
      /> Show Label
    </div>
  </label>
  <label class="item">
    <div class="section">
      <input
        type="checkbox"
        checked={$hashConfig.certainties[electorate.id]}
        onchange={e => {
          $hashConfig.certainties = {
            ...$hashConfig.certainties,
            [electorate.id]: (e.target as HTMLInputElement)?.checked
          };
          onClose();
        }}
      /> Is certain
    </div>
  </label>
  <hr />
  <div class="section">
    <ul class="menu menu--double">
      {#each Object.values(allocationMap).filter(item => item !== 'Any') as allocationOption}
        <li>
          <button
            class="item"
            disabled={allocation === allocationOption}
            onclick={e => {
              e.preventDefault();
              $hashConfig.allocations = {
                ...$hashConfig.allocations,
                [electorate.id]: allocationOption === 'None' ? null : allocationOption
              };
              onClose();
            }}
          >
            <Circle allocation={allocationOption} />
            {allocationOption}
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <hr />
  <a
    class="item section"
    href={`https://www.abc.net.au/news/elections/federal/2022/guide/${electorate.id.toLowerCase()}`}
    target="_blank"
  >
    2022 guide
  </a>
  <a
    class="item section"
    href={`https://www.abc.net.au/news/elections/federal/2022/guide/${electorate.id.toLowerCase()}`}
    target="_blank"
  >
    2019 guide
  </a>
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
    border-bottom: 1px solid var(--border);
  }
</style>
