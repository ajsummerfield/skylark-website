import { storyblokInit, apiPlugin } from '@storyblok/js';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderComponent, f as addAttribute, u as unescapeHTML, g as renderHead, h as renderSlot } from '../astro_BtzHYUEC.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import camelcase from 'camelcase';

const { storyblokApi } = storyblokInit({
            accessToken: "rRfXQMqHfyWxl4AUoL701gtt",
            use: [apiPlugin],
            apiOptions: undefined,
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

var P = Object.defineProperty, _ = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t, e) => (_(r, typeof t != "symbol" ? t + "" : t, e), e);
class z {
  constructor() {
    p(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), p(this, "getOptionsPage", (t, e = 25, o = 1) => ({
      ...t,
      per_page: e,
      page: o
    })), p(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), p(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), p(this, "range", (t = 0, e = t) => {
      const o = Math.abs(e - t) || 0, s = t < e ? 1 : -1;
      return this.arrayFrom(o, (a, n) => n * s + t);
    }), p(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), p(this, "flatMap", (t = [], e) => t.map(e).reduce((o, s) => [...o, ...s], [])), p(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, o = /[&<>"']/g, s = RegExp(o.source);
      return t && s.test(t) ? t.replace(o, (a) => e[a]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, o) {
    const s = [];
    for (const a in t) {
      if (!Object.prototype.hasOwnProperty.call(t, a))
        continue;
      const n = t[a], c = o ? "" : encodeURIComponent(a);
      let l;
      typeof n == "object" ? l = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : l = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), s.push(l);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us, cn, ap or ca
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", o = "api-us.storyblok.com", s = "app.storyblokchina.cn", a = "api-ap.storyblok.com", n = "api-ca.storyblok.com";
    switch (t) {
      case "us":
        return o;
      case "cn":
        return s;
      case "ap":
        return a;
      case "ca":
        return n;
      default:
        return e;
    }
  }
}
const U = function(r, t) {
  const e = {};
  for (const o in r) {
    const s = r[o];
    t.indexOf(o) > -1 && s !== null && (e[o] = s);
  }
  return e;
}, D = (r) => r === "email", B = () => ({
  singleTag: "hr"
}), q = () => ({
  tag: "blockquote"
}), F = () => ({
  tag: "ul"
}), J = (r) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: r.attrs
    }
  ]
}), K = () => ({
  singleTag: "br"
}), V = (r) => ({
  tag: `h${r.attrs.level}`
}), H = (r) => ({
  singleTag: [
    {
      tag: "img",
      attrs: U(r.attrs, ["src", "alt", "title"])
    }
  ]
}), G = () => ({
  tag: "li"
}), W = () => ({
  tag: "ol"
}), Y = () => ({
  tag: "p"
}), Q = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": r.attrs.name,
        emoji: r.attrs.emoji
      }
    }
  ]
}), X = () => ({
  tag: "b"
}), Z = () => ({
  tag: "s"
}), ee = () => ({
  tag: "u"
}), te = () => ({
  tag: "strong"
}), re = () => ({
  tag: "code"
}), oe = () => ({
  tag: "i"
}), se = (r) => {
  if (!r.attrs)
    return {
      tag: ""
    };
  const t = new z().escapeHTML, e = { ...r.attrs }, { linktype: o = "url" } = r.attrs;
  if (delete e.linktype, e.href && (e.href = t(r.attrs.href || "")), D(o) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const s in e.custom)
      e[s] = e.custom[s];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, ae = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ne = () => ({
  tag: "sub"
}), le = () => ({
  tag: "sup"
}), ie = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ce = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${r.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${r.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ue = {
  nodes: {
    horizontal_rule: B,
    blockquote: q,
    bullet_list: F,
    code_block: J,
    hard_break: K,
    heading: V,
    image: H,
    list_item: G,
    ordered_list: W,
    paragraph: Y,
    emoji: Q
  },
  marks: {
    bold: X,
    strike: Z,
    underline: ee,
    strong: te,
    code: re,
    italic: oe,
    link: se,
    styled: ae,
    subscript: ne,
    superscript: le,
    anchor: ie,
    highlight: ce,
    textStyle: ge
  }
}, pe = function(r) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, o = RegExp(e.source);
  return r && o.test(r) ? r.replace(e, (s) => t[s]) : r;
};
class fe {
  constructor(t) {
    p(this, "marks"), p(this, "nodes"), t || (t = ue), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: !1 }) {
    if (t && t.content && Array.isArray(t.content)) {
      let o = "";
      return t.content.forEach((s) => {
        o += this.renderNode(s);
      }), e.optimizeImages ? this.optimizeImages(o, e.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let o = 0, s = 0, a = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (a += `width="${e.width}" `, o = e.width), typeof e.height == "number" && e.height > 0 && (a += `height="${e.height}" `, s = e.height), (e.loading === "lazy" || e.loading === "eager") && (a += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (a += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), a.length > 0 && (t = t.replace(/<img/g, `<img ${a.trim()}`));
    const c = o > 0 || s > 0 || n.length > 0 ? `${o}x${s}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (l) => {
      var i, g;
      const f = l.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (f && f.length > 0) {
        const d = {
          srcset: (i = e.srcset) == null ? void 0 : i.map((u) => {
            if (typeof u == "number")
              return `//${f}/m/${u}x0${n} ${u}w`;
            if (typeof u == "object" && u.length === 2) {
              let b = 0, y = 0;
              return typeof u[0] == "number" && (b = u[0]), typeof u[1] == "number" && (y = u[1]), `//${f}/m/${b}x${y}${n} ${b}w`;
            }
          }).join(", "),
          sizes: (g = e.sizes) == null ? void 0 : g.map((u) => u).join(", ")
        };
        let h = "";
        return d.srcset && (h += `srcset="${d.srcset}" `), d.sizes && (h += `sizes="${d.sizes}" `), l.replace(/<img/g, `<img ${h.trim()}`);
      }
      return l;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderOpeningTag(a.tag));
    });
    const o = this.getMatchingNode(t);
    return o && o.tag && e.push(this.renderOpeningTag(o.tag)), t.content ? t.content.forEach((s) => {
      e.push(this.renderNode(s));
    }) : t.text ? e.push(pe(t.text)) : o && o.singleTag ? e.push(this.renderTag(o.singleTag, " /")) : o && o.html ? e.push(o.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), o && o.tag && e.push(this.renderClosingTag(o.tag)), t.marks && t.marks.slice(0).reverse().forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderClosingTag(a.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((o) => {
      if (o.constructor === String)
        return `<${o}${e}>`;
      {
        let s = `<${o.tag}`;
        if (o.attrs)
          for (const a in o.attrs) {
            const n = o.attrs[a];
            n !== null && (s += ` ${a}="${n}"`);
          }
        return `${s}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
const ke = (r) => {
  if (typeof r != "object" || typeof r._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": t.id + "-" + t.uid
    } : {};
  } catch {
    return {};
  }
};
let de;
const be = (r, t) => {
  r.addNode("blok", (e) => {
    let o = "";
    return e.attrs.body.forEach((s) => {
      o += t(s.component, s);
    }), {
      html: o
    };
  });
}, me = (r) => !r || !(r != null && r.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), ye = (r, t, e) => {
  let o = e || de;
  if (!o) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return me(r) ? "" : (t && (o = new fe(t.schema), t.resolver && be(o, t.resolver)), o.render(r));
};
function ve() {
  return globalThis.storyblokApiInstance || console.error("storyblokApiInstance has not been initialized correctly"), globalThis.storyblokApiInstance;
}
function Ie(r, t) {
  const e = globalThis.storyblokApiInstance.richTextResolver;
  if (!e) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return ye(r, t, e);
}

const $$Astro$i = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(ke(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "C:/git/skylark-website/src/storyblok/Page.astro", void 0);

const $$Astro$h = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Hero;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="hero"${addAttribute(`background-image: url(${blok.image.filename})`, "style")}> <div class="hero-body"> <div class="container"> <div class="columns"> <div class="column is-5"> <h1 class="hero__title">${blok.title}</h1> <h2 class="hero__subtitle">${blok.subtitle}</h2> </div> <div class="column is-7"></div> </div> </div> </div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Hero.astro", void 0);

const $$Astro$g = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Feature;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.body);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="feature"> <img${addAttribute(blok.icon?.filename, "src")}${addAttribute(blok.icon?.name, "alt")} class="feature__icon"> <h2 class="feature__title">${blok.title}</h2> <div class="feature__body">${unescapeHTML(renderedRichText)}</div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Feature.astro", void 0);

const $$Astro$f = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Grid;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="container"> <div class="columns"> ${blok.columns?.map((blok2) => {
    return renderTemplate`<div class="column"> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })} </div>`;
  })} </div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Grid.astro", void 0);

const $$Astro$e = createAstro();
const $$Teaser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Teaser;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.text);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <h2 class="text-center text-4xl font-bold text-primary py-12"> ${blok.headline} </h2> <div class="text-center mb-12">${unescapeHTML(renderedRichText)}</div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Teaser.astro", void 0);

const $$Astro$d = createAstro();
const $$BackgroundVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BackgroundVideo;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.body);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="background-video"> <video${addAttribute(blok.video.filename, "src")} autoplay muted loop></video> <div class="background-video__content">${unescapeHTML(renderedRichText)}</div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/BackgroundVideo/BackgroundVideo.astro", void 0);

const $$Astro$c = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Video;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="image is-16by9"> <video${addAttribute(blok.video.filename, "src")} controls="controls" width="100%" class="has-ratio"${addAttribute(blok.thumbnail.filename, "poster")}></video> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Video/Video.astro", void 0);

const $$Astro$b = createAstro();
const $$RichText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$RichText;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.content);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="rich-text">${unescapeHTML(renderedRichText)}</div> </div>`;
}, "C:/git/skylark-website/src/storyblok/RichText.astro", void 0);

