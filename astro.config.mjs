// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";


import mdx from "@astrojs/mdx";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

const { sanityProjectID } = loadEnv(process.env.PUBLIC_SANITY_PROJECT_ID, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(),   sanity({
      projectId: 'isabjz71',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
       studioBasePath: '/studio'
    }),]
});
