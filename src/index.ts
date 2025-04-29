import acto, { parse } from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';
import { mount } from 'svelte';
import ScrollytellerRoot from './components/ScrollytellerRoot/ScrollytellerRoot.svelte';
import { schema } from './lib/hashConfig/schema';
import { decodeSchema } from 'hash-codec';
import InlineGraphics from './components/InlineGraphics/InlineGraphics.svelte';
import App from './components/App/App.svelte';
import LiveResultCard from './components/ResultCard/LiveResultCard.svelte';

async function mountThing(id, AppFetcher) {
  const [appMountNode] = selectMounts(id);

  if (appMountNode) {
    const appProps = acto(getMountValue(appMountNode));

    const FetchedApp = await AppFetcher();
    mount(App, {
      target: appMountNode,
      props: { ...appProps, Component: FetchedApp.default }
    });
  }
}
function mountScrollyteller() {
  const MARKER_NAME = 'electionmap';
  const mounts = selectMounts(MARKER_NAME);
  mounts.forEach(appMountNode => {
    const id = appMountNode.id.match(/\d+$/)?.[0];
    if (mounts.length > 1 && !id) {
      console.error(`IDs must be specified when multiple mounts are used. E.g. #${MARKER_NAME}1`);
      return;
    }

    try {
      const scrollyConfig = loadScrollyteller(MARKER_NAME + (id || ''), 'u-full', 'mark');

      mount(App, {
        target: scrollyConfig.mountNode,
        props: { Component: ScrollytellerRoot, panels: scrollyConfig.panels }
      });
    } catch (e) {
      const errorMessage = 'Unable to load interactive.';
      console.error(errorMessage, e);
      appMountNode.innerHTML = `<p style="border:1px solid red;padding:1rem;">${errorMessage}</p>`;
    }
  });
}

function decodeSchemas(mounts) {
  return Promise.all(
    mounts.map(async (mountNode, i) => {
      const parsedData = parse(mountNode.id.slice(1));
      const decodedData = await decodeSchema({ schema, data: parsedData });
      return { mountNode, adjacent: mountNode.nextSibling === mounts[i + 1], data: decodedData };
    })
  );
}

async function mountInlineGraphics() {
  const MARKER_NAME = 'electioninline';
  const mounts = selectMounts(MARKER_NAME);

  const adjacentMounts = await decodeSchemas(mounts);

  let accumulatedGraphics: Object[] = [];
  adjacentMounts.forEach(({ mountNode, adjacent, data }) => {
    accumulatedGraphics.push(data);
    if (!adjacent) {
      try {
        mount(App, {
          target: mountNode,
          props: { Component: InlineGraphics, graphics: accumulatedGraphics, mountNode }
        });
      } catch (e) {
        console.error('eeee', e);
      }
      accumulatedGraphics = [];
    }
  });
}

async function mountResultsCards() {
  const MARKER_NAME = 'electionresults';
  const mounts = selectMounts(MARKER_NAME);

  const adjacentMounts = await decodeSchemas(mounts);

  adjacentMounts.forEach(({ mountNode, data }) => {
    try {
      mount(LiveResultCard, {
        target: mountNode,
        props: data
      });
    } catch (e) {
      console.error('live result card', e);
    }
  });
}

// Load the Odyssey app
whenOdysseyLoaded.then(async () => {
  // Builder
  mountThing(
    'electionsfederal2025builder',
    () => import(/* webpackChunkName: "dynamic-builder" */ './builder/Builder.svelte')
  );

  // Google Doc Preview for the builder
  mountThing(
    'electionsfederal2025google-doc-preview',
    () => import(/* webpackChunkName: "dynamic-googledoc" */ './builder/GoogleDocEntrypoint.svelte')
  );

  // Iframe, standalone graphic for use in screenshot tool/possibly embedding
  mountThing(
    'electionsfederal2025iframe',
    () => import(/* webpackChunkName: "dynamic-iframe" */ './components/Iframe/Iframe.svelte')
  );

  // Inline graphics - if using without a scrollyteller, also mount electionsfederal2025colours
  await mountInlineGraphics();

  await mountResultsCards();

  // Scrollyteller + StyleRoot into the page
  mountScrollyteller();
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[elections-federal2025-hex] public path: ${__webpack_public_path__}`);
}
