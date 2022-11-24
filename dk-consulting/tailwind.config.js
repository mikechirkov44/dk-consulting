/** @type {import('tailwindcss').Config} */
const url = require("url");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black": "#161515",
        "grey": "#40454E",
        "lightgrey": "#E8E9EF",
        "blue": "#4D8BBE",
        "darkblue": "#27699E"
      },
      backgroundImage: {
        'mainpromo': "url('./assets/Main/Group 230.png')",
        'aboutpromo': "url('./assets/About/about_bg.png')",
        'cardfrontbg': "url('./assets/About/Rectangle 80.jpg')",
        'cardbackbg': "url('./assets/About/Rectangle 80 (1).jpg')",
        'aboutworthbg': "url('./assets/About/Фон.jpg')",
        'greylinebg': "url('./assets/About/Rectangle 86.jpg')",
        'servicepromo': "url('./assets/Service/Фото (9).png')",
        'serviceaudit': "url('./assets/Service/Rectangle 35.jpg')",
        'serviceconsult': "url('./assets/Service/Фон (1).jpg')",
        'serviceorganize': "url('./assets/Service/Фото (3).jpg')",
        'serviceteach': "url('./assets/Service/Фото (4).jpg')",
        'serviceheading': "url('./assets/Service/Фон (2).jpg')",
        'infopromo': "url('./assets/Info/Фото (13).png')",
        'slide1' : "url('./assets/FourSteps/Group 435.jpg')",
        'chess' : "url('./assets/FourSteps/Rectangle 7068.png')",
      },
      screens: {
        'lg': {'min': '1024px', 'max': '1289px'},
        'md': {'min': '768px', 'max': '1023px'},
        'sm': {'min': '480px', 'max': '767px'},
        'xs': {'min': '320px', 'max': '479px'},
      },
    },
  },
  plugins: [],
}
