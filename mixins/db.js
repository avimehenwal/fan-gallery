import _ from 'lodash'

export const db = {
  // async asyncData ({ $content }) {
  // const doc = await $content('opm').fetch()
  // /animes not found
  // const doc = await $content('animes').where({ TO: 'opm' }).fetch()
  // return { doc }
  // },
  data: () => ({
    md: '', // markdown filename
    bg: 'Link',
    fandom: 'Link',
    wiki: 'Link',
    imdb: '/',
    manga: '/',
    item: '',
    doc: '',
    seasons: [
      { name: 'Vinland Saga: Season 1', done: true }
    ]
  }),
  mounted () {
    this.md = this.$route.params.slug
    this.getMD(this.md) // doc
    this.getInfo() // item
  },
  methods: {
    async getInfo () {
      const result = await this.$content('animes')
        // .where({ TO: { $eq: '/opm' } })
        .fetch()
      // this.item = result
      // lodash to filter as where query not working
      const path = '/' + this.md
      // const path = this.md
      // console.log('Filtering using ' + path)
      this.item = _.filter(result.body, { TO: path })[0]
    },
    async getMD (name) {
      // console.log('ARG:Filename = ' + name)
      this.doc = await this.$content(name).fetch()
    }
  },
  computed: {
    getNewsURL () {
      // https://news.google.com/search?
      // q=One%20punch%20%20man
      // &hl=en-US
      // &gl=US
      // &ceid=US%3Aen
      const news = new URL('https://news.google.com/search')
      news.searchParams.append('q', this.title)
      news.searchParams.append('hl', 'en-US')
      news.searchParams.append('gl', 'US')
      // console.log('google news = ' + news)
      return news.toString()
    },
    title () {
      return this.item.TITLE
    },
    testVariable () {
      // if (typeof (this.item) !== 'undefined' || this.item !== null) {
      if (this.item) {
        return true
      } else {
        return false
      }
    }
  }
}
