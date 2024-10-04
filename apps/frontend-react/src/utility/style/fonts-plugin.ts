import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

// 📝 NOTE: https://play.tailwindcss.com/qo88yCcfi8?file=config
// https://fonts.google.com/specimen/Poppins?query=poppins
export default plugin(
  function ({ addBase }) {
    addBase({
      "@font-face": {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "900",
        fontDisplay: "swap",
        src: "url(/fonts/Poppins/Poppins-Black.ttf) format('truetype')",
      },
    }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "800",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-ExtraBold.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "700",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Bold.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "600",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-SemiBold.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "500",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Medium.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "400",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Regular.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "300",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Light.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "200",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-ExtraLight.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "100",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Thin.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "900",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-BlackItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "800",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-ExtraBoldItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "700",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-BoldItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "600",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-SemiBoldItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "500",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-MediumItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "400",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-Italic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "300",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-LightItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "200",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-ExtraLightItalic.ttf) format('truetype')",
        },
      }),
      addBase({
        "@font-face": {
          fontFamily: "'Poppins'",
          fontStyle: "italic",
          fontWeight: "100",
          fontDisplay: "swap",
          src: "url(/fonts/Poppins/Poppins-ThinItalic.ttf) format('truetype')",
        },
      });
  },
  {
    theme: {
      extend: {
        fontFamily: { poppins: ["Poppins", ...defaultTheme.fontFamily.sans] },
      },
    },
  },
);
