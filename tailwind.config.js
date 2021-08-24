const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Poppins']
      },
      colors:{
        'kp-blue' : '#002E6D',
        'btn-yellow-intro' : "#fbd74a"
      },
      fontSize:{
        'kp-subtitle': "32px"
      },
      padding:{
        '14':"14rem"
      },
      boxShadow:{
        'kp':"0px 0px 10px 0px #666"
      },
      maxWidth:{
        'kp':"18rem"
      },
      minWidth:{
        'kp':"18rem"
      },
      backgroundPosition:{
        'kp-center': "center center"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
