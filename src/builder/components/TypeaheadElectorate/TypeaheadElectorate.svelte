<script>
  /**
   * @file
   * A wrapper to make election-style {CODE: true/false} electorate values into
   * standard typeahead [CODE] values.
   *
   */
  import Typeahead from '../Typeahead/Typeahead.svelte';
  let { values, value = {}, onChange = () => {}, disabled } = $props();
</script>

<Typeahead
  {values}
  {disabled}
  value={Object.entries(value)
    .filter(([code, isFocused]) => isFocused)
    .map(([code]) => code)}
  onChange={arrayValue => {
    const newObj = { ...value };
    Object.keys(newObj).forEach(code => {
      newObj[code] = arrayValue.includes(code);
    });
    onChange(newObj);
  }}
/>
