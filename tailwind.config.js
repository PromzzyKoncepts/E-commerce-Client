/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

// const plugin = require('tailwindcss/plugin')

// module.exports = {
//   plugins: [
//     plugin(function({ addUtilities }) {
//       const newUtilities = {
//         '.skew-10deg': {
//           transform: 'skewY(-10deg)',
//         },
//         '.skew-15deg': {
//           transform: 'skewY(-15deg)',
//         },
//       }

//       addUtilities(newUtilities)
//     })
//   ]
// }
