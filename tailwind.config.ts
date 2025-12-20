import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
	plugins: [animate, typography],
  	content: [
    	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
    	"./components/**/*.{js,ts,jsx,tsx,mdx}",
    	"./app/**/*.{js,ts,jsx,tsx,mdx}",
  	],
}

export default config;