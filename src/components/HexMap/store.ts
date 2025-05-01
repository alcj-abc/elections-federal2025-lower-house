import { setContext } from 'svelte';
import { get, writable } from 'svelte/store';

/**
 * Get a viewbox padding store and a small API that child components can use to
 * control the padding.
 *
 * child components can use `const viewboxApi = getContext('viewbox-api');`
 */
export function makeViewboxPaddingStore() {
  const viewboxPadding = writable([0, 0, 0, 0]);

  /** Which modal is the builder currently displaying? */
  const viewboxPaddingOwner = writable('none');

  /**
   * incrementer so our component has a unique handle on viewbox padding, won't
   * override other paddings durinfg race conditions
   */
  let owner = 0;
  function setViewboxPadding(name, padding) {
    viewboxPadding.set(padding);
    const guid = [name, owner++].join();
    viewboxPaddingOwner.set(guid);
    return guid;
  }

  /**
   * Reset the padding (but only if the guid matches)
   * @returns
   */
  function resetViewboxPadding(guid) {
    const lockedGuid = get(viewboxPaddingOwner);

    // Something else has updated the padding, so we don't need to reset it
    if (lockedGuid !== guid) {
      return;
    }

    viewboxPadding.set([0, 0, 0, 0]);
    viewboxPaddingOwner.set('none');
  }

  const viewboxApi = {
    setViewboxPadding,
    resetViewboxPadding
  };

  setContext('viewbox-padding', viewboxApi);

  return {
    viewboxPadding,
    viewboxApi
  };
}

/**
 * Given a viewbox, apply the padding. Padding is in the same order as CSS padding.
 */
export function applyPaddingToViewbox(viewbox, padding = [0, 0, 0, 0]) {
  const [pTop, pRight, pBottom, pLeft] = padding;
  const [x, y, w, h] = viewbox;
  return [x - pLeft, y - pTop, w + pLeft + pRight, h + pTop + pBottom];
}

export function makeSvgElStore() {
  return { svgElCurrentScale: writable(1) };
}
