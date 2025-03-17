<script lang="ts">
  let { children } = $props();
</script>

<div class="style-root">
  {@render children?.()}
</div>

<style lang="scss">
  .style-root {
    :global {
      fieldset {
        margin-bottom: 1rem;
        padding: var(--padding);
        border: 1px solid var(--c-grey);
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .fieldset {
        padding: 0 var(--padding);
        border: 1px solid transparent;
      }
      .fieldset,
      fieldset {
        --padding: 0.75rem;
        margin-bottom: 1rem;
        border-radius: 0.2rem;
        &.builder__spacious {
          --padding: 1rem;
          legend {
            font-weight: bold;
          }
        }
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
      }

      label {
        & > span {
          display: block;
          margin-bottom: 0.3rem;
        }
        margin-bottom: 0.5rem;
      }

      select,
      button,
      input {
        padding: 0.25rem 0.5rem;
        background: var(--c-white);
        border: 1px solid var(--c-grey);
        border-radius: 0.2rem;
      }
      select:not([multiple]),
      button:not(:disabled) {
        cursor: pointer;
        &:hover,
        &:focus-visible {
          border-color: var(--c-black);
          background: Highlight;
          color: HighlightText;
        }
      }

      select,
      input[type='text'] {
        width: 100%;
      }

      .btn-icon {
        padding: 0;
        display: inline-flex;
        height: 1.5rem;
        width: 1.5rem;
        justify-content: center;
        align-items: center;
      }

      .builder__submit-row {
        text-align: right;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.5rem 0;
      }
      hr {
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--c-empty-border, rgba(136, 136, 136, 0.5333333333));
      }
    }
  }
</style>
