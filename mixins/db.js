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
    wiki: 'Link',
    imdb: '/',
    news: '/',
    manga: '/',
    item: '',
    doc: '',
    seasons: [
      { name: 'Vinland Saga: Season 1', done: true }
    ]
  }),
  mounted () {
    this.md = this.$route.params.id
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
      // console.log('Filtering using ' + path)
      this.item = _.filter(result.body, { TO: path })[0]
    },
    async getMD (name) {
      console.log('ARG:Filename = ' + name)
      this.doc = await this.$content(name).fetch()
    }
  }
}
