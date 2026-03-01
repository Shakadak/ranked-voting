import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "/ranked-voting",
  plugins: [
    solid(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
})
