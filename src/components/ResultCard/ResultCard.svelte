<script lang="ts">
  import ResultCardBar from './ResultCardBar.svelte';
  const { formatDistance } = require('date-fns');
  let {
    name,
    state,
    counted,
    updated = new Date(),
    isCalled,
    label = { label: 'TOO EARLY', id: '' },
    candidates = []
  } = $props();
</script>

<aside class="result-card">
  <div class="result-card__top">
    <h3 class="result-card__electorate">{name}</h3>
    <div class="result-card__state">{state}</div>
    <div
      class="result-card__prediction result-allocation"
      class:result-card__prediction--called={isCalled}
      data-allocation={label.id}
    >
      {label.label}
    </div>
  </div>

  {#if isCalled}
    <div class="result__status">{counted}% turnout, final figures</div>
    <div class="result__projection-disclaimer">Final count</div>
  {:else}
    <div class="result__status">{counted}% counted, {formatDistance(updated, new Date())} ago</div>

    <div class="result__projection-disclaimer">Projection based on preference estimate</div>
  {/if}

  {#if candidates}
    <div class="result__bar">
      <ResultCardBar {candidates} />
    </div>
    <div class="result__candidates">
      {#each candidates as { percent, party, candidate, id }}
        <div class="result__candidate">
          <div class="result__percentage">{percent}%</div>
          <div class="result__party result-allocation" data-allocation={id}>{party}</div>
          <div class="result__candidate-name">{candidate}</div>
        </div>
      {/each}
    </div>
  {/if}
</aside>

<style lang="scss">
  .result-card {
    display: flex;
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.25rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--Background-background-base, #fff);
  }

  // Here be hacks: integrate with Scrollyteller card styling
  :global(.st-panel) {
    .result-card {
      // mobile view has blocks with borders. We should butt our cards upagainst these.
      border-radius: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-style: solid none;
      margin: 0 -1rem 0;
      padding: 0.75rem 2rem;
      background: transparent;

      // smol tablet
      @media (min-width: 46.5rem) {
        margin: 0 -2rem 0;
        padding: 0.75rem 3rem;
      }

      // large tablet
      @media (min-width: 62rem) {
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: var(--Background-background-base, #fff);
        margin: 0 0 0;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
      }
    }

    & > :global(div[id*='electionresults']) {
      margin-bottom: 1rem;
      & + :global(div[id*='electionresults']) .result-card {
        border-top-style: none;
        margin-top: -1rem;

        @media (min-width: 62rem) {
          border-top-style: solid;
          margin-top: -1.35rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }
      }
    }

    & > :global(div[id*='electionresults']:last-child) .result-card {
      border-bottom-style: none;
      @media (min-width: 62rem) {
        border-bottom-style: solid;
      }
    }
  }
  .result-card__top {
    display: flex;
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
    padding: 0;
    margin: 0;
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
    text-transform: uppercase;
  }
  .result-card__prediction {
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

  .result-card__prediction[data-allocation] {
    background: white;
    border: 1px solid var(--ptycolour);
    color: var(--ptycolour);
    &.result-card__prediction--called {
      border: none;
      background: var(--ptycolour);
      color: white;
    }
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
    text-align: left;
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
    color: var(--ptycolour);
  }
  .result__bar {
    margin-bottom: -2.7rem;
    margin-top: 2.7rem;
  }

  $parties: Any, ALP, CLP, GRN, IND, KAP, LIB, LNP, NAT, ONP, OTH, PUP, Teal, CA;
  @each $code in $parties {
    .result-allocation:global([data-allocation='#{""+$code}']) {
      --ptycolour: var(--a-#{$code});
    }
  }
</style>
