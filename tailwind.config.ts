import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#135bec",
              "accent-appetite": "#FF8C00",
              "background-light": "#f6f6f8",
              "background-dark": "#101622",
          },
          fontFamily: {
              "display": ["Be Vietnam Pro", "sans-serif"]
          },
          borderRadius: {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
      },
  },
  plugins: [],
}
export default config