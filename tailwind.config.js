/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primaryColor: "rgb(255, 255, 255)",
				secondaryColor: "rgb(239, 241, 245)",
				tetraryColor: "rgb(31, 41, 55)",
				activeColor: "rgb(40, 40, 60)"
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
}

