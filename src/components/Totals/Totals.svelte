<script lang="ts">
  import hashPattern from '../../../public/Hash-four@2x.png';
  import AccesibleHide from '../AccessibleHide/AccesibleHide.svelte';
  import partiesConfig from '../../../data/parties.json';

  let { allocations, certainties, showTotals } = $props();

  /** Width of the chart. Used to caculate whether the totals text will fit inside or outside*/
  let chartWidth = $state(0);

  /**
   * Normalise parties into two party + other
   */
  function normalisePartyCodes(code) {
    if (partiesConfig.synonyms[code]) {
      return partiesConfig.synonyms[code];
    }
    return code ? 'OTH' : null;
  }

  /**
   * Party totals, split into 2 party + other.
   */
  let resultTotals = $derived.by(() => {
    const _allocations = allocations;
    const _certainties = certainties;
    const allocatedTotals = {
      ALP: {
        certain: 0,
        likely: 0,
        total: 0
      },
      LNP: {
        certain: 0,
        likely: 0,
        total: 0
      },
      OTH: {
        certain: 0,
        likely: 0,
        total: 0
      }
    };
    Object.keys(_allocations).forEach(electorateCode => {
      const allocation = normalisePartyCodes(_allocations[electorateCode]);
      const isCertain = _certainties[electorateCode];
      if (!allocation) return;
      const pool = isCertain ? 'certain' : 'likely';
      allocatedTotals[allocation][pool] = allocatedTotals[allocation][pool] + 1;
      allocatedTotals[allocation].total += 1;
    });
    return allocatedTotals;
  });

  /** How wide is a seat (decimal percent) */
  let seatWidth = $derived.by(() => {
    const { ALP, LNP, OTH } = resultTotals;
    const maxCount = Math.max(partiesConfig.totals.barMax, ALP.total + 5, LNP.total + 5, OTH.total + 5);
    const seatWidth = 100 / maxCount;
    return seatWidth / 100;
  });

  /** Iterable array of the chart */
  let allocationsArray = $derived.by(() =>
    partiesConfig.totals.partyOrder.map(code => ({
      code,
      ...resultTotals[code],
      // Calculate whether the number should be shown inside or outside the bars
      isNumberOutside: seatWidth * resultTotals[code].total * (chartWidth - 40) < 24
    }))
  );
</script>

<div
  class="totals"
  style:--seatWidth={seatWidth}
  style:opacity={showTotals ? 1 : 0}
  style:pointer-events={showTotals ? undefined : 'none'}
  style:--hashPattern={`url("${hashPattern}")`}
>
  <div class="totals__win-marker">76 to win</div>
  <dl class="totals__chart" bind:clientWidth={chartWidth}>
    {#each allocationsArray as party}
      <dt class="totals__party">{party.code}</dt>
      <dd
        class={`totals__bar totals__bar--${party.code.toLowerCase()}`}
        style:--seatCount={party.isNumberOutside ? party.total : party.certain || party.likely}
      >
        <div class="totals__count" class:totals__count--outside={party.isNumberOutside}>
          {party.certain}
          <AccesibleHide>
            seats won
            {#if party.likely}
              (plut {party.likely} likely)
            {/if}
          </AccesibleHide>
        </div>
        <div class="totals__inner totals__won" style:--seatCount={party.certain}></div>
        <div class="totals__inner totals__likely" style:--seatCount={party.likely}></div>
      </dd>
    {/each}
  </dl>
</div>

<style lang="scss">
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
    display: block;
  }
  .totals {
    position: relative;
    padding-bottom: 0.23rem;
    --labelWidth: 2.5rem;
    --barHeight: 1.22917rem;
    --gap: 0.38rem;
    line-height: var(--barHeight);
    margin-right: 20px;
    transition: opacity 0.5s;
    :global(*) {
      box-sizing: border-box;
    }
  }
  .totals__win-marker {
    text-align: right;
    font-family: ABCSans;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    margin-bottom: 0.38rem;
    height: 1.0625rem;
    line-height: 1;
  }

  // 76 seats marker
  .totals__win-marker::after {
    display: block;
    content: '';
    width: 1px;
    height: calc(100% - 1.0625em);
    border-left: 1px dashed #525252;
    position: absolute;
    --barWidth: calc(100% - var(--labelWidth));
    --actualSeatWidth: calc(var(--barWidth) * var(--seatWidth));
    left: calc(var(--labelWidth) + var(--actualSeatWidth) * 76);
    top: 1.0625em;
    z-index: 2;
  }
  .totals__chart {
    display: grid;
    grid-template-columns: var(--labelWidth) auto;
    gap: var(--gap) 0;
  }
  .totals__party {
    font-family: ABCSans;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
  .totals__count {
    position: absolute;
    width: calc(100% * var(--seatWidth) * min(76, var(--seatCount)));
    color: #fff;
    text-align: right;
    font-family: ABCSans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    padding: 0 0.5rem 0 0.4rem;
    transition: all 0.5s;
  }
  .totals__count--outside {
    margin-left: calc(100% * var(--seatWidth) * min(76, var(--seatCount)));
    color: var(--c-black);
  }
  .totals__bar {
    border-radius: 4px;
    overflow: hidden;
    background: #f1f1f1;
    font-family: ABCSans;
    font-weight: 700;
    font-size: 16px;
    text-align: right;
    position: relative;
    display: flex;
    height: bar(--barHeight);
  }

  .totals__inner {
    height: 100%;
    width: calc(100% * var(--seatWidth) * var(--seatCount));
    transition: all 0.5s;
  }

  .totals__bar--alp {
    .totals__won {
      background-color: var(--a-ALP);
    }
    .totals__likely {
      background-color: var(--a-ALP);
    }
  }
  .totals__bar--lnp {
    .totals__won {
      background-color: var(--a-LNP);
    }
    .totals__likely {
      background-color: var(--a-LNP);
    }
  }
  .totals__bar--oth {
    .totals__won {
      background-color: var(--a-OTH);
    }
    .totals__likely {
      background-color: var(--a-OTH);
    }
  }
  .totals__likely {
    background-image: var(--hashPattern);
    background-size: 11px;
  }

  // tablet
  @media (min-width: 46.5rem) {
    .totals {
      margin: 0 auto;
      --barHeight: 1.47917rem;
      --gap: 0.625rem;
    }
  }
  // large tablet
  @media (min-width: 62rem) and (orientation: portrait) {
    .totals {
      --barHeight: 2rem;
    }
  }
  // desktop
  @media (min-width: 75rem) and (orientation: landscape) {
    .totals {
      --barHeight: 1.6875rem;
    }
  }
  // large desktop
  @media (min-width: 90rem) {
    .totals {
      --barHeight: 2.1875rem;
    }
  }
</style>
