import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "daily",
      priority: 1,
      lastmod: new Date()
    }),
    react()
  ],
  site: "http:localhost:4321",
  base: ""
});