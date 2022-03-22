let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#FCF6E7",
					2: "#F0DEA7",
					3: "#D5B65C",
					4: "#734626",
				},
			},
		},
	},
	plugins: [],
};
