<script lang="ts">
  import { electorates, hashConfig, schema, mapConfig, parties } from '../lib/hashConfig';
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
  import { applyHashConfig, parseSpreadsheet } from './components/SpreadsheetImport/util';
  import LabelDragger from './components/LabelDragger/LabelDragger.svelte';
  import { onMount } from 'svelte';
  import { isDraggingEnabled, offsets } from './components/LabelDragger/utils';
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
  onMount(() => {
    // fix webpack glitches
    if (location.pathname === '/builder') {
      location.pathname = '/builder/';
    }
  });

  // modify the layout with offsets from LabelDragger
  const layout = $derived.by(() => {
    const newLayout = JSON.parse(JSON.stringify(layouts[$hashConfig.layout]));
    const overrides = Object.entries($offsets);
    if (overrides.length) {
      overrides.forEach(([labelName, offset]) => {
        const matchingLabel = newLayout.labels.find(label => label.name === labelName);
        const offsetX = offset?.[0] || 0;
        const offsetY = offset?.[1] || 0;
        matchingLabel.left += offsetX;
        matchingLabel.top += offsetY;
      });
      console.log('New layout', newLayout.labels);
    }
    return newLayout;
  });
</script>

<svelte:head>
  <link
    rel="icon"
    type="image/png"
    href={`data:image/svg+xml,${`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-motherboard" viewBox="0 0 16 16">
  <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/>
</svg>`.replace(/\n/, ' ')}`}
  />
</svelte:head>

<StyleRoot>
  <BuilderStyleRoot>
    {#if $hashConfig}
      <div class="container">
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="container-viz">
          <LabelDragger>
            <MapRoot
              totals={parties.totals}
              {config}
              {...$hashConfig}
              {layout}
              onClick={onVizClick}
              isInteractive={true}
            />
          </LabelDragger>
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
                  fetch('./data/2019.tsv', { cache: 'force-cache' })
                    .then(res => res.text())
                    .then(tsv => {
                      $hashConfig = applyHashConfig(parseSpreadsheet(tsv), $hashConfig);
                    });
                }}
              >
                2019 results
              </button>
              <button
                onclick={e => {
                  e.preventDefault();
                  fetch('./data/2022.tsv', { cache: 'force-cache' })
                    .then(res => res.text())
                    .then(tsv => {
                      const rows = parseSpreadsheet(tsv);
                      $hashConfig = applyHashConfig(rows, $hashConfig);
                    });
                }}
              >
                2022 (before redist)
              </button>
              <button
                onclick={e => {
                  e.preventDefault();
                  fetch('./data/2022-redist.tsv', { cache: 'force-cache' })
                    .then(res => res.text())
                    .then(tsv => {
                      $hashConfig = applyHashConfig(parseSpreadsheet(tsv), $hashConfig);
                    });
                }}
              >
                2022 redistributed
              </button>
              <button
                onclick={e => {
                  e.preventDefault();
                  $hashConfig.certainties = electorates.reduce((obj, electorate) => {
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
                  $hashConfig.certainties = electorates.reduce((obj, electorate) => {
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
            <legend>Totals bar</legend>

            <label>
              <input type="checkbox" bind:checked={$hashConfig.showTotals} />
              Show totals
            </label>
          </fieldset>
          <fieldset>
            <legend>Change arrows</legend>
            <label>
              Show change in first preference for:
              <select bind:value={$hashConfig.firstPreferenceArrows}>
                {#each schema.firstPreferenceArrows.values as value}
                  <option>{value}</option>
                {/each}
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Markers</legend>
            <MarkerAdmin
              prefixes={{
                'Scrolly mark': '#mark',
                'Scrolly opener': '#scrollytellerNAMEelectionmap1',
                'Inline graphic': '#electioninline'
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
              }}>Spreadsheet import/export</button
            >
            <button
              onclick={e => {
                // @ts-ignore
                e.preventDefault();
                window.location = String(window.location.pathname).replace('/builder', '/google-doc-preview');
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
    padding: 1.69rem;
    background: white;
    color: black;
  }
  .container-controls {
    width: 22rem;
    @media (min-width: 1920px) {
      width: 25rem;
    }
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-left: 1px solid var(--border);
    height: 100vh;
    overflow: auto;
  }
</style>
