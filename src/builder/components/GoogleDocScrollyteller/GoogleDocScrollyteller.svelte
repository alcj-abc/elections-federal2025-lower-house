<script lang="ts">
  /**
   * @file
   * Svelte port of google-doc-scrollyteller
   */
  import { loadData } from './utils';
  import ScrollytellerRoot from '../../../components/ScrollytellerRoot/ScrollytellerRoot.svelte';
  import { stringify } from '@abcnews/alternating-case-to-object';

  let { name = 'myscrollyteller', markerName = 'mark' } = $props();

  const localStorageKey = `ABC_NEWS_BUILDER_GDOC_PREVIEW`;

  let doc = $state(new URLSearchParams(window.location.search.slice(1)).get('doc'));
  let scrollytellerDefinition = $state();
  let title = $state('');
  let panelData = $state({});
  let textboxValue = $state(
    (() => {
      try {
        // migrate keys
        const legacyKey = 'last-successfully-loaded-google-doc-url';
        const oldVar = localStorage[legacyKey];
        if (oldVar) {
          localStorage[localStorageKey] = oldVar;
          delete localStorage[legacyKey];
        }

        // try to load our localStorage value, or fall back to the React version of the var
        return localStorage[localStorageKey];
      } catch (e) {
        return '';
      }
    })()
  );
  let error = $state('');

  // Valid url looks like:
  // https://docs.google.com/document/d/e/2PACX-1vQHeIm0sZTn4y_wQYTCV733ekALS_j1IDSJ63qsgny4gHSIjy-aOYEnHi6EFc4OvOdjF_8CdLm95bFl/pub
  const isValid = url => url.match(/\/pub$/) && url.includes('docs.google.com');

  $effect(() => {
    if (!doc) {
      return;
    }

    if (!isValid(doc)) {
      doc = '';
    }

    loadData({
      name,
      url: doc,
      markerName
    })
      .then(data => {
        title = data.title;
        scrollytellerDefinition = data?.scrollytellerDefinition;
      })
      .catch(e => {
        error = e.message;
        doc = '';
      });
  });
</script>

<svelte:head>
  {#if scrollytellerDefinition}
    <title>{title} - Preview Google doc</title>
  {/if}

  <link
    rel="icon"
    type="image/png"
    href={`data:image/svg+xml,${`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-richtext" viewBox="0 0 16 16">
      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
      <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>
    </svg>`.replace(/\n/, ' ')}`}
  />
</svelte:head>

{#if doc}
  <!-- A tall div reserves space so when we press "back" we return ot the same spot in the scrolly -->
  <div style:min-height={'10000vh'} class="scrolly-root">
    {#if scrollytellerDefinition}
      <ScrollytellerRoot
        panels={scrollytellerDefinition.panels}
        onMarker={d => {
          // if we send d.originalData we can re-stringify it to open this graphic directly in the builder.
          panelData = d;
        }}
      />
      <div class="floaty">
        <button
          onclick={() => {
            window.location.search = '';
          }}>Load another doc</button
        >
        <button
          onclick={() => {
            const url = `${window.location.pathname.split('/').slice(0, -2).join('/')}/builder/#${stringify(panelData.originalData || {})}`;
            // @ts-ignore
            window.location = url;
          }}>Open in builder</button
        >
      </div>
    {/if}
  </div>
{/if}

{#if error || !doc}
  <form method="GET">
    <fieldset class="builder__spacious">
      <legend>Google Doc preview</legend>
      <p>Enter a <em>published</em> Google Doc url to preview the scrollyteller.</p>
      <p>
        <small>
          You can publish &amp; find the URL in Google Docs through File → Share → Publish&nbsp;to&nbspweb
        </small>
      </p>
      {#if error}
        <p class="error">
          Error: {error}
        </p>
      {/if}
      <label>
        URL
        <input name="doc" type="text" bind:value={textboxValue} />
      </label>
      <div class="builder__submit-row">
        <button
          onclick={e => {
            if (!isValid(textboxValue)) {
              e.preventDefault();
              $error =
                "This document doesn't look valid. Please ensure you published the doc & provided the public url.";
              return;
            }
            try {
              localStorage[localStorageKey] = textboxValue;
            } catch (e) {}
          }}
        >
          Load scrollyteller
        </button>
      </div>
    </fieldset>
  </form>
{/if}

<style lang="scss">
  :global(body) {
    font-family: ABCSans, sans-serif;
  }
  form {
    position: absolute;
    left: 50%;
    top: 30%;
    max-width: 32rem;
    translate: -50% -50%;
  }
  fieldset {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 0.75rem;
  }
  p {
    margin: 0;
  }

  .error {
    border: 1px solid rgb(255, 153, 0);
    background: rgba(255, 128, 0, 0.05);
    border-radius: 4px;
    padding: 0.5rem;
  }

  .floaty {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 10;
  }

  .scrolly-root {
    background: white;
    color: black;
    border-radius: 0.2rem;
  }
</style>
