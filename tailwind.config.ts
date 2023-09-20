import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "montserrat": "montserrat",
      "clash-display": "clash display",
      "unica-one": "unica one",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient': "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        "text-grad": "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
        "main_bg": "url('/images/backgroun-image.svg')",
      },
    },
  },
  plugins: [],
}
export default config
