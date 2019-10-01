---js
{
  date:      `2019-09-01`,
  layout:    `frame.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  eleventyExcludeFromCollections: false,

  title_s:    `11tyTips`,
  subtitle_s: `Inside Eleventy static site generator`,
  abstract_s: `Eleventy tips and tricks`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## It's Eleventy time!

Welcome to {{_C.SITE_s}}, a site for the awesome [Eleventy]{target="_blank" rel="noreferrer"} static site generator users.

Eleventy (11ty for short) is a static site generator rapidly gaining popularity among JAMstack developers. Its learning curve is short and it offers the largest choice of templating languages compared with others popular SSG
{% _short_note %}
SSGs usually provide only one templating option: React, Liquid, Go, Jinja2, etc.
[Hexo]{target="_blank" rel="noreferrer"} is the most notable exception, but 11ty has even more options.
{% end_short_note %}
.

11ty can be used without any configuration
{% _short_note %}
it is [zero-config]{target="_blank" rel="noreferrer"} out of the box!
{% end_short_note %}
, but its power comes from the fact that it is backed by the huge [Node.js]{target="_blank" rel="noreferrer"} ecosystem. Therefore, when building your static site with 11ty, you can do anything Node is able to do.

## Tips for newbies...and advanced users

{{_C.SITE_s}} will provide you useful tips and tricks to unleash the power of 11ty. If you've never built a static site, thanks to the simplicity of this generator, you will be able to install your site, by cloning the Github repository of this site, replacing its content files with your own Markdown content
{% _short_note %}
follow the [site cloning] page instructions to start with a clean site skeleton.
{% end_short_note %}
.

The styles have been carefully designed to give you a nice and simple presentation while offering advanced capabilities for a responsive layout with fluid typography
{% _short_note %}
applying Michael Riethmuller [formula]{target="_blank" rel="noreferrer"}.
{% end_short_note %}
, inline notes
{% _short_note %}
with full Markdown content, styling, linking, code blocks, etc.
{% end_short_note %}
, an Atom RSS feed, a sitemap for search engines, as well as a good commenting system
{% _short_note %}
using the Github [utteranc.es]{target="_blank" rel="noreferrer"} repository.
{% end_short_note %}
.

Have a look at the site [source tree] and [styles guide] pages.

[comment]: # (======== Links ========)

{{ lib.utils.siteUrl__s( 'styles_guide' ) }}
{{ lib.utils.siteUrl__s( 'site_cloning' ) }}
{{ lib.utils.siteUrl__s( 'source_tree' ) }}

{{ _C.ELEVENTY_s }}
{{ _C.UT_s }}
{{ _C.NODE_s }}
 
[zero-config]: https://www.11ty.io/docs/resources/#zero-config
[Hexo]: https://www.staticgen.com/hexo
[formula]: https://www.smashingmagazine.com/2016/05/fluid-typography/#comments-fluid-typography