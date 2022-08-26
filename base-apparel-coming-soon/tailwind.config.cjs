/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'mobile': '375px',
			// => @media (min-width: 375px) { ... }
			'desktop': '1440px',
			// => @media (min-width: 1440px) { ... }
		},
		extend: {
			fontFamily: {
				'Josefin Sans': ['Josefin Sans', "sans-serif"],
			},
		},
	},
	plugins: [],
}
