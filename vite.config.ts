import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import solidBetterRefresh from 'solid-better-refresh'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  base: "/ranked-voting",
  plugins: [
    solid(),
    solidBetterRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
  },
})
