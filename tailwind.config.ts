import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				offwhite: "#E5E8EC",
				grass: {
					default: "#5DC9A8",
					500: "#2C9676"
				},
				lightBlack: 'rgba(0,0,0,0.08)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
