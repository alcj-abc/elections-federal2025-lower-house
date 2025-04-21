<script lang="ts">
  import ResultCardBar from './ResultCardBar.svelte';
  const values = {
    name: 'Adelaide',
    state: 'SA',
    countPct: 26,
    updated: new Date(Date.now() - 1000 * 60 * 2),
    label: {
      type: 'TOO EARLY',
      party: ''
    },
    candidates: [
      {
        id: 'ALP',
        party: 'Labor Party',
        candidate: 'Catherine King',
        percent: 50.9
      },
      {
        id: 'LIB',
        party: 'Liberal Party',
        candidate: 'Tim Vo',
        percent: 49.1
      }
    ]
  };
</script>

<aside class="result-card">
  <div class="result-card__top">
    <div class="result-card__electorate">{values.name}</div>
    <div class="result-card__state">{values.state}</div>
    <div class={`result-card__party-tag result-card__party-tag--${values.label.type.replace(/\s/g, '')}`}>
      {values.label.party}
      {values.label.type}
    </div>
  </div>
  <div class="result__status">{values.countPct}% counted, updated 2m ago</div>
  <div class="result__projection-disclaimer">Projection based on preference estimate</div>

  <div class="result__bar">
    <ResultCardBar candidates={values.candidates} />
  </div>
  <div class="result__candidates">
    {#each values.candidates as { percent, party, candidate }}
      <div class="result__candidate">
        <div class="result__percentage">{percent}%</div>
        <div class="result__party">{party}</div>
        <div class="result__candidate">{candidate}</div>
      </div>
    {/each}
  </div>
</aside>

<style lang="scss">
  .result-card {
    display: flex;
    width: 21.5rem;
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.25rem;
    border-radius: 0.5rem;
    border: 1px solid var(--Border-border-transparent-low, rgba(0, 0, 0, 0.1));
    background: var(--Background-background-base, #fff);
  }
  .result-card__top {
    display: flex;
    width: 19.5rem;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.38rem;
  }
  .result-card__electorate {
    color: var(--Text-text-primary, #000);

    /* Heading Bold/xs */
    font-family: 'ABC Sans Nova';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.40625rem */
  }
  .result-card__state {
    color: var(--Text-text-secondary, #60646c);

    /* Text Bold/xs */
    font-family: 'ABC Sans Nova';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 1.0125rem */
    flex: 1;
  }
  .result-card__party-tag {
    display: flex;
    width: 5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--Background-surface-utility, #f1f2f3);
    text-transform: uppercase;
    color: var(--Text-text-secondary, #60646c);
    font-family: ABCSans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem; /* 200% */
  }
  .result__status {
    flex: 1 0 0;
    color: var(--Text-text-secondary, #60646c);

    /* Text Regular/xs */
    font-family: 'ABC Sans Nova';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
  }
  .result__projection-disclaimer {
    color: var(--Text-text-primary, #000);

    /* Text Bold/sm */
    font-family: 'ABC Sans Nova';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 1.18125rem */
  }

  .result__candidates {
    display: flex;
  }

  .result__candidate {
    color: var(--Text-text-primary, #000);

    /* Heading Bold/xxs */
    font-family: 'ABC Sans Nova';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.25rem */
  }

  .result__candidate:last-child {
    flex: 1;
    text-align: right;
  }

  .result__percentage {
    margin-bottom: 1.75rem;
  }
  .result__party {
    /* Text Bold/xs */
    font-family: 'ABC Sans Nova';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 1.0125rem */
  }
  .result__candidate {
    /* Text Bold/sm */
    font-family: 'ABC Sans Nova';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 1.18125rem */
  }
  .result__bar {
    margin-bottom: -2.7rem;
    margin-top: 2.7rem;
  }
</style>
