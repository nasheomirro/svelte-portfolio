import { writable } from "svelte/store";

export type Expression = "idle" | "look" | "question";
export const avatar = writable<Expression>("idle");