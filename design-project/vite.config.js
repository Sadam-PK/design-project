import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:"/design-project",
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving font files from @fontsource directories
        "../node_modules/@fontsource/",
        "../node_modules/@fontsource/**",
        // Allow serving files from your project's root directory and its subdirectories
        "./src/",
        "./src/**",
        "/home/sadam/Documents/projects/portfolio/node_modules/@fontsource",
        "/home/sadam/Documents/projects/portfolio/node_modules/@fontsource/**",
        "/home/sadam/Documents/projects/portfolio/design-project/src",
        "/home/sadam/Documents/projects/portfolio/design-project/src/**",
        "/home/sadam/Documents/projects/portfolio/design-project/node_modules/vite/dist/client",

        // Add the path to your font files
        "/home/sadam/Documents/projects/node_modules/@fontsource",
        "/home/sadam/Documents/projects/node_modules/@fontsource/**",
      ],
    },
  },
});
