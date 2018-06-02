<template lang="pug">
  v-card.inspector
    v-card-title(primary-title)
      div
        h3.headline.mb-0 設定
        v-layout(row)
          v-flex(xs4) #[v-subheader タイトル]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.title")
        v-layout(row)
          v-flex(xs4) #[v-subheader サブタイトル]
          v-flex(xs2)
            v-text-field(v-model="bookDetails.subtitle1")
          v-flex.subtitle-middle(xs1) と
          v-flex(xs2)
            v-text-field(v-model="bookDetails.subtitle2")
          v-flex.subtitle-middle(xs1) と
          v-flex(xs2)
            v-text-field(v-model="bookDetails.subtitle3")
          v-flex.subtitle-middle(xs1) で
          v-flex(xs4)
            v-text-field(v-model="bookDetails.subtitle4")
        v-layout(row)
          v-flex(xs4) #[v-subheader 説明（１行目）]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.description1")
        v-layout(row)
          v-flex(xs4) #[v-subheader 説明（２行目）]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.description2")
        v-layout(row)
          v-flex(xs4) #[v-subheader 説明（３行目）]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.description3")
        v-layout(row)
          v-flex(xs4) #[v-subheader 説明（４行目）]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.description4")
        v-layout(row)
          v-flex(xs4) #[v-subheader 作者]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.author")
        v-layout(row)
          v-flex(xs4) #[v-subheader 作者（英語表記）]
          v-flex(xs4)
            v-text-field(v-model="bookDetails.authorEn")
</template>

<script>
export default {
  props: {
    bookDetails: Object
  }
}
</script>

<style scoped>
.subtitle-middle {
  line-height: 50px;
  padding: 10px;
}
</style>
