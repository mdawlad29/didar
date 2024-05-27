import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#03a9f4",
        // primary:"#03A84E",
        secondary: "#ED1C24",
        "secondary-50": "#222222",
        accent: "#263170",
        neutral: "#fff",
      },
      textColor: {
        primary: "#03a9f4",
        // primary:"#03A84E",
        secondary: "#ED1C24",
        accent: "#263170",
        neutral: "#fff",
      },
      borderColor: {
        primary: "#03a9f4",
        // primary:"#03A84E",
        secondary: "#83aef3",
        // secondary:"#ED1C24",
        accent: "#263170",
        neutral: "#fff",
      },
      backgroundImage: {
        circle:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 100px)",
      },
    },
  },
  plugins: [],
};
export default config;
