import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    astroImageTools,
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
