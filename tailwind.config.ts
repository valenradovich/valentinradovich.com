import type { Config } from "tailwindcss"
// import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  darkMode: "class",
  // ...defaultConfig,
  content: [
    // ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ...defaultConfig.theme,
    extend: {
      // ...defaultConfig.theme.extend,
      fontFamily: {
        "instrument-serif": ["Instrument Serif", "serif"],
      },
      colors: {
        // ...defaultConfig.theme.extend.colors,
        black: "#000000",
        white: "#FFFFFF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [/*...defaultConfig.plugins,*/ require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
export default config
