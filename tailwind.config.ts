import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        "instrument-serif": ["Instrument Serif", "serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        black: "#000000",
        white: "#FFFFFF",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "inherit",
            fontFamily: "Instrument Serif, serif",
            a: {
              color: "inherit",
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            },
            h1: {
              fontWeight: "normal",
              color: "inherit",
              fontFamily: "Instrument Serif, serif",
            },
            h2: {
              fontWeight: "normal",
              color: "inherit",
              fontFamily: "Instrument Serif, serif",
            },
            h3: {
              fontWeight: "normal",
              color: "inherit",
              fontFamily: "Instrument Serif, serif",
            },
            h4: {
              fontWeight: "normal",
              color: "inherit",
              fontFamily: "Instrument Serif, serif",
            },
            blockquote: {
              fontStyle: "italic",
              color: "inherit",
              borderLeftColor: "currentColor",
              fontFamily: "Instrument Serif, serif",
            },
            code: {
              color: "inherit",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              color: "inherit",
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("@tailwindcss/typography")],
}
export default config
