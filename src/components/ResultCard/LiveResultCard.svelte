<script lang="ts">
  import { onMount } from 'svelte';
  import { getLiveData } from '../../liveData';
  import ResultCard from './ResultCard.svelte';
  import { getGainRetain } from './util';
  let { id } = $props();

  let results = $state({ data: { electorates: [] } });

  onMount(() => {
    getLiveData({ cache: true }).then(data => {
      results = data;
    });
  });

  let electorate = $derived.by(() => results.data.electorates.find(({ code }) => code === id) as any);

  let cardProps = $derived.by(() => {
    if (!electorate) {
      return null;
    }

    const gainRetain = getGainRetain(electorate);

    return {
      name: electorate.name,
      state: electorate.state,
      counted: electorate.counted,
      updated: new Date(electorate.updated),
      isCalled: false && electorate.isCalled,
      label: {
        label: gainRetain.label,
        id: gainRetain.id
      },
      candidates: electorate.swingDial?.map(candidate => ({
        id: candidate.party.code,
        party: candidate.party.name,
        candidate: candidate.name,
        percent: candidate.predicted2CP?.pct
      }))
    };
  });
</script>

{#if cardProps}
  <ResultCard {...cardProps} />
{/if}
