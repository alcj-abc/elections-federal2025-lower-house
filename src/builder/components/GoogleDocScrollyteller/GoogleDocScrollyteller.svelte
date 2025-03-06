<script lang="ts">
  /**
   * @file
   * Svelte port of google-doc-scrollyteller
   */
  import { onMount } from 'svelte';
  import StyleRoot from '../../../components/StyleRoot/StyleRoot.svelte';
  import BuilderStyleRoot from '../BuilderStyleRoot/BuilderStyleRoot.svelte';
  import { loadData } from './utils';
  import ScrollytellerRoot from '../../../components/ScrollytellerRoot/ScrollytellerRoot.svelte';

  let { name = 'myscrollyteller', markerName = 'mark', preprocessCoreEl, preprocessScrollytellerDefinition } = $props();

  const localStorageKey = `ABC_NEWS_BUILDER_GDOC_PREVIEW`;

  let doc = $state(new URLSearchParams(window.location.search.slice(1)).get('doc'));
  let scrollytellerDefinition = $state();
  let textboxValue = $state(
    (() => {
      try {
        // try to load our localStorage value, or fall back to the React version of the var
        return localStorage[localStorageKey] || localStorage['last-successfully-loaded-google-doc-url'];
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
      markerName,
      preprocessCoreEl,
      preprocessScrollytellerDefinition
    })
      .then(data => {
        console.log({ data });
        scrollytellerDefinition = data?.scrollytellerDefinition;
      })
      .catch(e => {
        error = e.message;
        doc = '';
      });
  });
</script>

{#if scrollytellerDefinition}
  <ScrollytellerRoot panels={scrollytellerDefinition.panels} />
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
</style>
