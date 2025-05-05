import { writable } from 'svelte/store';
import type { Map as MapType } from './maplibre-gl';

/** Register of all the current maplibre maps */
export const maps = writable<MapType[]>([]);
