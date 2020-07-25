<template>
  <div>
    <h1>{{ item.TITLE }}</h1><br>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="item.EXTERNAL" text="Fandom site" />
    <Button :href="bg" text="Background Inspiration" />
    <Button :href="imdb" text="IMDB" />
    <Button :href="news" text="News" />
    <br><br>

    <v-img :src="item.IMAGE" />
    {{ item }}
    <p>{{ item.SUBTITLE }}</p>
    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season.text">
      <Check :text="season.name" :done="season.done" />
    </div>
    <!-- <nuxt-content :document="doc" /> -->

    <Comments />
  </div>
</template>

<script>
import _ from 'lodash'
import Button from '@/components/button.vue'
import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'

export default {
  components: {
    Button,
    Comments,
    Check
    // List
  },
  async asyncData ({ $content }) {
    // const doc = await $content('opm').fetch()
    // const item = await $content('animes').where({ TO: 'opm' }).fetch()
    // return { item }
  },
  data: () => ({
    title: 'Some Title',
    wiki: 'Link',
    bg: 'Link',
    fandom: 'Link',
    imdb: 'Link',
    news: 'Link',
    manga: 'Link',
    item: '',
    seasons: [
      { name: 'Vinland Saga: Season 1', done: true }
    ]
  }),
  created () {
    this.readCSVData()
  },
  methods: {
    // move it to a mixin
    async readCSVData () {
      const result = await this.$content('animes')
        // .where({ TO: { $eq: '/opm' } })
        .fetch()
      // lodash to filter as where query not working
      this.item = _.filter(result.body, { TO: '/opm' })[0]
    }
  }
}
</script>
