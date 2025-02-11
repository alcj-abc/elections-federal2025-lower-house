import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import type { Mount } from '@abcnews/mount-utils';
// import App from './components/App/App.svelte';
import { mount } from 'svelte';
import Builder from './builder/Builder.svelte';

let appMountEl: Mount;
let appProps;

function mountThing(id, App) {
  [appMountEl] = selectMounts(id);

  if (appMountEl) {
    appProps = acto(getMountValue(appMountEl));

    mount(App, {
      target: appMountEl,
      props: appProps
    });
  }
}

// Load the Odyssey app
whenOdysseyLoaded.then(() => {
  // mountThing('electionsfederal2025hex', App);
  mountThing('electionsfederal2025builder', Builder);
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[elections-federal2025-hex] public path: ${__webpack_public_path__}`);
}
