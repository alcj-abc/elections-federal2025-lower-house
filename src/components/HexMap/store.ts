import { get, writable } from 'svelte/store';

/** Which modal is the builder currently displaying? */
export const viewboxPadding = writable<number[]>();
export const viewboxPaddingOwner = writable('none');

/**
 * incrementer so our component has a unique handle on viewbox padding, won't
 * override other paddings durinfg race conditions
 */
let owner = 0;
export function setViewboxPadding(name, padding) {
  viewboxPadding.set(padding);
  const guid = [name, owner++].join();
  viewboxPaddingOwner.set(guid);
  return guid;
}

/**
 * Reset the padding (but only if the guid matches)
 * @returns
 */
export function resetViewboxPadding(guid) {
  const lockedGuid = get(viewboxPaddingOwner);

  // Something else has updated the padding, so we don't need to reset it
  if (lockedGuid !== guid) {
    return;
  }

  viewboxPadding.set([0, 0, 0, 0]);
  viewboxPaddingOwner.set('none');
}

/**
 * Given a viewbox, apply the padding. Padding is in the same order as CSS padding.
 */
export function applyPaddingToViewbox(viewbox, padding = [0, 0, 0, 0]) {
  const [pTop, pRight, pBottom, pLeft] = padding;
  const [x, y, w, h] = viewbox;
  return [x - pLeft, y - pTop, w + pLeft + pRight, h + pTop + pBottom];
}
