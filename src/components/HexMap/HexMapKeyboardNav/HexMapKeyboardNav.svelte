<script lang="ts">
  import AccessibleHide from '../../AccessibleHide/AccesibleHide.svelte';
  let { groups, onChange, onClick } = $props();
  let focused = $state(null);
  function onFocus(e) {
    focused = e.target.dataset.id;
  }
  function onClickProxy(e) {
    const id = e.target.dataset.id;
    // TODO: do we need clientX and clientY
    // const hex = groups.flatMap(group => group.hexes).find(hex => hex.id === id);

    onClick?.({
      code: id,
      clientX: null,
      clientY: null
    });
  }
  function onBlur(e) {
    if (focused === e.target.dataset.id) {
      focused = null;
    }
  }
  $effect(() => {
    onChange?.(focused);
  });

  let sortedGroups = $derived.by(() =>
    groups.map(group => ({
      ...group,
      hexes: [...group.hexes].sort((a, b) => a.coord[0] + a.coord[1] * 1000 - (b.coord[0] + b.coord[1] * 1000))
    }))
  );
</script>

<AccessibleHide>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <ul class="hexmapkeyboardnav" onclick={onClickProxy} onfocusin={onFocus} onfocusout={onBlur}>
    {#each sortedGroups as group}
      <li>
        {group.name}
        <ul>
          {#each group.hexes as hex}
            <li>
              <button data-id={hex.id}>{hex.name}</button>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</AccessibleHide>

<style lang="scss">
  .hexmapkeyboardnav {
    max-height: 300px;
    overflow: auto;
  }
</style>
