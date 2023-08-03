/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        principal: {
          pink: '#FF2DAF',
          purple: '#8323FF',
          yellow: '#FEEA35',
        },
        base: {
          grayDark: '#1E1F28',
          gray: '#2B2B37',
          grayMid: '#373745',
          grayLight: '#8B8D9B',

        }
      }
    },
  },
  plugins: [],
}
