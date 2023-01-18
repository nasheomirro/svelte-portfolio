/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			background: {
				200: '#0f0e0a',
				100: '#2a2b47'
			},
			primary: {
				200: '#6764BD',
				100: '#9667BE'
			},
			highlight: '#fcbf49',
			borders: '#242039',
			black: '#000',
			white: '#fff',
			transparent: '#00000000'
		},
		fontFamily: {}
	},
	plugins: []
};
