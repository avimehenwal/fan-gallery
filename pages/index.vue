<template>
  <CardList csv="animes" />
</template>

<script>
export default {
  components: {
    CardList: () => import('@/components/CardList.vue')
  }
}
</script>
