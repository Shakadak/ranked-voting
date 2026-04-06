import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import solidBetterRefresh from 'solid-better-refresh'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "/ranked-voting",
  plugins: [
    solid(),
    solidBetterRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
})
