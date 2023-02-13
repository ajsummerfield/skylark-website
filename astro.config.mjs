import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { apiPlugin } from "@storyblok/js"
import netlify from "@astrojs/netlify/functions";;
 
export default defineConfig({
  output: 'server',
  integrations: [
    netlify(),
    storyblok({
      accessToken: "rRfXQMqHfyWxl4AUoL701gtt",
      components: {
        page: "storyblok/Page",
        hero: "storyblok/Hero",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        backgroundVideo: "storyblok/BackgroundVideo/BackgroundVideo",
        video: "storyblok/Video/Video",
      },
      use: [apiPlugin]
    }),
  ],
});