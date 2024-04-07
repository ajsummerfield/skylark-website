import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { apiPlugin } from "@storyblok/js";
import netlify from "@astrojs/netlify/functions";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const {
  CMS_ENV
} = loadEnv(import.meta.env.CMS_ENV, process.cwd(), "") || process.env.CMS_ENV;
const {
  ACCESS_TOKEN
} = loadEnv(import.meta.env.ACCESS_TOKEN, process.cwd(), "") || process.env.ACCESS_TOKEN;

// https://astro.build/config
export default defineConfig({
  output: CMS_ENV === 'preview' ? 'server' : 'static',
  adapter: netlify(),
  integrations: [storyblok({
    accessToken: ACCESS_TOKEN,
    bridge: CMS_ENV === 'preview',
    components: {
      page: "storyblok/Page",
      hero: "storyblok/Hero",
      feature: "storyblok/Feature",
      grid: "storyblok/Grid",
      teaser: "storyblok/Teaser",
      backgroundVideo: "storyblok/BackgroundVideo/BackgroundVideo",
      video: "storyblok/Video/Video",
      richText: "storyblok/RichText",
      eventsList: "storyblok/EventsList/EventsList",
      event: "storyblok/Event/Event",
      slider: "storyblok/Slider/Slider",
      slide: "storyblok/Slide/Slide"
    },
    use: [apiPlugin]
  })]
});