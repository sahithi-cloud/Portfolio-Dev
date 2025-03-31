/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vscodeBg: "#1e1e1e",         // Background
        vscodeText: "#d4d4d4",       // Default text
        vscodeBlue: "#569cd6",       // Keywords, variables
        vscodeGreen: "#6a9955",      // Strings, success
        vscodeYellow: "#dcdcaa",     // Constants
        vscodePurple: "#c586c0",     // Functions
        vscodeRed: "#f44747",        // Errors, highlights
      },
      fontFamily: {
        code: ["'Fira Code'", "monospace"],
      },
      boxShadow: {
        pixel: "0 0 0 4px #000", // Optional if you still want pixel-style shadows
      },
      keyframes: {
        bounceCoin: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'bounce-coin': 'bounceCoin 0.6s infinite',
      },
    },
  },
  plugins: [],
}
