import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';
import { mount } from 'svelte';
import ScrollytellerRoot from './components/ScrollytellerRoot/ScrollytellerRoot.svelte';

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
  mountThing(
    'electionsfederal2025google-doc-preview',
    () => import(/* webpackChunkName: "dynamic-builder" */ './builder/GoogleDocEntrypoint.svelte')
  );

  const MARKER_NAME = 'electionmap';
  const mounts = selectMounts(MARKER_NAME);
  mounts.forEach(appMountEl => {
    const id = appMountEl.id.match(/\d+$/)?.[0];
    if (mounts.length > 1 && !id) {
      console.error(`IDs must be specified when multiple mounts are used. E.g. #${MARKER_NAME}1`);
      return;
    }

    try {
      const scrollyConfig = loadScrollyteller(MARKER_NAME + (id || ''), 'u-full', 'mark');

      mount(ScrollytellerRoot, {
        target: scrollyConfig.mountNode,
        props: { panels: scrollyConfig.panels }
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
