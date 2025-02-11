<script lang="ts">
  import { onMount } from 'svelte';
  import { electorates, hashConfig, historical22, schema } from './hashConfig';
  import HexMap from '../components/HexMap/HexMap.svelte';
  import HexagonContextMenu from './components/HexagonContextMenu/HexagonContextMenu.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';

  const electorateData = historical22;

  let modal = $state<{
    electorate: any;
    allocation: string;
    position: [number, number];
  }>();

  function onMapClick({ srcElement, clientX, clientY }) {
    const code = srcElement.dataset.code;
    if (!code) {
      return;
    }
    const electorate = electorates.find(electorate => electorate.code === code);
    const allocation = $hashConfig.allocations[code];
    modal = {
      electorate,
      allocation,
      position: [clientX, clientY]
    };
  }
</script>

<StyleRoot>
  {#if $hashConfig}
    <div class="container">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="container-viz" onclick={onMapClick}>
        <HexMap layout={$hashConfig.layout} allocations={$hashConfig.allocations} />
      </div>

      {#if modal}
        <HexagonContextMenu
          {...modal}
          onClose={() => {
            console.log('onClose');
            modal = undefined;
          }}
        />
      {/if}

      <form>
        <div>
          <label>
            Layout
            <select
              bind:value={$hashConfig.layout}
              onchange={e => hashConfig.set({ ...$hashConfig, layout: e.target?.value })}
            >
              {#each schema.layout.values as item}
                <option>{item}</option>
              {/each}
            </select></label
          >
        </div>

        <div>
          <h2>Mix-ins</h2>
          <button
            onclick={e => {
              e.preventDefault();
              $hashConfig = {
                ...$hashConfig,
                allocations: electorateData.reduce((obj, electorate) => {
                  obj[electorate.id] = electorate.holder;
                  return obj;
                }, {})
              };
            }}>2019 results</button
          >
        </div>
      </form>
    </div>
  {/if}
</StyleRoot>

<style lang="scss">
  .container {
    display: flex;
  }
  .container-viz {
    flex: 1;
  }
  .container form {
    width: 480px;
  }
</style>
