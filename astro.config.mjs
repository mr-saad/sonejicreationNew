import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import react from "@astrojs/react"
// import node from "@astrojs/node"
// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["cdn.sanity.io"]
  },
  integrations: [react()],
  output: "server",
  /*  node({
    mode: "standalone"
  }), */
  adapter: vercel(),
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true
  }
})
