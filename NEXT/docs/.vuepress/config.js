module.exports = {
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
        avatar: 'https://picsum.photos/100.webp',
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
    plugins: [
      "markdown-it-abbr",
      "markdown-it-container",
      "markdown-it-deflist",
      "markdown-it-emoji",
      "markdown-it-footnote",
      "markdown-it-ins",
      "markdown-it-mark",
      "markdown-it-sub",
      "markdown-it-sup",
    ]
  }
}
