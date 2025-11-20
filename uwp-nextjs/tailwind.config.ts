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
        'uwp-yellow': '#FFCC00',
        'uwp-orange': '#FFA500',
        'uwp-green': '#129949',
        'uwp-green-dark': '#0F7A39',
        'dark-grey': '#333333',
        'light-grey': '#F5F5F5',
        'medium-grey': '#E8E8E8',
        'flipbook-bg': '#2C3E50',
      },
      maxWidth: {
        'content': '1200px',
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.5px' }],
      },
    },
  },
  plugins: [],
}
export default config
