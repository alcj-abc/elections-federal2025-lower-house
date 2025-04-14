import { writable } from 'svelte/store';
/**
 * Caution: this it global, so we can only use it for singleton use cases,
 * specifically the context menu in the builder. */
export const arrowData = writable({});