const $$Astro$a = createAstro();
const $$EventsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$EventsList;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <div class="container"> <div class="events-list"> <div class="columns is-multiline"> ${blok.events?.map((blokEvent) => {
    return renderTemplate`<div class="column is-4"> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blokEvent })} </div>`;
  })} </div> </div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/EventsList/EventsList.astro", void 0);

const $$Astro$9 = createAstro();
const $$Event = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Event;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> ${blok.link.url.length > 0 && renderTemplate`<a${addAttribute(blok.link.url, "href")}${addAttribute(blok.link.target, "target")} class="event"> <div class="event__thumbnail-wrapper"> <img${addAttribute(blok.thumbnail.filename, "src")}${addAttribute(blok.title, "alt")} class="event__thumbnail"> </div> <div class="event__details"> <h3 class="event__title">${blok.title}</h3> <h4 class="event__date">${blok.date}</h4> <p class="event__desc">${blok.description}</p> </div> </a>`} ${blok.link.url.length == 0 && renderTemplate`<div class="event event--coming-soon"> <div class="event__thumbnail-wrapper"> <img${addAttribute(blok.thumbnail.filename, "src")}${addAttribute(blok.title, "alt")} class="event__thumbnail"> </div> <div class="event__details"> <h3 class="event__title">${blok.title}</h3> <h4 class="event__date">${blok.date}</h4> <p class="event__desc">${blok.description}</p> </div> </div>`} </div>`;
}, "C:/git/skylark-website/src/storyblok/Event/Event.astro", void 0);

const $$Astro$8 = createAstro();
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Slider;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slider"> <div class="swiper"> <div class="swiper-wrapper"> ${blok.slides?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div> </div> </div> `;
}, "C:/git/skylark-website/src/storyblok/Slider/Slider.astro", void 0);

