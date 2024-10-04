import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import shadcnUiPlugin from "./src/utility/style/shadcn-ui-plugin"
import base from "./src/utility/style/base-plugin";
import fonts from "./src/utility/style/fonts-plugin";
// import shadcnUiPlugin from "@u-style/shadcn-ui-plugin";

export default{
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [animatePlugin ,shadcnUiPlugin, base, fonts],
} satisfies Config