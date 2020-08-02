<template>
  <CardList csv="Movies" />
</template>

<script>
export default {
  components: {
    CardList: () => import('@/components/CardList.vue')
  }
}
</script>
