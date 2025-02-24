<script lang="ts">
  import { electorates, hashConfig, historical19, historical22, schema, groups, mapConfig } from './hashConfig';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';
  import Focuses from './components/Focuses/Focuses.svelte';
  import config from '../../data/appdata-built.json';
  import layouts from '../../data/appdata-layouts.json';
  import Labels from './components/Labels/Labels.svelte';
  import MapRoot from '../components/MapRoot/MapRoot.svelte';
  import SpreadsheetImport from './components/SpreadsheetImport/SpreadsheetImport.svelte';
  let modal = $state<{
    type: string;
    props?: {};
  }>();

  function onVizClick({ code, clientX, clientY }) {
    if (!code) {
      return;
    }
    const electorate = electorates.find(electorate => electorate.id === code);
    const allocation = $hashConfig.allocations[code];
    modal = {
      type: 'contextMenu',
      props: {
        electorate,
        allocation,
        position: [clientX, clientY]
      }
    };
  }
</script>

<StyleRoot>
  {#if $hashConfig}
    <div class="container">
      <div class="container-viz">
        <MapRoot
          {config}
          {...$hashConfig}
          layout={layouts[$hashConfig.layout]}
          onClick={onVizClick}
          isInteractive={true}
        />
      </div>

      {#if modal?.type === 'contextMenu'}
        <HexagonContextMenu
          {...modal.props}
          onClose={() => {
            modal = undefined;
          }}
        />
      {/if}

      {#if modal?.type === 'spreadsheetImport'}
        <SpreadsheetImport
          {electorates}
          onClose={() => {
            modal = undefined;
          }}
        />
      {/if}

      <form class="container-controls">
        <div class="fieldset">
          <label
            ><input
              name="vizType"
              type="radio"
              checked={$hashConfig.vizType === 'geo'}
              onchange={() => {
                $hashConfig.vizType = 'geo';
              }}
            />Geo map</label
          >

          <label>
            <input
              name="vizType"
              type="radio"
              checked={$hashConfig.vizType === 'hex'}
              onchange={() => {
                $hashConfig.vizType = 'hex';
              }}
            />Hex map</label
          >
        </div>

        {#if $hashConfig.vizType === 'hex'}
          <div class="fieldset">
            <label>
              <span>Layout</span>
              <select name="layout" bind:value={$hashConfig.layout}>
                {#each schema.layout.values as item}
                  <option>{item}</option>
                {/each}
              </select>
            </label>
          </div>
        {/if}

        {#if $hashConfig.vizType === 'geo'}
          <div class="fieldset">
            <label>
              <span>Map area</span>
              <select name="layout" bind:value={$hashConfig.geoArea}>
                {#each Object.keys(mapConfig.areas) as item}
                  <option>{item}</option>
                {/each}
              </select>
            </label>
          </div>
        {/if}

        <fieldset>
          <legend>Mix-ins</legend>
          <div class="buttons">
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.allocations = electorates.reduce((obj, electorate) => {
                  obj[electorate.id] = null;
                  return obj;
                }, {});
              }}>Blank</button
            >
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.allocations = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = electorate.holder;
                  return obj;
                }, {});
                $hashConfig.certainties = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = true;
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
                $hashConfig.certainties = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = true;
                  return obj;
                }, {});
              }}
            >
              2022 results
            </button>
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.certainties = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = null;
                  return obj;
                }, {});
              }}
            >
              No certainty
            </button>
            <button
              onclick={e => {
                e.preventDefault();
                $hashConfig.certainties = historical19.reduce((obj, electorate) => {
                  obj[electorate.id] = true;
                  return obj;
                }, {});
              }}
            >
              Full certainty
            </button>
          </div>
        </fieldset>
        <Focuses />
        <Labels />
        <fieldset>
          <legend>Tools</legend>
          <button
            onclick={e => {
              e.preventDefault();
              modal = { type: 'spreadsheetImport' };
            }}>Spreadsheet import</button
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
    height: 100vh;
  }
  .container-viz {
    flex: 1;
    min-width: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
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
        background: Highlight;
        color: HighlightText;
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