const $$Astro$7 = createAstro();
const $$Slide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Slide;
  const { blok } = Astro2.props;
  const renderedRichText = Ie(blok.description);
  return renderTemplate`${maybeRenderHead()}<div class="swiper-slide"> <div class="slide"${addAttribute(`background-image: url(${blok.image.filename})`, "style")}> <div class="container"> <div class="slide__content"> <div class="h3 slide__title">${blok.title}</div> <div class="slide__desc">${unescapeHTML(renderedRichText)}</div> </div> </div> </div> </div>`;
}, "C:/git/skylark-website/src/storyblok/Slide/Slide.astro", void 0);

const $$Astro$6 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Button;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))}> <a${addAttribute(blok.link.url, "href")}${addAttribute(blok.link.target, "target")} class="button is-primary"> <span class="button__inner">${blok.text}</span> </a> </div>`;
}, "C:/git/skylark-website/src/storyblok/Button/Button.astro", void 0);

const components = {page: $$Page,hero: $$Hero,feature: $$Feature,grid: $$Grid,teaser: $$Teaser,backgroundVideo: $$BackgroundVideo,video: $$Video,richText: $$RichText,eventsList: $$EventsList,event: $$Event,slider: $$Slider,slide: $$Slide,button: $$Button};

const $$Astro$5 = createAstro();
const $$StoryblokComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "C:/git/skylark-website/node_modules/@storyblok/astro/components/StoryblokComponent.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft"
  });
  const links = Object.values(data.links);
  const currentPage = Astro2.url.pathname;
  const { isHome } = Astro2.props;
  const isActivePage = (pathname) => {
    return currentPage === pathname ? "is-active-item" : "";
  };
  return renderTemplate` ${maybeRenderHead()}<nav${addAttribute(`navbar is-fixed-top ${isHome}`, "class")}> <div class="navbar-brand"> <a class="navbar-item" href="/"> <img${addAttribute(isHome ? "/images/logo-white.png" : "/images/logo.png", "src")} alt="Skylark International" width="100"> </a> <a role="button" class="navbar-burger"> <span></span> <span></span> <span></span> </a> </div> <div class="navbar-menu"> <div class="navbar-end"> ${links.map((link) => renderTemplate`<a${addAttribute(link["real_path"], "href")}${addAttribute(`navbar-item ${isActivePage(link["real_path"])}`, "class")}> ${link.name} </a>`)} </div> </div> </nav>`;
}, "C:/git/skylark-website/src/components/navbar/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { isHome } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="header"> ${renderComponent($$result, "Navbar", $$Navbar, { "isHome": isHome })} </div>`;
}, "C:/git/skylark-website/src/components/header/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { isHome } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`footer ${isHome}`, "class")}> <div class="columns"> <div class="column is-4"> <div class="footer__content"> <ul class="footer__list"> <li> <span class="has-text-weight-light is-uppercase">© 2022 </span> <span class="has-text-weight-bold is-uppercase">Skylark</span> <span class="has-text-weight-light is-uppercase">International</span> </li> <li>
Charity Number: 1097111
</li> </ul> </div> </div> <div class="column is-4"> <div class="footer__content"> <p class="has-text-centered is-uppercase">Rebuilding Ruins &bull; Building Bridges &bull; Creating Culture</p> </div> </div> <div class="column is-4"> <div class="footer__content"> <ul class="footer__list is-right-aligned"> <li>
4 Hanbury Road, Chelmsford, Essex, CM1 3AE
</li> <li> <a href="mailto:info@skylarkinternational.org">info@skylarkinternational.org</a> </li> </ul> </div> </div> </div> </div>`;
}, "C:/git/skylark-website/src/components/footer/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pathname } = Astro2.url;
  const isHome = pathname === "/" ? "is-alt" : "";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/images/favicon-16.png" sizes="16x16"><link rel="icon" type="image/png" href="/images/favicon-32.png" sizes="32x32"><title>Skylark International</title>${renderHead()}</head> <body> <div class="wrapper"> ${renderComponent($$result, "Header", $$Header, { "isHome": isHome })} <div${addAttribute(`main ${isHome ? "is-home" : ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, { "isHome": isHome })} </div> </body></html>`;
}, "C:/git/skylark-website/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const storyblokApi = ve();
  const version = "draft";
  const { data } = await storyblokApi.get("cdn/links", {
    version
  });
  let links = data.links;
  links = Object.values(links);
  return links.map((link) => {
    return {
      params: { slug: link.slug }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const storyblokApi = ve();
  const version = "draft";
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version
  });
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content })} ` })}`;
}, "C:/git/skylark-website/src/pages/[slug].astro", void 0);
const $$file = "C:/git/skylark-website/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$slug,
        file: $$file,
        getStaticPaths,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$StoryblokComponent as $, _slug_ as _, $$BaseLayout as a, ve as v };
