<script lang="ts">
  import {
    electorates,
    hashConfig,
    historical19,
    historical22,
    schema,
    groups,
    electoratesByCode
  } from '../../hashConfig';
  import situations from '../../../../data/appdata-situation.json';

  let localFocuses = $state<string[]>([]);

  const historicalByCode = Object.values(historical19).reduce((obj, electorate) => {
    obj[electorate.id] = electorate;
    return obj;
  }, {});

  // Bugwatch: accessing $hashConfig.focuses directly in the template throws
  // errors in other selects in the page. Don't know why, suspect a Svelte bug.
  $effect(() => {
    localFocuses = Object.entries($hashConfig.focuses)
      .filter(([code, focus]) => focus)
      .map(([code]) => code)
      .filter(Boolean);
  });

  /**
   * Shorthand method to set focuses, each electorate is passed to the function
   * to determine whether it matches
   */
  function setFocusesBy(fn, override = false) {
    $hashConfig.focuses = electorates.reduce((obj, electorate) => {
      let newValue = fn(electorate.code);
      if (override === false) {
        newValue = newValue || $hashConfig.focuses[electorate.code];
      }
      obj[electorate.code] = newValue;
      return obj;
    }, {});
  }

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
        focusCheck: code => situations[code] === situation.replace(' ', '_').toUpperCase()
      })),
      {
        name: 'Key seats',
        focusCheck: code => {
          return !!historicalByCode[code]?.isKeySeat;
        }
      },
      ...['Marginal', 'Safe', 'Very safe'].map(security => ({
        name: security,
        focusCheck: code => {
          return historicalByCode[code]?.security === security.replace(' ', '_').toUpperCase();
        }
      }))
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
    <span>Focuses <small>{Object.values($hashConfig.focuses).filter(Boolean).length} focused</small></span>
  </legend>

  <select
    name="focuses"
    multiple
    value={localFocuses}
    onchange={e => {
      $hashConfig.focuses = Array.from(e.currentTarget.options).reduce((obj, option) => {
        obj[String(option.value)] = option.selected;
        return obj;
      }, {});
    }}
  >
    {#each electorates as electorate}
      <option value={electorate.code}>{electorate.code} - {electorate.name}</option>
    {/each}
  </select>
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
