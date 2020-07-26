<template>
  <div>
    <h1>
      {{ md }}
    </h1>
    {{ item }}
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
import { db } from '@/mixins/db.js'

// import Button from '@/components/button.vue'
// import Comments from '@/components/Comments.vue'
// import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'

export default {
  // components: {
  //   Button,
  //   Comments
  //   // List
  // },
  mixins: [db]
  // validate ({ params }) {
  //   // Must be a string
  //   return /^\w+$/.test(params.id)
  // },
}
</script>
