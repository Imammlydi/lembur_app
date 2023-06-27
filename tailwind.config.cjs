/** @type {import('tailwindcss').Config} */
// import second from './src/assets/image/ILL1.svg'
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#035B71",
            secondary: "#C6C052",
            white: "#FFFFFF",
            textPrimary: "#24AFD2",
            textWhite: "#FFFFFF",
            textNotActive: "#85898A",
            graydisable: "#d7d7d9",
            graydisable2: "#9b9fa3",
            graydisable3: "#696a6e",
            blue1: "#00AEEF",
            red1: "#ED1C24",
            yellow1: "#FFF200",
            green1: "#2ab850",
        },
        extend: {
            fontFamily: {
                Bitter: ["Bitter", "cursive"],
                BitterBold: ["Bitter:wght@700", "cursive"],
            },
            backgroundImage: {
                hero: "url('/src/assets/image/Ill1.svg)",
                // logo:"url( 'src/assets/image/logo .png')"
            },
        },
    },
    plugins: [],
};
