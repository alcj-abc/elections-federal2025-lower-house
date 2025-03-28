<script lang="ts">
  import { debounce } from 'lodash-es';

  let { isInteractive = false, onClick, onHover, children } = $props();

  const debouncedOnHover = $derived.by(() => {
    return debounce(onHover, 60);
  });
</script>

{#if isInteractive}
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <div
    class="hex-map-interaction-handlers"
    onclick={({ target, clientX, clientY }) => {
      const code = (target as HTMLElement)?.dataset?.id;
      if (!code || !onClick) {
        return;
      }
      onClick({ code, clientX, clientY });
    }}
    onmouseover={e => {
      const target = e.target as HTMLElement;
      const { clientX, clientY } = e;
      const code = target.dataset.id;
      if (target.nodeName !== 'polygon' || !code) {
        return;
      }
      debouncedOnHover({ code, clientX, clientY });
    }}
    onmouseout={e => {
      debouncedOnHover({ code: null });
    }}
    onblur={e => {
      debouncedOnHover({ code: null });
    }}
  >
    {@render children?.()}
  </div>
{/if}

{#if !isInteractive}
  {@render children?.()}
{/if}
