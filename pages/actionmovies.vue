<template>
  <CardList csv="action" />
</template>

<script>
export default {
  components: {
    CardList: () => import('@/components/CardList.vue')
  }
}
</script>
