<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  import { electorates, electoratesByCode } from '../../../lib/hashConfig/schema';
  import Typeahead from '../Typeahead/Typeahead.svelte';
  import { modal } from '../../store';
  import { hashConfig } from '../../../lib/hashConfig/svelteStore';

  let isVisible = $state(false);
</script>

<svelte:window
  onkeypress={e => {
    const disallowedElements = [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement];
    if (disallowedElements.some(element => e.target instanceof element)) {
      return;
    }
    if (e.key === '?') {
      e.preventDefault();
      e.stopPropagation();
      isVisible = true;
    }
  }}
/>

<button
  onclick={e => {
    e.preventDefault();
    isVisible = true;
  }}
  title={'Search electorates (keyboard shortcut: "?")'}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-search"
    viewBox="0 0 16 16"
  >
    <title>Search electorates (keyboard shortcut: "?")</title>
    <path
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
</button>

{#if isVisible}
  <Modal
    onClose={() => {
      isVisible = false;
    }}
  >
    <label
      >Electorate search:
      <Typeahead
        values={electorates.map(electorate => ({
          value: electorate.id,
          label: `${electorate.id} - ${electorate.name}`
        }))}
        onChange={([id]) => {
          $modal = {
            type: 'contextMenu',
            props: {
              electorate: electoratesByCode[id],
              allocation: $hashConfig.allocations[id],
              position: [window.innerWidth - 50, 0]
            }
          };
          isVisible = false;
        }}
      />
    </label>
  </Modal>
{/if}

<style lang="scss">
  label :global(input) {
    min-width: 320px;
  }
</style>
