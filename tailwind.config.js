/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 15px 40px -20px rgba(40, 44, 63, 0.15)",
            },
        },
    },
    plugins: [],
};
