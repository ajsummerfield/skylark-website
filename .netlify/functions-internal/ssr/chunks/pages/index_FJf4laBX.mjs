import { v as ve, $ as $$StoryblokComponent, a as $$BaseLayout } from './_slug__BHslT1W_.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_BtzHYUEC.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const sbApi = ve();
  const version = "draft";
  const { data } = await sbApi.get("cdn/stories/home", {
    version
  });
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content })} ` })}`;
}, "C:/git/skylark-website/src/pages/index.astro", void 0);
const $$file = "C:/git/skylark-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
