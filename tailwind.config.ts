import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: "#0E1632",
      primary: '#14224D',
      secondary: '#4870FF',
      muted: '#DEDEDE'
    }
  },
  plugins: [],
}
export default config
