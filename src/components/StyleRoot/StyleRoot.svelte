<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import parties from '../../../data/parties.json';
  import { partyColours } from './store';

  let { children, rootEl = $bindable() } = $props();

  onMount(() => {
    if (!rootEl) {
      return;
    }
    const styles = window.getComputedStyle(rootEl);
    $partyColours = {};
    const partyCodes = Object.keys(parties.hashCodes);
    partyCodes.forEach(partyCode => {
      $partyColours[partyCode] = styles.getPropertyValue(`--a-${partyCode}`);
    });
  });
</script>

<div class="style-root" bind:this={rootEl}>{@render children?.()}</div>

<style lang="scss">
  .style-root :global(*) {
    box-sizing: border-box;
  }
  .style-root {
    height: 100%;
    font-family: ABCSans, sans-serif;
    --c-black: #000;
    --c-grey: #989494;
    --c-lightgrey: #ddd;
    --c-white: #fff;

    --c-ptyaqua: #005d82;
    --c-ptyblack: #757575;
    --c-ptyblue: #0a52bf;
    --c-ptybrown: #804a40;
    --c-ptygold: #cc8500;
    --c-ptygreen: #007056;
    --c-ptylightblue: #00a1c7;
    --c-ptylightgreen: #51a802;
    --c-ptyorange: #e5660b;
    --c-ptypurple: #985eb5;
    --c-ptyred: #e11f30;
    --c-ptyteal: #0098a6;

    --c-supp-ptygold: #a36a00;
    --c-supp-ptylightgreen: #508423;
    --c-supp-ptylightblue: #0e81a0;
    --c-supp-ptyorange: #bd5800;
    --c-supp-ptyteal: #007e8a;

    --a-empty: #f1f1f1;
    --a-empty-border: black;

    --c-empty-state-outline: black;
    --c-state-outline: #949494;

    --a-null: #f1f1f1;
    --a-null-border: #fff;
    --a-Any: var(--c-white);
    --a-ALP: var(--c-ptyred);
    --a-CA: var(--c-ptyblack);
    --a-CLP: var(--c-ptygold);
    --a-GRN: var(--c-ptylightgreen);
    --a-IND: var(--c-ptyblack);
    --a-KAP: var(--c-ptybrown);
    --a-LIB: var(--c-ptyblue);
    --a-LNP: var(--c-ptyblue);
    --a-NAT: var(--c-ptygreen);
    --a-ONP: var(--c-ptyorange);
    --a-OTH: var(--c-ptyblack);
    --a-PUP: var(--c-ptygold);
    --a-Teal: var(--c-ptyteal);

    --c-filled-border: #fff;
  }
</style>
