import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  mode: 'universal',
  components: true,
  build: {
    analyze: true
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
    // routes: [
    //   'kaiji',
    //   'index',
    //   'kakegurui',
    //   'castlevania',
    //   'drifters',
    //   'neverland',
    //   'opm',
    //   'resources',
    //   'trsh',
    //   'htryd',
    //   'sevendeadlysins',
    //   'beasters',
    //   'article',
    //   'klk',
    //   'deamonslayer',
    //   'kyhe'
    // ]
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'katex/dist/katex.min.css', lang: 'css' },
    { src: 'w3-css/w3.css', lang: 'css' },
    '@/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/googlecharts.js'
    // file do not exists
    // {
    //   src: '~/plugins/vue-chart.js', mode: 'client'
    // }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/google-analytics',
    '@nuxtjs/eslint-module',
    '@nuxt/components',
    '@nuxtjs/vuetify',
    '@nuxtjs/gtm'
  ],
  googleAnalytics: {
    id: process.env.GA_ID || '',
    debug: {
      enabled: true,
      sendHitTask: true
    }
  },
  gtm: {
    id: process.env.GTM_ID || ''
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxt/http',
    // declare it at the end of the array
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  content: {
    nestedProperties: ['animes.slug'],
    markdown: {
      remarkPlugins: [
        '@fec/remark-a11y-emoji',
        'remark-container',
        'remark-graphviz',
        'remark-deflist',
        'remark-mermaid',
        'remark-rehype',
        'remark-emoji',
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    typographer: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-div',
      'markdown-it-attrs',
      'markdown-it-katex',
      'markdown-it-emoji',
      [
        'markdown-it-anchor',
        {
          level: 1,
          // slugify: string => string,
          permalink: true,
          // renderPermalink: (slug, opts, state, permalink) => {},
          permalinkClass: 'header-anchor',
          permalinkSymbol: '¶',
          permalinkBefore: true
        }
      ]
    ]
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // https://www.npmjs.com/package/@nuxtjs/sitemap
  sitemap: {
    hostname: 'https://fangallery.netlify.app/',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ]
    // routes: [
    //   '/page/1',
    //   '/page/2',
    //   {
    //     url: '/page/3',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
  env: {
    githubToken: '42cdf9fd55abf41d24f34c0f8a4d9ada5f9e9b93'
  }
}

