// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // A subtle, cool gray for accents, matching your new design
        accent: {
          DEFAULT: '#3B82F6', // A placeholder blue, we'll use grays mostly
          dark: '#374151', // The dark gray for tags
        },
        // The main dark background color
        primary: '#111827',
      },
    },
  },
  plugins: [],
}
export default config