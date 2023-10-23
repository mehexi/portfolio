module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'section-gradient': 'linear-gradient(180deg, rgba(26, 25, 29, 0.00) 11.98%, #1A191D 73.96%)',
        },
        boxShadow: {
          'custom': '10px 0px 80px 0px #F55, -10px 0px 100px 0px #FBFF00, 0px 0px 50px 0px #FFF, -20px 0px 300px 0px #E3FF4B inset, 20px 0px 300px 0px #FF40D6 inset, -20px 0px 30px 0px #F00 inset, 20px 0px 30px 0px #FFD400 inset, 0px 0px 30px 0px #FFF inset;',
        },
      },
    },
    plugins: [],
  }