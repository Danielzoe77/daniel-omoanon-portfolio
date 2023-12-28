/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    boxShadow: {
      'inno': '4px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    },

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
       'faintbl': '#ebf2fe59',
       'strong-cyan': '#00adbc',
       'light-purple-blue': '#232e52',
       'inno-blue':'#1d3557',
       'red' : '#ff0000',
       'pri-color' : '#1D3557',
      " clifford": '#da373d',
       'primary':'#079211',
       'white':'#FFFF',
       'light-gray': '#0A0A0F',
       'gray': '#808080',
       'deep-gray': '#0A0A0F',
       'light-dark': '#313131',
       'dark': '#101017',
       'deep-dark': 'white',
       'dark-purple' : "#000235",
       'btn_primary' : " #3de397",
       'blue' : "#0000D1"
    },
    
    extend: {},
  },
  plugins: [],
}

