module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: ["index.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Titillium Web", "sans-serif"],
            display: ["Monument Extended", "sans-serif"],
        },
        extend: {
            colors: {
                transparent: "transparent",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
