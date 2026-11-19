/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#0D0909',
          surface: '#161212',
          elevated: '#1E1919',
        },
        silver: {
          DEFAULT: '#D4D4D4',
          muted: '#A3A3A3',
          dim: '#737373',
        },
        vermilion: {
          DEFAULT: '#F24916',
        },
        forest: {
          DEFAULT: '#2F7347',
        },
        ultramarine: {
          DEFAULT: '#13008C',
        },
      },
      fontFamily: {
        sans: ['"Nunito"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
