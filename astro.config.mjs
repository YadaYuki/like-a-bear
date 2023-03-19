import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://like-a-bear.pages.dev/",
  integrations: [mdx(), sitemap(), react(), image()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
