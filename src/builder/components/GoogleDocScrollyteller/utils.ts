import { loadScrollyteller } from '@abcnews/svelte-scrollyteller';

function mountTextToMountEl(mountText: string) {
  const mountEl = document.createElement('div');

  mountEl.setAttribute('data-mount', '');
  mountEl.setAttribute('data-component', 'Anchor');
  mountEl.setAttribute('id', mountText.slice(1));

  return mountEl;
}

/**
 *
 * @param options
 * @param {string} options.name - Name in the scrollyteller opener tag. E.g. `#scrollytellerNAMEelectionmap1` would be "electionmap"
 * @param {string} options.className - Deprecated class to apply to every panel. This can be done at the top level scrollyteller nowadays.
 * @param {string} options.markerName - What does a #mark look like?
 * @param {function} [preprocessCoreEl] -
 * @param {function} [postprocessScrollytellerDefinition] -
 * @returns
 */
export async function loadData({
  name,
  className = 'u-full',
  markerName = 'mark',
  url,
  preprocessCoreEl = el => el,
  postprocessScrollytellerDefinition = a => a
}) {
  if (!url) {
    return;
  }

  const pubURL = url.replace(/\/[^/]+?$/, '/pub');
  const html = await fetch(pubURL).then(response => response.text());
  const dom = new DOMParser().parseFromString(html, 'text/html');
  const body = dom.querySelector('#contents > div');

  const title = dom.querySelector('title')?.textContent;

  if (!body) {
    throw new Error('Body not found');
  }

  Array.from(body.querySelectorAll('*')).forEach(el => {
    el.removeAttribute('class');
    el.removeAttribute('id');
  });

  const coreEls: Element[] = Array.from(body.children).map(preprocessCoreEl);

  const coreText = coreEls.reduce<string>((memo, el) => {
    const text = String(el.textContent).trim();

    memo = `${memo}\n${text ? `\n${text}` : ''}`;

    return memo;
  }, '');

  const coreHTML = coreEls.reduce<string>((memo, el) => {
    const text = String(el.textContent).trim();
    const html = el.outerHTML;

    memo = `${memo}${text ? `${html}` : ''}`;

    return memo;
  }, '');

  const { scrollytellingEls } = coreEls.reduce<{
    hasBegun: boolean;
    hasEnded: boolean;
    isRemoving: boolean;
    scrollytellingEls: Element[];
  }>(
    (memo, el) => {
      if (memo.hasEnded) {
        return memo;
      }

      const text = String(el.textContent).trim();

      if (text.indexOf('#remove') === 0) {
        memo.isRemoving = true;
      } else if (text.indexOf('#endremove') === 0) {
        memo.isRemoving = false;
      } else if (text.indexOf('#') === 0) {
        if (text.indexOf(`#scrollyteller${name ? `NAME${name}` : ''}`) === 0 && !memo.hasBegun) {
          memo.hasBegun = true;
        } else if (text.indexOf('#endscrollyteller') === 0) {
          memo.hasEnded = true;
        }

        memo.scrollytellingEls.push(mountTextToMountEl(text));
      } else if (!memo.hasBegun || memo.isRemoving || text === '') {
        // skip
      } else {
        memo.scrollytellingEls.push(el);
      }

      return memo;
    },
    {
      hasBegun: false,
      hasEnded: false,
      isRemoving: false,
      scrollytellingEls: []
    }
  );

  const container = document.createElement('div');

  scrollytellingEls.forEach(scrollytellingEl => container.appendChild(scrollytellingEl));
  document.body.appendChild(container);
  let scrollytellerDefinition = loadScrollyteller(name, className, markerName);

  document.body.removeChild(container);

  if (postprocessScrollytellerDefinition) {
    scrollytellerDefinition = postprocessScrollytellerDefinition(scrollytellerDefinition);
  }

  return {
    title,
    coreText,
    coreHTML,
    scrollytellerDefinition
  };
}
