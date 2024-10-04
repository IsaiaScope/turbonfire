import plugin from "tailwindcss/plugin";

export default plugin(function ({ addBase }) {
  addBase({
    "*": {
      "@apply border-border": {},
    },
    body: {
      "@apply bg-background text-foreground font-poppins": {},
      // "font-feature-settings": '"rlig" 1, "calt" 1',
    },
  });
});
