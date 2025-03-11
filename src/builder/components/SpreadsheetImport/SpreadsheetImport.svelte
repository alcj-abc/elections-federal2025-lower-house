<script>
  import Modal from '../Modal/Modal.svelte';
  import parties from '../../../../data/parties.json';
  import Circle from '../Circle/Circle.svelte';
  import { electorates, hashConfig } from '../../../lib/hashConfig.ts';
  let { onClose = () => {} } = $props();

  let status = $state('editing');

  function generateCsv() {
    const rows = electorates
      .toSorted()
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

  let csv = $state(generateCsv());

  /** Match electorate name to electorate */
  function matchElectorate(electorateName = '') {
    const sanitisedElectorateName = electorateName.trim().toLowerCase();
    return electorates.find(electorate => {
      return electorate.name.toLowerCase() === sanitisedElectorateName;
    });
  }

  /** Sanitise allocations */
  function matchAllocation(allocationName = '') {
    const sanitisedAllocationName = allocationName.trim().toLowerCase();

    // Keyword match
    const matches = [
      {
        keywords: ['labor', 'alp'],
        code: 'ALP'
      },
      {
        keywords: ['lnp', 'clp', 'nat', 'lib', 'coalition', 'national'],
        code: 'LNP'
      },
      {
        keywords: ['grn', 'green'],
        code: 'GRN'
      },

      // matches on party codes like 'onp', 'ind'(ependent), 'oth'(er)
      ...Object.keys(parties.hashCodes).map(code => ({
        keywords: [code.toLowerCase()],
        code
      }))
    ];

    const matched = matches.find(match => match.keywords.some(keyword => sanitisedAllocationName.includes(keyword)));

    if (!matched) {
      return null;
    }

    return matched.code;
  }

  /**
   * Tidy up the CSV, if you copy rows from a spreadsheet you get a bunch of
   * blank ones on the end
   */
  $effect(() => {
    const newCsv = csv.trim();
    if (csv !== newCsv) {
      csv = newCsv;
    }
  });

  let rows = $derived.by(() => {
    const cells = csv
      .split('\n')
      .filter(Boolean)
      .map(rows => {
        const [electorate, allocation, certainty = 'unset', focus = 'unset'] = rows.split('\t');
        const matchedElectorate = matchElectorate(electorate);
        const matchedAllocation = matchAllocation(allocation);
        if (electorate === 'Name') {
          return null;
        }
        return {
          electorate,
          allocation,
          certainty,
          matchedCertainty: certainty.toLowerCase() === 'true',
          focus,
          matchedFocus: focus.toLowerCase() === 'true',
          matchedElectorate,
          matchedAllocation,
          isOk: matchedElectorate && matchedAllocation
        };
      })
      .filter(row => row?.electorate);

    const hasFocuses = cells.some(cell => cell.matchedFocus);
    const hasCertainties = cells.some(cell => cell.matchedCertainty);

    return cells.map(cell => ({
      ...cell,
      matchedFocus: hasFocuses ? cell.matchedFocus : null,
      matchedCertainty: hasCertainties ? cell.matchedCertainty : true
    }));
  });

  let badRows = $derived.by(() => {
    return rows.filter(row => !row.isOk).length;
  });

  function onApply() {
    const allocations = { ...$hashConfig.allocations };
    const focuses = { ...$hashConfig.focuses };
    const certainties = { ...$hashConfig.certainties };
    rows.forEach(({ isOk, matchedElectorate, matchedAllocation, matchedCertainty, matchedFocus }) => {
      if (!isOk || !matchedElectorate) {
        return;
      }
      const electorateId = matchedElectorate.id;
      allocations[electorateId] = (matchedAllocation === 'None' ? null : matchedAllocation) || null;
      certainties[electorateId] = matchedCertainty || null;
      focuses[electorateId] = matchedFocus || null;
    });

    $hashConfig = {
      ...$hashConfig,
      allocations,
      focuses,
      certainties
    };

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
    <textarea bind:value={csv} placeholder={['ADEL  Labor true true', 'ASTO Coalition false false'].join('\n')}
    ></textarea>
  {/if}
  {#if status === 'previewing'}
    <table>
      <thead>
        <tr>
          <th>Electorate</th>
          <th class="centre">Allocation</th>
          <th class="centre">Certainty</th>
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .centre {
    text-align: center;
  }

  .input {
    display: inline;
    color: var(--c-grey);
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
