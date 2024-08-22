import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import shadcnUiPlugin from "./src/utility/style/shadcn-ui-plugin"
// import shadcnUiPlugin from "@u-style/shadcn-ui-plugin";

export default{
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [animatePlugin ,shadcnUiPlugin],
} satisfies Config