<script lang="ts">
  import { electorates, groups, electoratesByCode } from '../../../lib/hashConfig/schema';
  import TypeaheadElectorate from '../TypeaheadElectorate/TypeaheadElectorate.svelte';
  import { matchElectorate, parseTsv } from '../SpreadsheetImport/util';
  import { hashConfig } from '../../../lib/hashConfig/svelteStore';

  // const historicalByCode = Object.values(historical19).reduce((obj, electorate) => {
  //   obj[electorate.id] = electorate;
  //   return obj;
  // }, {});

  /**
   * Shorthand method to set focuses, each electorate is passed to the function
   * to determine whether it matches
   */
  function setFocusesBy(fn, override = false) {
    $hashConfig.focuses = electorates.reduce((obj, electorate) => {
      let newValue = fn(electorate.id);
      if (override === false) {
        newValue = newValue || $hashConfig.focuses[electorate.id];
      }
      obj[electorate.id] = newValue;
      return obj;
    }, {});
  }

  // Load demographics from tsv.
  let demographics = $state({});
  $effect(() => {
    fetch('./data/demographics.tsv', { cache: 'force-cache' })
      .then(res => res.text())
      .then(tsv => {
        // remove the comments before the --- line
        const sanitisedTsv = tsv.replace(/^(.*?)---/s, '');
        demographics = parseTsv(sanitisedTsv).reduce((obj, [electorateName = '', demographic = '']) => {
          obj[matchElectorate(electorateName)?.id || 'eeee'] = demographic;
          return obj;
        }, {});
      });
  });

  // Load safeties from tsv.
  let safety = $state({});
  $effect(() => {
    fetch('./data/safety.tsv', { cache: 'force-cache' })
      .then(res => res.text())
      .then(tsv => {
        // remove the comments before the --- line
        const sanitisedTsv = tsv.replace(/^(.*?)---/s, '');
        safety = parseTsv(sanitisedTsv).reduce((obj, [electorateName = '', electorateSafety = '']) => {
          obj[matchElectorate(electorateName)?.id || 'eeee'] = electorateSafety;
          return obj;
        }, {});
      });
  });

  /**
   * Buttons to show in the builder. Each item in the array is a button with a
   * name and onClick function.
   */
  let focusButtons = $derived.by(() => {
    return [
      ...groups.map(group => ({
        name: group.name,
        focusCheck: code => electoratesByCode[code].group === group.name
      })),
      ...['Outer metro', 'Inner metro', 'Rural', 'Regional'].map(situation => ({
        name: situation,
        focusCheck: code => demographics[code] === situation
      })),
      ...['Marginal', 'Safe', 'Very safe'].map(electorateSafety => ({
        name: electorateSafety,
        focusCheck: code => {
          return safety[code] === electorateSafety;
        }
      }))
      // {
      //   name: 'Key seats',
      //   focusCheck: code => {
      //     return !!historicalByCode[code]?.isKeySeat;
      //   }
      // },
      // ...['Marginal', 'Safe', 'Very safe'].map(security => ({
      //   name: security,
      //   focusCheck: code => {
      //     return historicalByCode[code]?.security === security.replace(' ', '_').toUpperCase();
      //   }
      // }))
    ];
  });
</script>

<fieldset>
  <legend>
    <button
      class="btn-icon"
      title="Clear focuses"
      onclick={e => {
        e.preventDefault();
        setFocusesBy(() => false, true);
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
        <title>Clear focuses</title>
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
        />
        <path
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
        />
      </svg>
    </button>
    <button
      class="btn-icon"
      title="Hyperfocus"
      onclick={e => {
        e.preventDefault();
        Object.entries($hashConfig.focuses).map(([id, isFocused]) => {
          if (!isFocused) {
            $hashConfig.allocations[id] = null;
          }
          $hashConfig.focuses[id] = false;
        });
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
        <title>Hyperfocus</title>
        <path
          d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"
        />
      </svg>
    </button>
    <span>Focuses <small>{Object.values($hashConfig.focuses).filter(Boolean).length} focused</small></span>
  </legend>

  <TypeaheadElectorate
    values={electorates.map(electorate => ({
      value: electorate.id,
      label: `${electorate.id} - ${electorate.name}`
    }))}
    value={$hashConfig.focuses}
    onChange={newFocuses => {
      $hashConfig.focuses = newFocuses;
    }}
  />

  <div class="buttons">
    {#each focusButtons as button}
      <button
        disabled={Object.entries($hashConfig.focuses).every(([code, value]) => {
          const shouldBeFocused = button.focusCheck(code);
          return shouldBeFocused ? shouldBeFocused === !!value : true;
        })}
        onclick={e => {
          e.preventDefault();
          setFocusesBy(button.focusCheck);
        }}
      >
        {button.name}
      </button>
    {/each}
  </div>
</fieldset>
