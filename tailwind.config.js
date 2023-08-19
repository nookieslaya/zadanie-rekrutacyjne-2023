/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '500px',
			md: '786px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				beige: '#DCC1AB',
				green: '#1B5B31',
				textBlack: '#111111',
				gray: '#F5F0EC',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
