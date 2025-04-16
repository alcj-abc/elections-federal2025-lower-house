<script lang="ts">
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';

  let { Component, ...props } = $props();
</script>

<StyleRoot />
<Component {...props} />
