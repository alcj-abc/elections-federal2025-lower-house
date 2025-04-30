<script lang="ts">
  import { links } from './store';

  let { id, target, children, position = 'topleft' } = $props();
  let rootEl = $state();
  $effect(() => {
    $links[id] = rootEl;
  });
</script>

<a
  {id}
  bind:this={rootEl}
  href={`#${target}`}
  class={`skip-link--${position}`}
  onclick={e => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const targetId = target.href.split('#')[1];
    $links[targetId]?.focus();
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
