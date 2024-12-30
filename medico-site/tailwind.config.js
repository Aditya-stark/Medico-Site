/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainCyan: "#48a097",
      },
      screens: {
        mdPhone: "375px", // Medium phone
        sm: "640px", // Small screens
        tablet: "425px", // Tablet (custom breakpoint)
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        w1257: "1257px", // Custom breakpoint
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x extra large screens
      },
    },
  },
  plugins: [],
});
