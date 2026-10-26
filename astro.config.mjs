// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

// import sanity from "@sanity/astro";
import react from "@astrojs/react";
import icon from "astro-icon";

// const { sanityProjectID } = loadEnv(
//   process.env.PUBLIC_SANITY_PROJECT_ID,
//   process.cwd(),
//   "",
// );

// https://astro.build/config
export default defineConfig({
  vite: {
    assetsInclude: ['**/*.base', '**/.obsidian/**', '**/_bases/**'],
    server: {
      watch: {
        ignored: ['**/.obsidian/**', '**/_bases/**', '**/bases/**', '**/_home/**', '**/home/**', '**/_base/**', '**/base/**']
      }
    }
  },
  output: "server",
  adapter: netlify({
    imageCDN: false,
    middlewareMode: "edge",
  }),
  integrations: [mdx(), react(), icon()],
  image: {
    service: passthroughImageService(),
  },
});
