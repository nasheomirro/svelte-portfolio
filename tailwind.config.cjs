/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			background: {
				100: '#0f0e0a',
				200: '#2a2b47'
			},
			primary: {
				100: '#4D55A1',
				200: '#7E7BC7'
			},
			highlight: '#FDAF33',
			borders: '#242039',
			black: '#000',
			white: '#fff',
			transparent: '#00000000'
		},
		fontFamily: {}
	},
	plugins: []
};
