const SOCIAL_NETWORKS = {
  GITHUB: "https://github.com/IsaiaScope",
  TWITCH: "https://www.twitch.tv/iso_on_fire",
  INSTAGRAM: "https://www.instagram.com/iso_on_fire",
  LINKEDIN: "https://www.linkedin.com/in/isaia-riva-2452242ab/",
} as const;

export const LINKS = {
  ...SOCIAL_NETWORKS,
} as const;

// const IMAGES_FOLDER = "images";
// const PNG = "png";
// const SVG  = "svg";

// export const LINKS = {
//   ASSETS: {
//     LOGO: `./${IMAGES_FOLDER}/${PNG}/filmbank-logo.${PNG}`,
//     LOGO_DARK: `./${IMAGES_FOLDER}/${PNG}/filmbank-logo-dark.${PNG}`,
//   },
// } as const;
