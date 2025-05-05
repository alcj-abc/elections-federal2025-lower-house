<script lang="ts">
  import { electorates, schema, mapConfig, parties } from '../lib/hashConfig/schema';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
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
  import { hashConfig } from '../lib/hashConfig/svelteStore';
  import SpotlightSearch from './components/SpotlightSearch/SpotlightSearch.svelte';
  import { modal } from './store';
  import ScreenshotTool from './components/ScreenshotTool/ScreenshotTool.svelte';
  import { defaultMarkerName, markerPrefixes } from './util';
  import LiveData from './components/LiveData/LiveData.svelte';
  import { maps } from '../components/GeoMap/store';

  // @ts-ignore
  let selectedElectorate = $derived.by(() => $modal?.props?.electorate?.id);

  function onVizClick({ code, clientX, clientY }) {
    if (!code) {
      return;
    }
    const electorate = electorates.find(electorate => electorate.id === code);
    const allocation = $hashConfig.allocations[code];
    $modal = {
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

<BuilderStyleRoot>
  {#if $hashConfig}
    <div class="container">
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="container-viz">
        <LabelDragger>
          <MapRoot {config} {...$hashConfig} {layout} onClick={onVizClick} isInteractive={true} {selectedElectorate} />
        </LabelDragger>
      </div>

      <UpdateChecker />

      {#if $modal?.type === 'contextMenu'}
        <HexagonContextMenu
          {...$modal.props}
          onClose={() => {
            $modal = undefined;
          }}
        />
      {/if}

      {#if $modal?.type === 'spreadsheetImport'}
        <SpreadsheetImport
          onClose={() => {
            $modal = undefined;
          }}
        />
      {/if}

      <form class="container-controls" onsubmit={e => e.preventDefault()}>
        <div class="fieldset builder__inline">
          <label>
            <input
              name="vizType"
              type="radio"
              checked={$hashConfig.vizType === 'geo'}
              onchange={() => {
                $hashConfig.vizType = 'geo';
                $hashConfig.arrowChart = 'None';
              }}
            />
            Geo map
          </label>

          <label>
            <input
              name="vizType"
              type="radio"
              checked={$hashConfig.vizType === 'hex'}
              onchange={() => {
                $hashConfig.vizType = 'hex';
              }}
            />
            Hex map
          </label>
          <div style="flex:1"></div>
          <SpotlightSearch />
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
          <fieldset>
            <legend>Map area</legend>
            <div class="builder__inline" style:flex-wrap="nowrap">
              <select name="layout" bind:value={$hashConfig.geoArea}>
                {#each Object.keys(mapConfig.areas) as item}
                  <option disabled={item === 'Custom snapshot'}>{item}</option>
                {/each}
              </select>
              <button
                onclick={() => {
                  const map = $maps[0];
                  if (!map) {
                    return;
                  }
                  const bounds = map.getBounds();
                  $hashConfig = {
                    ...$hashConfig,
                    geoBoundsTopRight: [bounds.getEast(), bounds.getNorth()],
                    geoBoundsBottomLeft: [bounds.getWest(), bounds.getSouth()],
                    geoArea: 'Custom snapshot'
                  };
                }}
              >
                Snapshot
              </button>
            </div>
          </fieldset>
        {/if}

        {#if $hashConfig.arrowChart === 'None'}
          <fieldset>
            <legend>Mix-ins</legend>
            <div class="buttons">
              <button
                onclick={e => {
                  $hashConfig.allocations = electorates.reduce((obj, electorate) => {
                    obj[electorate.id] = null;
                    return obj;
                  }, {});
                  $hashConfig.certainties = electorates.reduce((obj, electorate) => {
                    obj[electorate.id] = true;
                    return obj;
                  }, {});
                  $hashConfig.focuses = electorates.reduce((obj, electorate) => {
                    obj[electorate.id] = false;
                    return obj;
                  }, {});
                }}
              >
                Blank
              </button>
              <button
                onclick={e => {
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
                  fetch('./data/2022-redist.tsv', { cache: 'force-cache' })
                    .then(res => res.text())
                    .then(tsv => {
                      $hashConfig = applyHashConfig(parseSpreadsheet(tsv), $hashConfig);
                    });
                }}
              >
                2022 redistributed
              </button>
              <LiveData />
              <button
                onclick={e => {
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
        {/if}
        <Focuses />
        {#if $hashConfig.arrowChart === 'None'}
          <Labels />
          <fieldset>
            <legend>Behaviour</legend>

            <label>
              <input type="checkbox" bind:checked={$hashConfig.showTotals} />
              Show totals
            </label>

            <label>
              <input type="checkbox" bind:checked={$hashConfig.combineCoalition} />
              Combine Coalition
            </label>

            <label class="builder__inline">
              Animations:
              <select bind:value={$hashConfig.hexFlip} style:flex="1">
                {#each schema.hexFlip.values as value}
                  <option>{value}</option>
                {/each}
              </select>
            </label>
          </fieldset>
        {/if}
        {#if $hashConfig.vizType === 'hex'}
          <fieldset>
            <legend>
              <button
                class="btn-icon"
                title="Clear focuses"
                disabled={$hashConfig.arrowChart === 'None'}
                onclick={e => {
                  $hashConfig.arrowChart = 'None';
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <title>Clear labels</title>
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>
              </button>
              Arrow charts
            </legend>
            <label>
              <select
                bind:value={$hashConfig.arrowChart}
                onchange={e => {
                  if ($hashConfig.arrowChart === 'None') {
                    return;
                  }
                  $hashConfig.showStateLabels = false;
                  $hashConfig.showElectorateLabels = false;
                  $hashConfig.showTotals = false;
                  $hashConfig.allocations = electorates.reduce((obj, electorate) => {
                    obj[electorate.id] = null;
                    return obj;
                  }, {});
                }}
              >
                {#each schema.arrowChart.values as value}
                  <option>{value}</option>
                {/each}
              </select>
            </label>
            {#if $hashConfig.arrowChart !== 'None'}
              <label>
                <input type="checkbox" bind:checked={$hashConfig.arrowChartPercentCounted} />
                Show percent counted
              </label>

              <label>
                <input type="checkbox" bind:checked={$hashConfig.arrowChartCaption} />
                Show party name
              </label>
            {/if}
          </fieldset>
        {/if}
        <fieldset>
          <legend>Accessibility (for inline graphics)</legend>
          <label>
            Caption
            <input type="text" bind:value={$hashConfig.caption} />
          </label>
          <label>
            Alt text
            <textarea type="text" bind:value={$hashConfig.altText}></textarea>
          </label>
        </fieldset>
        <fieldset>
          <legend>Markers</legend>
          <MarkerAdmin prefixes={markerPrefixes} defaultName={() => defaultMarkerName($hashConfig)} />
        </fieldset>
        <fieldset>
          <legend>Tools</legend>
          <button
            onclick={e => {
              $modal = { type: 'spreadsheetImport' };
            }}>Spreadsheet import/export</button
          >
          <button
            onclick={e => {
              // @ts-ignore
              window.location = String(window.location.pathname).replace('/builder', '/google-doc-preview');
            }}>Google Doc preview</button
          >
          <ScreenshotTool {defaultMarkerName} prefixes={markerPrefixes} />
        </fieldset>
      </form>
    </div>
  {/if}
</BuilderStyleRoot>

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
    padding: 2rem 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-left: 1px solid var(--border);
    height: 100vh;
    overflow: auto;
    @media (min-width: 1920px) {
      width: 25rem;
    }
  }

  .container :global(button[data-loading]) {
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    from {
      outline: 3px solid transparent;
    }
    50% {
      outline: 3px solid Highlight;
    }
    to {
      outline: 3px solid transparent;
    }
  }
</style>
