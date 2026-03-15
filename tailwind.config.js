/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        figma: {
          purple: '#7B61FF',
          blue: '#0ACF83',
          gradient: {
            from: '#7B61FF',
            to: '#0ACF83',
          },
        },
      },
    },
  },
  plugins: [],
}
