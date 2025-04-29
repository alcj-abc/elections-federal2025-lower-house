<script>
  import { decodeSchema, encodeSchema } from 'hash-codec';
  import { untrack } from 'svelte';
  import Modal from '../Modal/Modal.svelte';
  import parse, { stringify } from '@abcnews/alternating-case-to-object';
  import { schema } from '../../../lib/hashConfig/schema';
  import JSZip from 'jszip';
  import { saveAs } from 'file-saver';
  import eachLimit from 'async/eachLimit';

  const GENERATOR_URL = 'https://fallbacks.abcnewsdigital.com/api';
  const GENERATOR_MAX_PARALLEL = 3;
  const GENERATOR_WIDTH = '1000';
  const IFRAME_URL = window.location.origin + window.location.pathname.replace('/builder/', '/iframe/');

  let { defaultMarkerName = () => 'Marker', prefixes = {} } = $props();

  // closed => pasting => preview => generate => done
  let status = $state('closed');
  let pastedState = $state(window.location.hash);
  let preview = $state([]);
  let progress = $state(0);
  let error = $state('');

  // When the user first hits the "preview" screen, parse our textarea and show them a preview
  $effect(() => {
    (async () => {
      let _pastedState = untrack(() => pastedState);
      let _status = status;
      if (_status !== 'preview') {
        return;
      }
      const allowedPrefixes = Object.values(prefixes).map(prefix => prefix.replace(/\d$/, ''));

      // Find markers in the text
      const markers = _pastedState
        .split('\n')
        .filter(row => allowedPrefixes.find(prefix => row.slice(0, prefix.length) === prefix));

      // parse to object
      const encodedMarkers = markers.map(marker => parse(marker));

      // pass through schema
      const decodedMarkers = await Promise.all(
        encodedMarkers.map(parsedData => decodeSchema({ schema, data: parsedData }))
      );

      // generate a friendly name &  reencode markers with hexFlip="none"
      preview = await Promise.all(
        decodedMarkers.map(async marker => ({
          name: defaultMarkerName(marker),
          marker,
          markerString: '#' + stringify(await encodeSchema({ schema, data: { ...marker, hexFlip: 'Fade' } }))
        }))
      );
    })();
  });

  function doFetch(generatorUrl) {
    return fetch(generatorUrl).then(response => {
      if (response.status !== 200) {
        return null;
      }
      return response.blob();
    });
  }

  async function createScreenshots({ preview }) {
    const zip = new JSZip();
    let completed = 0;
    progress = 0;
    error = '';
    const imageBlobs = [];
    await eachLimit(preview, GENERATOR_MAX_PARALLEL, async ({ markerString }, callback) => {
      const iframeUrl = IFRAME_URL + markerString;
      const generatorUrl = [
        GENERATOR_URL,
        new URLSearchParams({
          url: iframeUrl,
          selector: `.iframe-mount > *`,
          width: GENERATOR_WIDTH
        }).toString()
      ].join('?');

      let blob = await doFetch(generatorUrl);
      // retry. It fails sometimes.
      if (!blob) {
        blob = await doFetch(generatorUrl);
      }
      completed += 1;
      progress = completed / preview.length;

      imageBlobs.push(blob);
      callback();
    });

    const errors = [];
    imageBlobs.forEach((blob, index) => {
      const filename = `${String(index).padStart(3, '0')}-${preview[index].name}.png`;
      if (blob) {
        zip.file(filename, blob);
      } else {
        errors.push(filename);
      }
    });

    if (errors.length) {
      status = 'error';
      if (errors.length === imageBlobs.length) {
        error = 'Could not download files. The fallback service may not be running.';
        return;
      } else if (errors.length) {
        error = 'Error: could not download some files. These might be missing from the zip:\n\n' + errors.join('\n');
      }
    }

    return zip.generateAsync({ type: 'blob' }).then(content => {
      if (!errors.length) {
        status = 'complete';
      }
      saveAs(content, `fallback-bundle-${Date.now()}.zip`);
    });
  }

  // When the user first hits the "generate" screen, call createScreenshot()
  $effect(() => {
    let _preview = untrack(() => preview);
    let _status = status;
    if (_status !== 'generate') {
      return;
    }
    createScreenshots({ preview: _preview });
  });

  function onClose() {
    status = 'closed';
  }
</script>

<button
  onclick={e => {
    e.preventDefault();
    status = 'pasting';
  }}
>
  Screenshot tool
</button>

{#snippet footerChildren()}
  {#if status === 'preview'}
    <button
      onclick={e => {
        e.preventDefault();
        status = 'pasting';
      }}
    >
      Back
    </button>
  {/if}
  <button
    disabled={status === 'generate'}
    onclick={e => {
      e.preventDefault();
      switch (status) {
        case 'error':
          status = 'closed';
          return;
        case 'pasting':
          status = 'preview';
          return;
        case 'preview':
          status = 'generate';
          return;
        default:
          status = 'closed';
      }
    }}
  >
    {#if status === 'preview'}
      Generate screenshots
    {:else if status === 'error' || status === 'complete'}
      Close
    {:else}
      Next
    {/if}
  </button>
{/snippet}

{#if status !== 'closed'}
  <Modal title="Screenshot tool" {onClose} {footerChildren}>
    <div class="screenshot-tool">
      {#if status === 'pasting'}
        <p>Paste your story, or a series of markers to create screenshots</p>
        <textarea bind:value={pastedState}></textarea>
      {/if}

      {#if status === 'preview'}
        <p>This will create {preview.length} screenshot{preview.length === 1 ? '' : 's'}:</p>
        <table class="builder__table">
          <thead>
            <tr><th>#</th><th>Marker</th><th>Marker</th></tr>
          </thead>
          <tbody>
            {#each preview as { name, markerString }, i}
              <tr><td>{i + 1}</td><td>{name}</td><td><code class="marker">{markerString}</code></td></tr>
            {/each}
          </tbody>
        </table>
      {/if}

      {#if status === 'generate'}
        <p>Generating screenshots. This may take some time.</p>
        <progress max="100" value={Math.round(progress * 100)}></progress>
      {/if}

      {#if status === 'error'}
        <p>{error}</p>
      {/if}

      {#if status === 'complete'}
        <p>Your screenshots are finished. Check for the zip file in your Downloads folder.</p>
      {/if}
    </div>
  </Modal>
{/if}

<style lang="scss">
  .screenshot-tool {
    width: 100vw;
    max-width: 640px;
    position: relative;
    height: 100vh;
    max-height: 200px;
  }
  textarea {
    min-height: 150px;
  }
  table,
  progress,
  textarea {
    width: calc(100% - 2px);
  }
  table {
    max-width: calc(100% - 2px);
  }

  .marker {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 20em;
  }
</style>
