import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import react from "@astrojs/react"

export default defineConfig({
  image: {
    domains: ["cdn.sanity.io"]
  },
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true
  }
})
