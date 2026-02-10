import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
      fontFamily: {
          sans: [
              "'Inter Variable'",
              "'Montserrat Variable'",
              "system-ui",
              "ui-sans-serif",
              "sans-serif",
          ],
          heading: [
              "'Montserrat Variable'",
              "system-ui",
              "ui-sans-serif",
              "sans-serif",
          ],
      },
      container: {
          center: true,
          padding: {
              DEFAULT: "1rem",
              md: "1.5rem",
              xl: "2rem",
          },
          screens: {
              "2xl": "1280px",
          },
      },
      extend: {
          colors: {
              "jmso-tosca": "#07d4c8",
              "jmso-dark-blue": "#002a69",
              "jmso-dark-blue-alt": "#012b6a",
              "jmso-light-blue": "#ebf3ff",
              "jmso-blue": "#0759d4",
          },
          keyframes: {
              "accordion-down": {
                  from: { height: 0 },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: 0 },
              },
          },
          animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
          },
          backgroundImage: {
              chart:
                  "conic-gradient(from 180deg at 50% 50%, #1792EB 0deg, #07D4C8 181.87499284744263deg, #002A69 360deg)",
          },
      },
    },
    plugins: [forms, require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
