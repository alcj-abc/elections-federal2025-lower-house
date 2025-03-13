import acto, { parse } from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';
import { mount } from 'svelte';
import ScrollytellerRoot from './components/ScrollytellerRoot/ScrollytellerRoot.svelte';
import { schema } from './lib/hashConfig';
import { decodeSchema } from 'hash-codec';
import InlineGraphics from './components/InlineGraphics/InlineGraphics.svelte';

async function mountThing(id, AppFetcher) {
  const [appMountNode] = selectMounts(id);

  if (appMountNode) {
    const appProps = acto(getMountValue(appMountNode));

    const App = await AppFetcher();
    mount(App.default, {
      target: appMountNode,
      props: appProps
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

      mount(ScrollytellerRoot, {
        target: scrollyConfig.mountNode,
        props: { panels: scrollyConfig.panels }
      });
    } catch (e) {
      const errorMessage = 'Unable to load interactive.';
      console.error(errorMessage, e);
      appMountNode.innerHTML = `<p style="border:1px solid red;padding:1rem;">${errorMessage}</p>`;
    }
  });
}

async function mountInlineGraphics() {
  const MARKER_NAME = 'electioninline';
  const mounts = selectMounts(MARKER_NAME);

  const adjacentMounts = await Promise.all(
    mounts.map(async (mountNode, i) => {
      const parsedData = parse(mountNode.id.slice(1));
      const decodedData = await decodeSchema({ schema, data: parsedData });
      return { mountNode, adjacent: mountNode.nextSibling === mounts[i + 1], data: decodedData };
    })
  );

  console.log('eeee', { adjacentMounts });

  let accumulatedGraphics: Object[] = [];
  adjacentMounts.forEach(({ mountNode, adjacent, data }) => {
    accumulatedGraphics.push(data);
    console.log('eeee', mountNode, adjacent);
    if (!adjacent) {
      console.log('eeee', 'mounting', accumulatedGraphics, mountNode);
      try {
        mount(InlineGraphics, {
          target: mountNode,
          props: { graphics: accumulatedGraphics }
        });
      } catch (e) {
        console.error('eeee', e);
      }
      accumulatedGraphics = [];
    }
  });
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

  mountScrollyteller();

  mountInlineGraphics();
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[elections-federal2025-hex] public path: ${__webpack_public_path__}`);
}
