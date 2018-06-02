<template lang="pug">
  v-dialog(v-model="show" max-width="500px")
    v-card
      v-card-title 画像のエクスポート
      v-card-text
        img(:src="imageUrl")
      v-card-actions
        v-btn(color="primary" flat @click="close") #[v-icon close]
        v-btn(color="primary" flat @click="download") #[v-icon vertical_align_bottom]
</template>

<script>
import download from '../util/downloader'

export default {
  props: {
    show: Boolean,
    imageUrl: String
  },
  methods: {
    close () {
      this.show = false
    },
    download () {
      download(this.imageUrl)
    }
  }
}
</script>
