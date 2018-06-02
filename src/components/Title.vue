<template lang="pug">
  .title
    v-toolbar(color="primary")
      v-toolbar-title ガロア理論ジェネレーター
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn(flat @click="goGithub") View Source Code
</template>

<script>
export default {
  methods: {
    goGithub () {
      location.href = 'https://github.com/shundroid/galois-gen'
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}
</style>
