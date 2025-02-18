import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import type { Mount } from '@abcnews/mount-utils';
// import App from './components/App/App.svelte';
import { mount } from 'svelte';

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
    'electionsfederal2025iframe',
    () => import(/* webpackChunkName: "dynamic-iframe" */ './components/Iframe/Iframe.svelte')
  );
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[elections-federal2025-hex] public path: ${__webpack_public_path__}`);
}
