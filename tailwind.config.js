const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          blue: {
            950: '#17275c',
            back1: '#1B213D',
            slash: '#A5B4FC',
            gri: '#283154',
            buton: '#D8BB67',
            butt: '#794308',
            get: '#1f2647',
            proc: '#12172B',
            pross: '#191E36',
            pross1: '#3E4A78',
            buton1: '#1E2542',
            buton2: '#7583BC',
            yellow: '#E3B14A',
            brown:  '#794308',
            tex:  '#616D9D',
            imb:   '#1A213D',
            imbt:  '#1E2542',
            textm:  '#556192',
            hov: '#3E4A78',
            faq: '#36406A',
            faq2: '#1E2543',
            num: '#E3B14A',
            drop: '#3B466F',
            droph: '#4D5A8D',
            foot:  '#202542',
            foot2: '#C89F51',
            imbd:  '#151C34',
            lye: '#E5B957',
            lbb: '#394374',
          
          },
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
  
            /* Firefox */
            'scrollbar-width': 'none',
  
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }
        }
        )
      })
    ],
}
