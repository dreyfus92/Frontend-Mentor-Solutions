/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'BigShoulderDisplay': ['Big Shoulders Display', 'sans'],
				'LexendDeca': ['Lexend Deca', 'sans-serif']
			}
		},
	},
	plugins: [],
}
