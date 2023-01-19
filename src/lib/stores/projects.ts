import type { Project } from '$lib/types';
import { readable } from 'svelte/store';

// featured projects
export const projects = readable<Project[]>([
	{
		title: 'react-polymorphed',
		description: 'A set of types to help easily implement fast polymorphic components',
		techs: ['react', 'typescript', 'npm-package'],
		url: 'https://github.com/nasheomirro/react-polymorphed'
	},
	{
		title: 'your world',
		description:
			'A scuffed note-editing app that allows users to make taggable rich-text content which is saved on an indexedDB',
		techs: ['react', 'typescript', 'tiptap', 'zustand', 'tailwind', 'idb'],
		url: 'https://github.com/nasheomirro/your-world-v2'
	},
	{
		title: 'this website!',
		description: 'A one page portfolio built with sveltekit',
		techs: ['svelte', 'sveltekit', 'tailwind'],
		url: ''
	}
]);
