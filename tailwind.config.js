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
        },
    },
    variants: {
        extend: {
            scrollSnapType: ["responsive"],
        },
    },
    plugins: [],
};
