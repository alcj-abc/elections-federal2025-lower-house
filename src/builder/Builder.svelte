<script lang="ts">
  import { electorates, hashConfig, historical19, historical22, schema, groups } from './hashConfig';
  import HexMap from '../components/HexMap/HexMap.svelte';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';
  import Focuses from './components/Focuses/Focuses.svelte';
  let modal = $state<{
    electorate: any;
    allocation: string;
    position: [number, number];
  }>();

  function onVizClick({ srcElement, clientX, clientY }) {
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
      <div class="container-viz" onclick={onVizClick}>
        <HexMap layout={$hashConfig.layout} allocations={$hashConfig.allocations} focuses={$hashConfig.focuses} />
      </div>

      {#if modal}
        <HexagonContextMenu
          {...modal}
          onClose={() => {
            modal = undefined;
          }}
        />
      {/if}

      <form class="container-controls">
        <div class="fieldset">
          <label>
            <span>Layout</span>
            <select name="layout" bind:value={$hashConfig.layout}>
              {#each schema.layout.values as item}
                <option>{item || 'argh'}</option>
              {/each}
            </select></label
          >
        </div>

        <fieldset>
          <legend>Mix-ins</legend>
          <div class="buttons">
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.allocations = {};
              }}>Blank</button
            >
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.allocations = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = electorate.holder;
                  return obj;
                }, {});
              }}
            >
              2019 results
            </button>
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.allocations = historical22.reduce((obj, electorate) => {
                  obj[electorate.id] = electorate.holder;
                  return obj;
                }, {});
              }}
            >
              2022 results
            </button>
          </div>
        </fieldset>
        <Focuses />
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

  .container {
    :global(fieldset) {
      margin-bottom: 1rem;
      padding: 0.75rem;
      border: 1px solid var(--c-grey);
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .fieldset {
      padding: 0 0.75rem;
      border: 1px solid transparent;
    }
    .fieldset,
    :global(fieldset) {
      margin-bottom: 1rem;
      border-radius: 0.2rem;
    }

    :global(.buttons) {
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
    }

    :global(label) {
      & > :global(span) {
        display: block;
        margin-bottom: 0.3rem;
      }
      margin-bottom: 0.5rem;
    }

    :global(select),
    :global(button) {
      padding: 0.25rem 0.5rem;
      background: var(--c-white);
      border: 1px solid var(--c-grey);
      border-radius: 0.2rem;
    }
    :global(select:not([multiple])),
    :global(button:not(:disabled)) {
      cursor: pointer;
      &:hover,
      &:focus-visible {
        border-color: var(--c-black);
        background: var(--c-lightgrey);
      }
    }

    :global(select) {
      width: 100%;
    }

    :global(.btn-icon) {
      padding: 0;
      display: inline-flex;
      height: 1.5rem;
      width: 1.5rem;
      justify-content: center;
      align-items: center;
    }
  }
</style>
