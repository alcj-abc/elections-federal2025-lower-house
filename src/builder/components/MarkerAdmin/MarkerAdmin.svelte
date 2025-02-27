<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import { slide } from 'svelte/transition';

  let { defaultName = () => '' } = $props();

  type Marker = {
    /** human readable name */
    name: string;
    /** actual marker string */
    hash: string;
    /** Date at which the marker was deleted (for undo) */
    deleted?: number;
  };

  let hasLoaded = $state(false);
  let markers = $state<Marker[]>([]);
  let mode = $state('scrolly-mark');

  const [projectName = 'dev', version = '0.0.0'] =
    window.location.pathname.match(/\/news-projects\/([^/]+)\/(\d+\.\d+\.\d+)/)?.slice(1) || [];
  const localStorageKey = `ABC_NEWS_BUILDER_${projectName.toUpperCase().replace(/-/g, '_')}`;

  $effect(() => {
    let _markers = markers;
    if (!hasLoaded) {
      return;
    }
    try {
      localStorage[localStorageKey] = JSON.stringify({
        version: version,
        lastUpdated: new Date().toISOString(),
        expiry: 2026,
        markers: _markers
      });
    } catch (e) {
      alert('Could not save markers: ' + (e as Error).message);
    }
  });

  $effect(() => console.log({ markers: [...markers], hasLoaded }));

  function onClickDelete(e, index) {
    e.preventDefault();
    const newMarkers = [...markers];
    const marker = newMarkers[index];
    if (marker.deleted) {
      delete marker.deleted;
    } else {
      marker.deleted = Date.now();
    }
  }

  /* ---------------------------------------------------------------------------
   * slightly more complex delete logic than I hoped. When an item is marked
   * as deleted, set a timer and actually delete it after ~5sec.
   * don't delete while the user is still hovering the items.
   */
  let isHovering = $state(false);
  let interval = $state<NodeJS.Timeout>();
  function clearDeleteCleanup() {
    const _interval = untrack(() => interval);
    if (_interval) {
      clearInterval(_interval);
      interval = undefined;
    }
  }
  $effect(() => {
    const _markers = untrack(() => markers);

    clearDeleteCleanup();
    if (isHovering) {
      return;
    }

    interval = setInterval(() => {
      const goodMarkers = marker => !marker.deleted || marker.deleted > Date.now() - 5000;
      if (!_markers.every(goodMarkers)) {
        console.log('ilteringin markers');
        markers = _markers.filter(goodMarkers);
      }
    }, 3000);
  });

  onMount(function load() {
    try {
      const storage = localStorage[localStorageKey];
      if (!storage) {
        hasLoaded = true;
        return;
      }
      const parsedStorage = JSON.parse(storage);
      markers = parsedStorage.markers;
    } catch (e) {
      alert('Could not load saved markers: ' + (e as Error).message);
    }
    hasLoaded = true;

    return () => {
      clearDeleteCleanup();
    };
  });
</script>

<div class="toolbar">
  <select bind:value={mode}>
    <option value="scrolly-mark">Scrollyteller mark</option>
    <option value="scrolly-opener">Scrollyteller opener</option>
    <option value="standalone">Standalone graphic</option>
  </select>
  <button
    title="Copy marker"
    onclick={e => {
      e.preventDefault();
      const prefixes = {
        'scrolly-mark': '#mark',
        'scrolly-opener': '#scrollytellerNAMEelectionmap1',
        standalone: '#graphic'
      };
      const hash = window.location.hash.slice(1);
      navigator.clipboard.writeText(prefixes[mode] + hash);
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-copy"
      viewBox="0 0 16 16"
    >
      <title>Copy</title>
      <path
        fill-rule="evenodd"
        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
      />
    </svg>
  </button>
  <div class="divider"></div>
  <button
    title="Save marker"
    onclick={e => {
      e.preventDefault();
      const name = prompt('What would you like to call this snapshot?', defaultName());
      if (!name) {
        return;
      }
      markers.push({
        name,
        hash: window.location.hash.slice(1)
      });
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-save"
      viewBox="0 0 16 16"
    >
      <title>Save</title>
      <path
        d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"
      />
    </svg>
  </button>
</div>

<svelte:window
  onblur={() => {
    isHovering = false;
  }}
/>

<table
  class="rows"
  onmouseenter={() => {
    isHovering = true;
  }}
  onmouseleave={() => {
    isHovering = false;
  }}
>
  <tbody>
    {#each markers as marker, i}
      <tr
        class="row"
        class:row--deleted={marker.deleted}
        transition:slide
        onclick={e =>
          //@ts-ignore
          e.target?.querySelector('a')?.click()}
      >
        <td class="name">
          {#if marker.deleted}
            {marker.name}
          {:else}
            <a href={`#${marker.hash}`}>
              {marker.name}
            </a>
          {/if}
        </td>
        <td class="buttons">
          <button onclick={e => onClickDelete(e, i)} title={marker.deleted ? 'Undo delete' : 'Delete marker'}>
            {#if marker.deleted}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
              >
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                <path
                  d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"
                />
              </svg>
            {:else}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                />
              </svg>
            {/if}
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  .toolbar {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    .divider {
      border-right: 1px solid var(--c-grey);
    }
  }

  table,
  tr,
  td,
  tbody {
    margin: 0;
    padding: 0;
    display: block;
  }
  tbody {
    width: 100%;
  }
  .row {
    display: flex;
    width: 100%;
    border-bottom: 1px solid var(--c-empty-border, #88888888);
    width: calc(100% + 0.5rem);
    margin-left: -0.25rem;
    & > * {
      padding: 0.25rem;
    }
    &:not(&--deleted):hover {
      cursor: pointer;
      background: Highlight;
      color: HighlightText;
    }
  }
  .row a {
    text-decoration: none;
    color: inherit;
    &:focus-visible {
      text-decoration: underline;
    }
  }
  .name {
    flex: 1;
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }

  .row--deleted .name {
    opacity: 0.2;
  }
</style>
