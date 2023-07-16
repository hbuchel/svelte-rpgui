import { writable, readable } from 'svelte/store';

export const gcdActive = writable(false);
export const gcdDuration = readable(1000);
export const isCasting = writable(false);