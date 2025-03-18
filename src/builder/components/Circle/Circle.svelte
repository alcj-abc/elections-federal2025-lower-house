<script lang="ts">
  let { allocation } = $props();
</script>

<div class="circle" data-allocation={allocation} style:background={`var(--a-${allocation})`}></div>

<style lang="scss">
  .circle {
    display: inline-block;
    margin-right: 0.5em;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
  }
  .circle[data-allocation='None'] {
    border: 1px solid var(--border);
  }
</style>
