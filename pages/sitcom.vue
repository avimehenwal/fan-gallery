<template>
  <CardList csv="Sitcom" />
</template>

<script>
export default {
  components: {
    CardList: () => import('@/components/CardList.vue')
  }
}
</script>
