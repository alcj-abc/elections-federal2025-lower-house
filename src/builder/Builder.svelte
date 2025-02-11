<script lang="ts">
  import { onMount } from 'svelte';
  import { electorates, hashConfig, historical22, schema } from './hashConfig';
  import HexMap from '../components/HexMap/HexMap.svelte';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';

  const electorateData = historical22;

  let modal = $state<{
    electorate: any;
    allocation: string;
    position: [number, number];
  }>();

  function onMapClick({ srcElement, clientX, clientY }) {
    const code = srcElement.dataset.code;
    if (!code) {
      return;
    }
    const electorate = electorates.find(electorate => electorate.code === code);
    const allocation = $hashConfig.allocations[code];
    modal = {
      electorate,
      allocation,
      position: [clientX, clientY]
    };
  }
</script>

<StyleRoot>
  {#if $hashConfig}
    <div class="container">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="container-viz" onclick={onMapClick}>
        <HexMap layout={$hashConfig.layout} allocations={$hashConfig.allocations} />
      </div>

      {#if modal}
        <HexagonContextMenu
          {...modal}
          onClose={() => {
            console.log('onClose');
            modal = undefined;
          }}
        />
      {/if}

      <form class="container-controls">
        <div class="fieldset">
          <label>
            <span>Layout</span>
            <select
              bind:value={$hashConfig.layout}
              onchange={e => hashConfig.set({ ...$hashConfig, layout: e.target?.value })}
            >
              {#each schema.layout.values as item}
                <option>{item}</option>
              {/each}
            </select></label
          >
        </div>

        <fieldset>
          <legend>Mix-ins</legend>
          <button
            onclick={e => {
              e.preventDefault();
              $hashConfig.allocations = {};
            }}>Blank</button
          >
          <button
            onclick={e => {
              e.preventDefault();
              $hashConfig = {
                ...$hashConfig,
                allocations: electorateData.reduce((obj, electorate) => {
                  obj[electorate.id] = electorate.holder;
                  return obj;
                }, {})
              };
            }}>2019 results</button
          >
        </fieldset>
      </form>
    </div>
  {/if}
</StyleRoot>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .container {
    display: flex;
  }
  .container-viz {
    flex: 1;
    min-width: 50%;
    justify-content: center;
    align-items: center;
  }
  .container-controls {
    width: 18rem;
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    height: 100vh;
    overflow: auto;
  }

  fieldset {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid var(--c-grey);
  }

  .fieldset {
    padding: 0 0.75rem;
    border: 1px solid transparent;
  }
  .fieldset,
  fieldset {
    margin-bottom: 1rem;
  }

  label {
    & > span {
      display: block;
      margin-bottom: 0.3rem;
    }
    margin-bottom: 0.5rem;
  }

  select,
  button {
    padding: 0.25rem 0.5rem;
    background: var(--c-white);
    border: 1px solid var(--c-grey);
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      border-color: var(--c-black);
      background: var(--c-lightgrey);
    }
  }
</style>
