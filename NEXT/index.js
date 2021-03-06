/**
 * remove-markdown is a node.js module that will remove (strip) Markdown formatting from text.
 * Markdown formatting means pretty much anything that doesn’t look like regular text,
 * like square brackets, asterisks etc.
 */
const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
  themeConfig = Object.assign(themeConfig, {
    logo: '/assets/img/sal.jpg',
    // logo: '/fg.svg',
    nav: themeConfig.nav || [
      { text: 'Blog', link: '/', },
      { text: 'Tags', link: '/tag/', },
    ],
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  })

  /**
   * ANCHOR Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      { id: 'post', dirname: '_posts', path: '/', },
    ],
    frontmatters: [
      { id: 'tag', keys: ['tags'], path: '/tag/', },
    ],
    globalPagination: { lengthPerPage: 6, },
  }

  let resolvedFeedOptions
  const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
  if (isFeedEnabled) {
    const {
      rss = true,
      atom = true,
      json = true,
      ...feedOptions
    } = themeConfig.feed
    resolvedFeedOptions = Object.assign({}, feedOptions, {
      feeds: {
        rss2: { enable: rss },
        atom1: { enable: atom },
        json1: { enable: json },
      },
    })
  }

  const properties = [
    'directories',
    'frontmatters',
    'globalPagination',
    'sitemap',
    'comment',
    'newsletter',
  ]
  const themeConfigPluginOptions = {
    ...pick(themeConfig, properties),
    feed: resolvedFeedOptions,
  }

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigPluginOptions
  )

  /** ANCHOR Integrate plugins */

  const enableSmoothScroll = themeConfig.smoothScroll === true

  /** NOTE plugins */
  const plugins = [
    ['@vuepress/back-to-top'],
    "@vuepress/plugin-active-header-links",
    "@vuepress/plugin-last-updated",
    // "vuepress-plugin-auto-sidebar",
    "reading-progress",
    "img-lazy",
    ['web-monetization', { 'address': process.env.ILP }],
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/blog', blogPluginOptions],
    ['smooth-scroll', enableSmoothScroll],
    [ '@vuepress/google-analytics', { 'ga': process.env.GA } ],
    ['vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        defaultTitle: '',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [ 'vuepress-plugin-container', {
        type: 'tip',
        defaultTitle: '',
        before: info => `<div class="tip"><p class="title">${info}</p>`,
        after: '</div>',
    },],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'quote',
        defaultTitle: 'Anonymous',
        before: '<article class="quote"><div class="body">',
        after: info => `</div><footer class="author">~ ${info}</footer></article>`,
      },
    ],
  ]

  /**
   * Enable pwa
   */
  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    markdown: {
      // options for markdown-it-anchor
      // anchor: { permalink: false },
      // options for markdown-it-toc
      // toc: { includeLevel: [1, 2] },
      linkify: true,                // convert markdown link texts to links
      extendMarkdown: md => {
        md.use(require('markdown-it-container'))
        md.use(require('markdown-it-footnote'))
        md.use(require('markdown-it-deflist'))
        md.use(require('markdown-it-imsize'))
        md.use(require('markdown-it-emoji'))
        md.use(require('markdown-it-todo'))
        md.use(require('markdown-it-abbr'))
        md.use(require('markdown-it-mark'))
        md.use(require('markdown-it-sup'))
        md.use(require('markdown-it-sub'))
        md.use(require('markdown-it-ins'))
      }
    },
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    alias: {
      fonts: path.resolve(__dirname, 'fonts'),
    },
    /**
     * Generate summary.
     */
    extendPageData(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }
      if (themeConfig.summary) {
        pageCtx.summary =
          removeMd(
            strippedContent
              .trim()
              .replace(/^#+\s+(.*)/, '')
              .slice(0, themeConfig.summaryLength)
          ) + ' ...'
        pageCtx.frontmatter.description = pageCtx.summary
      }
      if (pageCtx.frontmatter.summary) {
        pageCtx.frontmatter.description = pageCtx.frontmatter.summary
      }
    },
  }

  return config
}
