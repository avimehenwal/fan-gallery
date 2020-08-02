import { size, orderBy } from 'lodash'

/*
    Card List view methods and variable properties
*/

export const CardList = {
  data: () => ({
    // COntrol variables to reactive card list
    shaped: false,
    large: false,
    grid: true,
    numCards: 4,
    numCardsValues: [1, 2, 3, 4, 5, 6],
    search: '',
    items: [],
    csv: 'Movies',
    sortKeys: ['TITLE', 'SUBTITLE', 'RATING', 'IMAGE', 'EXTERNAL', 'TO'],
    sortOrders: ['asc', 'desc'],
    sortKey: 'TITLE',
    sortOrder: 'asc'
  }),
  created () {
  },
  mounted () {
    this.readCSVData(this.csv)
  },
  methods: {
    async readCSVData (csvFileName) {
      const result = await this.$content(csvFileName)
      // .sortBy('createdAt', 'asc')
      // .search(query)
        .fetch()
      this.items = result.body
    },
    dataSortby () {
      this.items = orderBy(this.items, [this.sortKey], [this.sortOrder])
    }
  },
  computed: {
    cardsCount () {
      return size(this.filteredCards)
    },
    filteredCards () {
      return this.items.filter((cardObject) => {
        return cardObject.TITLE.toLowerCase().match(this.search.toLowerCase())
      })
    },
    cards () {
      return (12 / this.numCards)
    },
    title () {
      return this.item.TITLE
    }
  },
  watch: {
    // whenever this.sortKey changes, this function will run
    sortKey () {
      this.dataSortby()
    },
    sortOrder () {
      this.dataSortby()
    }
  }
}
