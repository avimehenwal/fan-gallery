const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
  /**
   * NOTE use vue-svgo-loader
   * https://github.com/codyrobert/new-portfolio/blob/aa042a15d82edaf0d514430c67cc8adb45a100f3/.vuepress/config.js#L49
   */
  // https://github.com/vuejs/vuepress/issues/146
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.(jpe?g|png)/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()
  },
  title: 'fan-gallery',
  /**
   * set to github repo if deploying to GH pages
   */
  base: '/fan-gallery/',
  description: 'Blog example for Mediumish theme with VuePress',
  // build in $(ROOT)/docs for github pages
  dest: '../docs',
  logo: './logo.svg',
  // https://vuepress.vuejs.org/theme/writing-a-theme.html#layout-component
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
      {
        name: 'avimehenwal',
        avatar: '/assets/img/am.svg',
        link: 'https://twitter.com/avimehenwal',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/avimehenwal',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/avimehenwal',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://avimehenwal.github.io/fan-gallery/'
    },
    comment: {
      service: 'disqus',
      shortname: 'avimehenwal',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://avimehenwal.github.io/fan-gallery/',
    },
    smoothScroll: true
  },
  markdown: {
    linkify: true,                // convert markdown link texts to links
    plugins: [
      'markdown-it-container',
      'markdown-it-footnote',
      'markdown-it-deflist',
      'markdown-it-imsize',
      'markdown-it-emoji',
      'markdown-it-todo',
      'markdown-it-abbr',
      'markdown-it-mark',
      'markdown-it-sup',
      'markdown-it-sub',
      'markdown-it-ins',
    ]
  }
}
