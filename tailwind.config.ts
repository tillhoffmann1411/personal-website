import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'animation': {
        'gradient-xy': 'gradient-xy 12s ease-in-out infinite',
      },
      'keyframes': {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '250% 250%',
            'background-position': 'left top'
          },
          '40%, 50%': {
            'background-size': '250% 250%',
            'background-position': 'right bottom'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
