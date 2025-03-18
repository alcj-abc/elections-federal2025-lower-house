import { writable } from 'svelte/store';

/** Label offsets from the original point, allows drag to reposition */
export const offsets = writable({});

export const isDraggingEnabled = writable(false);
