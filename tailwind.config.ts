import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./pages/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: "#0078D4", foreground: "#ffffff" } },
      backgroundImage: {
        "hero-gradient": "radial-gradient(1200px 600px at 20% -20%, rgba(0,120,212,0.25), transparent), radial-gradient(800px 400px at 80% -10%, rgba(0,200,180,0.2), transparent)"
      }
    }
  },
  plugins: []
};
export default config;