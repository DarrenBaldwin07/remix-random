const { rapidStylesPath, rapidTailwindTheme, rapidPlugin } = require("@rapid-web/ui");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', rapidStylesPath],

  theme: {
    extend: rapidTailwindTheme({
      // We can extend the base rapidtailwind theme here
      colors: {
        primary: '#1D2125',
      },
      boxShadow: {
        'test': 'inset 0 0 0 16px red'
      },
      fontFamily: {
        'archivo': ['Archivo']
      },
    })
  },
  plugins: [rapidPlugin(
    {
      global: {
        'body': {
          backgroundColor: '#1D2125',
          fontFamily: 'archivo'
        }
      }
    }
  )],
}
