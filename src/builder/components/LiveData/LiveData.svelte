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
    fetchLiveData(e).then(({ allocations, certainties }) => {
      $hashConfig = { ...$hashConfig, allocations, certainties };
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

    const newAllocations = {};
    const newCertainties = {};
    previousYear.forEach(({ matchedElectorate, matchedAllocation }) => {
      const id = matchedElectorate.id;
      const oldAllocation = parties.synonyms[matchedAllocation] || matchedAllocation;
      const newAllocationRaw = liveData.allocations[id];
      const newAllocation = parties.synonyms[newAllocationRaw] || newAllocationRaw;
      const isChanging = oldAllocation !== newAllocation;
      if (!isChanging) {
        newAllocations[id] = null;
        newCertainties[id] = true;
        return;
      }
      newAllocations[id] = newAllocation;
      newCertainties[id] = liveData.certainties[id];
    });

    $hashConfig = { ...$hashConfig, allocations: newAllocations, certainties: newCertainties };
  }}
>
  {liveDataName} (Changing)
</button>
<button
  onclick={e => {
    fetchLiveData(e).then(newData => {
      const newAllocations = {};
      const newCertainties = {};
      Object.keys(newData.allocations).forEach(id => {
        const isDoubtful = newData.isDoubtful[id];
        if (isDoubtful) {
          newAllocations[id] = newData.allocations[id];
          newCertainties[id] = newData.certainties[id];
        } else {
          newAllocations[id] = null;
          newCertainties[id] = true;
        }
      });
      $hashConfig = { ...$hashConfig, allocations: newAllocations, certainties: newCertainties };
    });
  }}
>
  {liveDataName} (In doubt)
</button>

<style lang="scss">
</style>
