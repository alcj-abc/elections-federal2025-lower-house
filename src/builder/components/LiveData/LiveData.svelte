<script lang="ts">
  import { hashConfig } from '../../../lib/hashConfig/svelteStore';
  import { getLiveData, getMapAllocationsAndCertainty, liveDataName } from '../../../liveData';
  import { parseSpreadsheet } from '../SpreadsheetImport/util';
  import parties from '../../../../data/parties.json';

  async function fetchLiveData(e) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    target.disabled = true;
    target.dataset.loading = 'true';
    const finished = () => {
      target.disabled = false;
      delete target.dataset.loading;
    };
    const json = await getLiveData({ cache: false }).catch(e => {
      alert('Error loading data: ' + e.message);
      console.error(e);
    });

    finished();
    if (!json) {
      return null;
    }
    const newData = getMapAllocationsAndCertainty(json);
    // alert(
    //   [
    //     `Live (${liveDataName}) data loaded in to the map.`,
    //     json.meta.afterCount && 'Data is finished counting.',
    //     `Updated at: ${new Date(json.data.overall.updated).toLocaleString()} (local browser time)`
    //   ]
    //     .filter(Boolean)
    //     .join('\n')
    // );
    return newData;
  }
</script>

<button
  onclick={e => {
    fetchLiveData(e).then(newData => {
      $hashConfig = { ...$hashConfig, ...newData };
    });
  }}
>
  {liveDataName} (Live)
</button>
<button
  onclick={async e => {
    const liveData = await fetchLiveData(e);
    const previousYear = await fetch('./data/2022-redist.tsv', { cache: 'force-cache' })
      .then(res => res.text())
      .then(parseSpreadsheet);
    const changing = previousYear.reduce((obj, { matchedElectorate, matchedAllocation }) => {
      const id = matchedElectorate.id;
      const oldAllocation = parties.synonyms[matchedAllocation] || matchedAllocation;
      const newAllocationRaw = liveData.allocations[id];
      const newAllocation = parties.synonyms[newAllocationRaw] || newAllocationRaw;
      obj[id] = oldAllocation === newAllocation ? null : newAllocation;
      return obj;
    }, {});

    $hashConfig = { ...$hashConfig, allocations: changing };
  }}
>
  {liveDataName} (Changing)
</button>

<style lang="scss">
</style>
