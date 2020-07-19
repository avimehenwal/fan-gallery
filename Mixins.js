// retrieve data from public google sheet
// https://docs.google.com/spreadsheets/d/e/2PACX-1vT3QlL3ODPrb_pDyhNIfWSV2V04CGUNMuiyxPOLvGl7v61XX08Gy32_uh3J8MmRcPqYoIqwC1lmVbNt/pubhtml#

export const sheetMixin = {
  created () {
    this.fetchData()
  },
  data: () => ({
    SHEETPAGENUMBER: 5,
    COLUMNS: 6,
    records: null,
    items: [],
    headers: [],
    YOURGOOGLESHEETCODE: '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
  }),
  computed: {
    getURL () {
      return 'https://spreadsheets.google.com/feeds/cells/' +
      this.YOURGOOGLESHEETCODE + '/' + this.SHEETPAGENUMBER + '/public/full?alt=json'
    }
  },
  methods: {
    async fetchData () {
      const data = await this.$axios.$get(this.getURL)
      const entry = data.feed.entry
      this.records = (entry.length / this.COLUMNS) - 1
      for (let i = 0; i < this.COLUMNS; i++) {
        this.headers.push(entry[i].content.$t)
      }
      for (let i = this.headers.length; i < entry.length; i += this.COLUMNS) {
        const item = {}
        for (let j = 0; j < this.headers.length; j++) {
        // entry[i].content.$t retrieves the content of each cell
          item[this.headers[j]] = entry[i + j].content.$t
        }
        this.items.push(item)
      }
    }
  }
}
