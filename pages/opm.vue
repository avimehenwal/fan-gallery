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

    <v-parallax
      dark
      :src="item.IMAGE"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">{{ item.TITLE }}</h1>
          <h4 class="subheading">{{ item.SUBTITLE }}</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season.text">
      <Check :text="season.name" :done="season.done" />
    </div>

    <nuxt-content :document="doc" />
    <!-- <Comments /> -->
  </div>
</template>

<script>
import _ from 'lodash'
import Button from '@/components/button.vue'
// import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'

export default {
  components: {
    Button,
    // Comments,
    Check
    // List
  },
  async asyncData ({ $content }) {
    const doc = await $content('opm').fetch()
    // const item = await $content('animes').where({ TO: 'opm' }).fetch()
    return { doc }
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
      { name: 'One Punch Man: Season 1', done: true },
      { name: 'One Punch Man: Season 2', done: true },
      { name: 'One Punch Man: Season 3', done: false }
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
