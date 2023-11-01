/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phones': "url('/img/phones.png')",
        'games': "url(/img/voltigames.png)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
