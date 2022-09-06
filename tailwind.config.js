/** @type {import('tailwindcss').Config} */
module.exports = {
    mode:"jit",
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#edb742',
                secondary:{
                  100:"#e2e2d5",
                  200:"#888883"
                },
            },
            fontFamily:{
                sans:['Open Sans'],
                lora:['Roboto Slab']
            }
        },
    },
    plugins: [],
};
