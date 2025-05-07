<script>
  import { BuilderStyleRoot } from '@abcnews/components-builder';
  import { GoogleDocScrollyteller } from '@abcnews/components-builder';
  import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';
  import ScrollytellerRoot from '../components/ScrollytellerRoot/ScrollytellerRoot.svelte';
</script>

<BuilderStyleRoot>
  <GoogleDocScrollyteller name="electionmap" {loadScrollyteller} {ScrollytellerRoot} />
</BuilderStyleRoot>
