<script>
  import Modal from '../Modal/Modal.svelte';
  import Circle from '../Circle/Circle.svelte';
  import { electorates, hashConfig } from '../../../lib/hashConfig';
  import { parseSpreadsheet, applyHashConfig } from './util';
  let { onClose = () => {} } = $props();

  let status = $state('editing');

  function generateTsv() {
    const rows = [...electorates]
      .sort()
      .map(electorate =>
        [
          electorate.name,
          $hashConfig.allocations[electorate.id] || 'None',
          $hashConfig.certainties[electorate.id],
          $hashConfig.focuses[electorate.id]
        ].join('\t')
      );

    return [['Name', 'Allocation', 'Certainty', 'Focus'].join('\t'), ...rows].join('\n');
  }

  let tsv = $state(generateTsv());

  /**
   * Tidy up the CSV, if you copy rows from a spreadsheet you get a bunch of
   * blank ones on the end
   */
  $effect(() => {
    const newTsv = tsv.trim();
    if (tsv !== newTsv) {
      tsv = newTsv;
    }
  });

  let rows = $derived.by(() => parseSpreadsheet(tsv));

  let badRows = $derived.by(() => {
    return rows.filter(row => !row.isOk).length;
  });

  function onApply() {
    $hashConfig = applyHashConfig(rows, $hashConfig);
    onClose();
  }
</script>

{#snippet footerChildren()}
  {#if status === 'editing'}
    <button
      onclick={() => {
        status = 'previewing';
      }}
      disabled={rows.length == 0}>Continue to preview</button
    >
  {/if}
  {#if status === 'previewing'}
    {#if badRows}<small>{badRows} rows will be skipped</small>{/if}
    <button
      onclick={() => {
        status = 'editing';
      }}>Back</button
    >
    <button onclick={onApply} disabled={rows.length == 0}>Apply changes</button>
  {/if}
{/snippet}

<Modal title="Spreadsheet import" {onClose} {footerChildren}>
  {#if status === 'editing'}
    <p>Copy or paste spreadsheet rows below to import them.</p>
    <textarea bind:value={tsv} placeholder={['ADEL  Labor true true', 'ASTO Coalition false false'].join('\n')}
    ></textarea>
  {/if}
  {#if status === 'previewing'}
    <table>
      <thead>
        <tr>
          <th>Electorate</th>
          <th class="centre">Allocation</th>
          <th class="centre">Certainty</th>
          <th class="centre">Focus</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as row}
          <tr class:badrow={!row.isOk}>
            <td>
              {#if row.matchedElectorate}
                ✅ {row.matchedElectorate.name}
              {:else}
                ❌ {row.electorate} - no match
              {/if}
            </td>
            <td class="centre">
              <div class="input">
                “{row.allocation}”
                <br />
                <strong>↓</strong>
              </div>
              <br />
              {#if row.matchedAllocation}
                <Circle allocation={row.matchedAllocation} /> {row.matchedAllocation}
              {:else}
                ❌ no match
              {/if}
            </td>
            <td class="centre">
              <div class="input">
                “{row.certainty}”
                <br />
                <strong>↓</strong>
              </div>
              <br />
              {row.matchedCertainty ? 'Is certain' : 'Not certain'}
            </td>
            <td class="centre">
              <div class="input">
                “{row.focus}”
                <br />
                <strong>↓</strong>
              </div>
              <br />
              {row.matchedFocus ? 'Focused' : 'Not focused'}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</Modal>

<style lang="scss">
  table {
    border-collapse: collapse;
  }
  tr > td:first-child,
  tr > th:first-child {
    padding-left: 0.5rem;
  }
  tr > td:last-child,
  tr > th:last-child {
    padding-right: 0.5rem;
  }
  tbody tr:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
  .centre {
    text-align: center;
  }

  .input {
    display: inline;
    color: var(--border);
  }
  textarea {
    width: 30rem;
    height: 12rem;
    tab-size: 10em;
  }
  tbody tr.badrow {
    outline: 1px solid red;
    background: #ff00000d;
  }
  td,
  th {
    vertical-align: top;
  }
</style>
