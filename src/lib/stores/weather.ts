import type { Weather } from "$lib/types";
import { writable } from "svelte/store";

export const weather = writable<Weather | null>(null);
