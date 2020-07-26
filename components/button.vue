<template>
  <span v-if="href != '/'">
    <v-btn outlined text :href="href" target="_blank">
      {{ text }}
      <v-icon right color="primary">
        mdi-microsoft-internet-explorer
      </v-icon>
    </v-btn>
  </span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'N/A'
    },
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>
