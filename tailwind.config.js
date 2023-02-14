const { rapidStylesPath, rapidTailwindTheme, rapidPlugin } = require("@rapid-web/ui");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', rapidStylesPath],
  theme: {
    extend: {
      ...rapidTailwindTheme,
      colors: {
        main: '#1D2125'
      },
    },
  },
  plugins: [rapidPlugin(
    {
      global: {
        'body': {
          backgroundColor: '#1D2125'
        }
      }
    }
  )],
}
