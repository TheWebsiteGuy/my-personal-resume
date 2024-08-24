/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'selector',
  theme: {
    extend: {
		fontFamily :{ 
			arcade: ["arcade","mono"], 
		  } 
	  },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [
	require('@tailwindcss/typography'),
	require('@tailwindcss/forms'),
	require("daisyui"),
],

};
