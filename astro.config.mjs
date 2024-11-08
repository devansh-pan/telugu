import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://telugulokam.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],

  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },

  output: "hybrid",
  adapter: vercel(),
});
