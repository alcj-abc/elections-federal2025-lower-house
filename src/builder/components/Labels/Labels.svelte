<script lang="ts">
  import { hashConfig, electorates, defaultNullElectorates } from '../../../lib/hashConfig';
  import { isDraggingEnabled } from '../LabelDragger/utils';
  import TypeaheadElectorate from '../TypeaheadElectorate/TypeaheadElectorate.svelte';
</script>

<fieldset>
  <legend>
    <button
      class="btn-icon"
      title="Clear focuses"
      disabled={$hashConfig.labelsToShow === 0}
      onclick={e => {
        e.preventDefault();
        $hashConfig.labelsToShow = defaultNullElectorates;
        $hashConfig.showElectorateLabels = false;
        $hashConfig.showFocusedElectorateLabels = false;
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

    Electorate labels
    <small>{Object.values($hashConfig.labelsToShow).filter(Boolean).length} shown</small>
  </legend>

  <TypeaheadElectorate
    disabled={$hashConfig.showElectorateLabels || $hashConfig.showFocusedElectorateLabels}
    values={electorates.map(electorate => ({
      value: electorate.id,
      label: `${electorate.id} - ${electorate.name}`
    }))}
    value={$hashConfig.labelsToShow}
    onChange={newValues => {
      $hashConfig.labelsToShow = newValues;
    }}
  />
  <label>
    {#if $hashConfig.vizType === 'geo'}
      <input type="checkbox" disabled />
    {:else}
      <input type="checkbox" bind:checked={$hashConfig.showStateLabels} />
    {/if}
    Show state labels
  </label>
  <label>
    <input
      type="checkbox"
      bind:checked={$hashConfig.showElectorateLabels}
      onchange={() => {
        $hashConfig.labelsToShow = defaultNullElectorates;
      }}
    />
    Label all electorates
  </label>
  <label>
    <input
      type="checkbox"
      bind:checked={$hashConfig.showFocusedElectorateLabels}
      onchange={() => {
        $hashConfig.labelsToShow = defaultNullElectorates;
      }}
    />
    Label focused electorates
  </label>
  {#if $hashConfig.vizType === 'hex' && $hashConfig.showStateLabels}
    <hr />
    <label>
      <input type="checkbox" bind:checked={$isDraggingEnabled} />
      Dev: Enable dragging labels
    </label>
  {/if}
</fieldset>
