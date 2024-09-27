import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        whitebas: "#F7F7F7",
        darkaba: "1E1E1E",
        redbas: {
          100: "#F5A3AD",
          200: "#F07887",
          300: "#EB4D60",
          400: "#E6223A",
          500: "#E6082F",
          600: "#C10628",
          700: "#A40523",
          800: "#87041D",
          900: "#6A0317",
        },
        bluebas: {
          100: "#B3E8F5",
          200: "#80D7EF",
          300: "#4DC5E9",
          400: "#1AB4E3",
          500: "#00A4D7",
          600: "#0080A8",
          700: "#006D90",
          800: "#006D90",
          900: "#005A79",
        },
        blueaba: {
          100: "#A5A8E3",
          200: "#7D81D4",
          300: "#555AC5",
          400: "#2E33B6",
          500: "#1A2189",
          600: "#171D7A",
          700: "#14196B",
          800: "#10145C",
          900: "#0D104D",
        },
        yellowaba: {
          100: "#FFF9B3",
          200: "#FFF580",
          300: "#FFF04D",
          400: "#FFEC1A",
          500: "#FFF000",
          600: "#E6D000",
          700: "#CCB500",
          800: "#B39900",
          900: "#998000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
