import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfigs: any = {
  injectRegister: "inline",
  workbox: {
    skipWaiting: true,
  },
  manifest: {
    name: "perfume",
    short_name: "perfume shop",
    description: "perfume online shop",
    background_color: "#FCE7F3",
    theme_color: "#FCE7F3",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/img/icons/icon-96x96.jpg",
        sizes: "96x96",
        type: "image/jpg",
        purpose: "maskable",
      },
      {
        src: "/img/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "monochrome",
      },
      {
        src: "/img/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/icons/icon-1000x1000.jpg",
        sizes: "1000x1000",
        type: "image/jpg",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/img/icons/icon-1000x1000.jpg",
        sizes: "1000x1000",
        type: "image/jpg",
        form_factor: "wide",

        label: "perfume",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfigs)],
});
