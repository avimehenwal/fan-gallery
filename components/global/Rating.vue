<template>
  <div class="w3-container w3-dark-grey rating">
    <div v-if="length==5">
      <h3>Ratings</h3>
      <Bar :len="values[0]" color="orange">
        Sound and Music
      </Bar>
      <Bar :len="values[1]" color="blue">
        Animation and VFX
      </Bar>
      <Bar :len="values[2]" color="yellow">
        Storyline Concept
      </Bar>
      <Bar :len="values[3]" color="green">
        Presentation and Art
      </Bar>
      <Bar :len="values[4]" color="pink">
        Overall Liking
      </Bar>
    </div>
    <div v-else>
      <h4>
        Improper Arguments Length {{ length }}
      </h4>
      <p>Enter exactly 5 items in Array</p>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/Bar.vue'

export default {
  components: {
    Bar
  },
  props: {
    values: {
      type: Array,
      default: () => [20, 40, 50, 60, 100].map(String)
    }
  },
  computed: {
    length () {
      return this.values.length
    }
  }
}
</script>

<style>
.rating {
  padding-bottom: 1.5em;
}
</style>
