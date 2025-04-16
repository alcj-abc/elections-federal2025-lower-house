<script lang="ts">
  /**
   * @file
   * Create an object in localStorage mapping old electorates to new ones.
   *
   * Use this in conjunction with _snippet-redistribute.js to rewrite appdata-hexconfig.json
   */
  import { electorates } from '../../../../lib/hashConfig/schema';
  let { electorate } = $props();
  function onChange(e) {
    const swapsies = JSON.parse(localStorage.swapsies || '{}');
    swapsies[electorate.id] = e.target.value;
    localStorage.swapsies = JSON.stringify(swapsies);
    return;
  }
  let redist = $derived.by(() => {
    const swapsies = JSON.parse(localStorage.swapsies || '{}');
    return swapsies?.[electorate.id] || electorate.id;
  });
</script>

<label>
  Redistribute:
  <select onchange={onChange} value={redist}>
    {#each [...electorates].sort((a, b) => a.name.localeCompare(b.name)) as electorate}
      <option value={electorate.id}>{electorate.id} - {electorate.name}</option>
    {/each}
  </select>
</label>
