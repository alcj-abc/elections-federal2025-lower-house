import { writable } from 'svelte/store';

/** Which modal is the builder currently displaying? */
export const modal = writable<
  | {
      type: string;
      props?: {};
    }
  | undefined
>();
