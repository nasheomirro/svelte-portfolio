import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export const isAtTop = readable<null | boolean>(null, (set) => {
	const listener = () => set(window.scrollY < 100);
	if (browser) {
		window.addEventListener('scroll', listener);
		listener(); // invoke listener for cases on refresh.
	}
	return () => browser && window.removeEventListener('scroll', listener);
});
