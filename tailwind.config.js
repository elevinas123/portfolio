/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            scrollSnapType: {
                x: "x mandatory", // Enables horizontal snapping
            },
            colors: {
                dark: "#121212", // A deep dark color for the background
                neonpink: "#ff1493", // Bright neon pink for highlights
                "neon-pink": "#ff00ff",
                "neon-green": "#39ff14",
                "neon-blue": "#00c0ff",
                "bg-color": "#323437", // This assumes you have --bg-color defined in your CSS
                "main-color": "#e2b714",
                "caret-color": "#e2b714",
                "sub-color": "#646669",
                "sub-alt-color": "#2c2e31",
                "text-color": "#d1d0c5",
            },
            boxShadow: {
                neon: "0 4px 6px -1px rgba(255, 20, 147, 0.7), 0 2px 4px -2px rgba(255, 20, 147, 0.3)", // Neon glow effect
                neonpink: "0 0 8px #ff1493, 0 0 15px #ff1493, 0 0 30px #ff1493", // Example of a neon glow effect
            },
            blur: {
                xl: "40px",
                xs: "1px",
            },
            spacing: {
                96: "24rem",
            },
            height: {
                "1/4": "25vh", // This sets the 'w-1/4' class to use 25% width
                "1/5": "20vh", // This sets the 'w-1/4' class to use 25% width
                "1/6": "16.6vh", // This sets the 'w-1/4' class to use 25% width
                "10vh": "10vh",
                "15vh": "15vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "100vh": "100vh",
            },
        },
    },
    variants: {
        extend: {
            scrollSnapType: ["responsive"],
        },
    },
    plugins: [],
};
