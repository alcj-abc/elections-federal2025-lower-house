<script lang="ts">
  let { children } = $props();
</script>

<span class="accessible-hide">{@render children?.()}</span>

<style lang="scss">
  .accessible-hide {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
