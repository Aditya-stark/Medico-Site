/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdPhone: "375px", // Medium phone
        tablet: "425px", // Tablet
        sm: "640px", // Small screens
        md: "768px", // Medium screens (matches tablet)
        lg: "1024px", // Large screens (matches laptop)
        w1257: "1257px", // Custom breakpoint for 1257px
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x extra large screens
      },
    },
  },
  plugins: [],
});
