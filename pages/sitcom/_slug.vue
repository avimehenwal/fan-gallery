<template>
  <div>
    <h3>Sitcoms {{ md }} </h3>
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
import { db } from '@/mixins/db.js'

// import Button from '@/components/button.vue'
// import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'
// import Comments from '@/components/Comments.vue'

export default {
  components: {
    // Button,
    // Check
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
