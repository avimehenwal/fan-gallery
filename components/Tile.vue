<template>
  <v-card class="justify-center" outlined :color="color" :width="width">
    <v-card-text>
      <div :class="banclass">
        {{ ban }}
      </div>
    </v-card-text>
    <v-card-subtitle class="text-center font-weight-bold">
      {{ desc }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    ban: {
      type: Number,
      default: 50
    },
    desc: {
      type: String,
      default: 'Some Description'
    },
    banclass: {
      type: String,
      default: 'display-2 text-center'
    }
  }
}
</script>

<style>

</style>
