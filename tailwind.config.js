module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontSize: {
        '3.5xl': '2.5rem',
        '4xl': '3rem',
        '5.5xl': '6rem',
        '6.5xl': '6.5rem',
        '7xl': '7rem',
      },
      height: {
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '750': '750px',
        '800': '800px',
        '850': '850px',
        '900': '900px',
        '950': '950px',
        '1000': '1000px',
        '1200': '1200x',
      },
      zIndex: {
        '1': '-1',
        '99': '99',
        '999': '999',
        '9999': '9999',
        '99999': '99999',
        '999999': '999999',
        '9999999': '9999999',
      },
      right: {
        '105': '-105%',
        '110': '-110%',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      spacing: {
        '20-rem': '20rem',
        '30-rem': '30rem',
        '35-rem': '35rem',
        '40-rem': '40rem'
      }
    },
  },
  plugins: [],
}
