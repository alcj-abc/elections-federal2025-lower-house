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
  const GENERATOR_MAX_PARALLEL = 5;
  const IFRAME_URL = window.location.origin + window.location.pathname.replace('/builder/', '/iframe/');

  let { defaultMarkerName = () => 'Marker' } = $props();

  // closed => pasting => preview => generate => done
  let status = $state('pasting');
  let pastedState = $state(window.location.hash);
  let preview = $state([]);
  let progress = $state(0);
  let error = $state('');

  $effect(() => {
    (async () => {
      let _pastedState = untrack(() => pastedState);
      let _status = status;
      if (_status !== 'preview') {
        return;
      }
      // Find markers in the text
      const markers = _pastedState.split('\n').filter(row => row.match(/^#/));

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

  async function createScreenshots({ preview }) {
    const zip = new JSZip();
    let completed = 0;
    const imageBlobs = [];
    await eachLimit(preview, GENERATOR_MAX_PARALLEL, async ({ markerString }, callback) => {
      const iframeUrl = IFRAME_URL + markerString;
      const generatorUrl = [
        GENERATOR_URL,
        new URLSearchParams({
          url: iframeUrl,
          selector: `.iframe-mount > *`
        }).toString()
      ].join('?');

      const blob = await fetch(generatorUrl).then(response => {
        completed += 1;
        progress = completed / preview.length;
        if (response.status !== 200) {
          return null;
        }
        return response.blob();
      });
      imageBlobs.push(blob);
      callback();
    });

    console.log({ imageBlobs });

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
      saveAs(content, `fallback-bundle-${Date.now()}.zip`);
    });
  }

  $effect(() => {
    let _preview = untrack(() => preview);
    let _status = status;
    if (_status !== 'generate') {
      return;
    }
    console.log('generating');
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
  <button
    disabled={status === 'generate'}
    onclick={e => {
      e.preventDefault();
      e.stopPropagation();
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
    {status === 'preview' ? 'Create screenshots' : 'Next'}
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
        <p>Creating {preview.length} marker{preview.length === 1 ? '' : 's'}:</p>
        <table class="builder__table">
          <thead>
            <tr><th>#</th><th>Marker</th></tr>
          </thead>
          <tbody>
            {#each preview as { name, marker }, i}
              <tr><td>{i}</td><td>{name}</td></tr>
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
    </div>
  </Modal>
{/if}

<style lang="scss">
  .screenshot-tool {
    width: 100vw;
    max-width: 640px;
  }
  textarea {
    height: 100vh;
    max-height: 200px;
  }
  progress,
  table,
  textarea {
    width: 100%;
  }
</style>
