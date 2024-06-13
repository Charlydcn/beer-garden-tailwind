/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          gold: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--var-gold), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--var-gold), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--var-gold))`;
          },
        },
        backgroundImage: {
            'parallax': "url('/img/tireuses-bieres.jpg')",
            'custom-gradient': 'linear-gradient(0deg, rgba(22,21,19,1) 10%, rgba(22,21,19,0) 50%, rgba(22,21,19,1) 90%)',
        }
      },
    },
    plugins: [],
  };
  