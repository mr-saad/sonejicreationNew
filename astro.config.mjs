import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["cdn.sanity.io", "as1.ftcdn.net"],
  },
  integrations: [],
  output: "server",
  adapter: vercel(),
})
