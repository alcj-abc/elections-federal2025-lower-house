<script lang="ts">
  import { electorates, hashConfig, historical19, historical22, schema, mapConfig } from './hashConfig';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';
  import Focuses from './components/Focuses/Focuses.svelte';
  import config from '../../data/appdata-built.json';
  import layouts from '../../data/appdata-layouts.json';
  import Labels from './components/Labels/Labels.svelte';
  import MapRoot from '../components/MapRoot/MapRoot.svelte';
  import SpreadsheetImport from './components/SpreadsheetImport/SpreadsheetImport.svelte';
  import UpdateChecker from './components/UpdateChecker/UpdateChecker.svelte';
  import MarkerAdmin from './components/MarkerAdmin/MarkerAdmin.svelte';
  import BuilderStyleRoot from './components/BuilderStyleRoot/BuilderStyleRoot.svelte';
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
  <BuilderStyleRoot>
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

        <UpdateChecker />

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
            <legend>Markers</legend>
            <MarkerAdmin
              prefixes={{
                'Scrolly mark': '#mark',
                'Scrolly opener': '#scrollytellerNAMEelectionmap1',
                'Standalone graphic': '#graphic'
              }}
              defaultName={() =>
                [
                  $hashConfig.vizType,
                  $hashConfig.vizType === 'geo'
                    ? $hashConfig.geoArea
                    : $hashConfig.layout.replace(/_/g, ' ').toLowerCase()
                ].join(' ')}
            />
          </fieldset>
          <fieldset>
            <legend>Tools</legend>
            <button
              onclick={e => {
                e.preventDefault();
                modal = { type: 'spreadsheetImport' };
              }}>Spreadsheet import</button
            >
            <button
              onclick={e => {
                // @ts-ignore
                e.preventDefault();
                window.location = String(window.location).replace('/builder', '/google-doc-preview');
              }}>Google Doc preview</button
            >
          </fieldset>
        </form>
      </div>
    {/if}
  </BuilderStyleRoot>
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
    width: 22rem;
    @media (min-width: 1920px) {
      width: 25rem;
    }
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    height: 100vh;
    overflow: auto;
  }
</style>
