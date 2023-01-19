import type { Post } from '$lib/types';
import { writable } from 'svelte/store';

export const posts = writable<Post[] | null>(null);
