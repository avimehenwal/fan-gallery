export const utils = {
  methods: {
    getNewsURL (searchTerm) {
      // https://news.google.com/search?
      // q=One%20punch%20%20man
      // &hl=en-US
      // &gl=US
      // &ceid=US%3Aen
      const news = new URL('https://news.google.com/search')
      news.searchParams.append('q', searchTerm)
      news.searchParams.append('hl', 'en-US')
      news.searchParams.append('gl', 'US')
      // console.log('google news = ' + news)
      return news.toString()
    },
    testVariable (variableName) {
      // if (typeof (this.item) !== 'undefined' || this.item !== null) {
      if (variableName) {
        return true
      } else {
        return false
      }
    }
  }
}