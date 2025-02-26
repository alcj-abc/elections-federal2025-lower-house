import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';
import { mount } from 'svelte';
import ScrollytellerRoot from './components/ScrollytellerRoot/ScrollytellerRoot.svelte';
import { schema } from './builder/hashConfig';
import { decodeSchema } from 'hash-codec';

async function mountThing(id, AppFetcher) {
  const [appMountEl] = selectMounts(id);

  if (appMountEl) {
    const appProps = acto(getMountValue(appMountEl));

    const App = await AppFetcher();
    mount(App.default, {
      target: appMountEl,
      props: appProps
    });
  }
}

// Load the Odyssey app
whenOdysseyLoaded.then(() => {
  // mountThing('electionsfederal2025hex', App);
  mountThing(
    'electionsfederal2025builder',
    () => import(/* webpackChunkName: "dynamic-builder" */ './builder/Builder.svelte')
  );

  const MARKER_NAME = 'electionmap';
  const mounts = selectMounts(MARKER_NAME);
  console.log({ mounts });
  mounts.forEach(appMountEl => {
    const id = appMountEl.id.match(/\d+$/)?.[0];
    if (mounts.length > 1 && !id) {
      console.error(`IDs must be specified when multiple mounts are used. E.g. #${MARKER_NAME}1`);
      return;
    }

    try {
      const scrollyConfig = loadScrollyteller(MARKER_NAME + (id || ''), 'u-full', 'mark');
      const panels = Promise.all(
        scrollyConfig.panels.map(async panel => {
          const decodedData = await decodeSchema({ schema, data: panel.data });
          return {
            ...panel,
            panelClass: '',
            data: decodedData
          };
        })
      );
      panels.then(panels => {
        mount(ScrollytellerRoot, {
          target: scrollyConfig.mountNode,
          props: { panels }
        });
      });
    } catch (e) {
      const errorMessage = 'Unable to load interactive.';
      console.error(errorMessage, e);
      appMountEl.innerHTML = `<p style="border:1px solid red;padding:1rem;">${errorMessage}</p>`;
    }
  });
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[elections-federal2025-hex] public path: ${__webpack_public_path__}`);
}
