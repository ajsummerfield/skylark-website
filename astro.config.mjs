import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
 
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "rRfXQMqHfyWxl4AUoL701gtt",
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      }
    }),
  ],
});