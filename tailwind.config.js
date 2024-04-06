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
            },
            boxShadow: {
                neon: "0 4px 6px -1px rgba(255, 20, 147, 0.7), 0 2px 4px -2px rgba(255, 20, 147, 0.3)", // Neon glow effect
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
