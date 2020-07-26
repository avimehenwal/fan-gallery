<template>
  <div>
    <h1>{{ title }}</h1><br>
    <Button :href="item.EXTERNAL" text="Fandom site" />
    <Button :href="getNewsURL" text="Google News" />
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="bg" text="Background Inspiration" />
    <Button :href="imdb" text="IMDB" />
    <br><br>

    <v-img
      lazy-src="/placeholder.svg"
      :alt="title"
      :src="item.IMAGE"
    />

    <!-- <v-parallax
      dark
      height="1000"
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
    </v-parallax> -->

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season.text">
      <Check :text="season.name" :done="season.done" />
    </div>

    <nuxt-content :document="doc" />
    <!-- <Comments /> -->
  </div>
</template>

<script>
import { db } from '@/mixins/db.js'

import Button from '@/components/button.vue'
import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'
// import Comments from '@/components/Comments.vue'

export default {
  components: {
    Button,
    Check
    // Comments,
    // List
  },
  mixins: [db],
  validate ({ params }) {
    // Must be a string
    return /^\w+$/.test(params.id)
  }
}
</script>
