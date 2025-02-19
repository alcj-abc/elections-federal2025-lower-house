<script lang="ts">
  let { name, values, value, onChange = () => {}, disabled } = $props();
  let localValues = $state<string[]>([]);

  // Bugwatch: accessing value directly in the template throws
  // errors in other selects in the page. Don't know why, suspect a Svelte bug.
  $effect(() => {
    localValues = Object.entries(value)
      .filter(([code, isSelected]) => isSelected)
      .map(([code]) => code)
      .filter(Boolean);
  });
</script>

<select
  multiple
  {name}
  {disabled}
  value={localValues}
  onchange={e => {
    onChange(
      Array.from(e.currentTarget.options).reduce((obj, option) => {
        obj[String(option.value)] = option.selected;
        return obj;
      }, {})
    );
  }}
>
  {#each values as thisValue}
    <option value={thisValue.value}>{thisValue.label}</option>
  {/each}
</select>
