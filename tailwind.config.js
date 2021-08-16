const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('https://images.unsplash.com/photo-1613310023042-ad79320c00ff?w=1920')",
      },
      minHeight: {
        '40': '40vh'
      },
      width: {
        '80': '80vw'
      },
      boxShadow: {
        'indigo': `0 .2rem .5rem ${colors.indigo[200]}`
      },
    }
  },
  plugins: [],
}
