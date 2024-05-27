import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const pwaConfigs:any = {
  manifest:{
    name:"perfume",
    short_name:"perfume shop",
    description:"perfume online shop",
    background_color:"#FCE7F3",
    theme_color:"#FCE7F3",
    display:"standalone",
    scope:"/",
    start_url:"/",
    icons:[
      // {
      //   "src": "/img/icons/android-chrome-144x144.png",
      //   "sizes": "144x144",
      //   "type": "image/png",
      //   "purpose": "maskable"
      // },
      // {
      //   src:"/img/icons/android-chrome-192x192.png",
      //   sizes:"192x192",
      //   type:"image/png",
      //   purpose:"maskable any"
      // },
      // {
      //   src:"/img/icons/android-chrome-512x512.png",
      //   sizes:"512x512",
      //   type:"image/png",
      //   purpose:"maskable any"
      // },
      // {
      //   src:"/img/icons/android-chrome-maskable-192x192.png",
      //   sizes:"192x192",
      //   type:"image/png",
      //   purpose:"maskable any"
      // },
      // {
      //   src:"public/img/icons/android-chrome-maskable-512x512.png",
      //   sizes:"512x512",
      //   type:"image/png",
      //   purpose:"maskable any"
      // },
      // {
      //   src:"public/img/icons/apple-touch-icon.png",
      //   sizes:"192x192",
      //   type:"image/png",
      //   purpose:"maskable any"
      // },
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
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() , VitePWA(pwaConfigs)],
})
