import { makeSvelteStore } from 'hash-codec';
import { schema, type HashConfig } from './schema';

export const hashConfig = makeSvelteStore<HashConfig>(schema);

// Version our hash. This way we can introduce/deprecate/upgrade features as needed.
if (window.location.pathname.includes('/builder/')) {
  hashConfig.subscribe(val => {
    const CURRENT_VERSION = 1;
    if (val && val.version !== CURRENT_VERSION) {
      hashConfig.set({ ...val, version: CURRENT_VERSION });
    }
  });
}
