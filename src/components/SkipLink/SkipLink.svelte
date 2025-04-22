<script lang="ts">
  let { id, target, children, position = 'topleft' } = $props();
  let anchor = $derived.by(() => `#${target}`);
</script>

<a
  {id}
  href={anchor}
  class={`skip-link--${position}`}
  onclick={e => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (!(element instanceof HTMLAnchorElement)) {
      return;
    }

    element.focus();
  }}
>
  {@render children?.()}
</a>

<style lang="scss">
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3rem;
    padding: 0.3rem 0.6rem 0.1rem;
    text-decoration: none;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    color: #fff;
    background-color: #0058cc;
    transition: opacity 0.2s;
    position: absolute;
  }
  a:focus {
    opacity: 1;
  }
  a:not(:focus) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    opacity: 0.1;
  }

  .skip-link--topleft {
    left: 1rem;
    top: 1rem;
  }
  .skip-link--bottomleft {
    left: 1rem;
    bottom: 1rem;
  }
</style>
