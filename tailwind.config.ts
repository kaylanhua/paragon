import type { Config } from 'tailwindcss'
import { PluginUtils, RecursiveKeyValuePair } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: (c: PluginUtils): RecursiveKeyValuePair<string, string> => {
      return {
        ...c.colors,
        dark: "#0E1632",
        darker: "#0A0F1F",
        primary: '#14224D',
        secondary: '#4870FF',
        muted: '#DEDEDE'
      }
    }
  },
  plugins: [],
}
export default config
