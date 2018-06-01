<template>
  <div class="inspector">
    タイトル: <input v-model="bookDetails.title" /><br />
    サブタイトル：<input v-model="bookDetails.subtitle1" />と
    <input v-model="bookDetails.subtitle2" />と
    <input v-model="bookDetails.subtitle3" />で、
    <input v-model="bookDetails.subtitle4" /><br />
    説明（下）（１行目）: <input v-model="bookDetails.description1" /><br />
    （２行目）: <input v-model="bookDetails.description2" /><br />
    （３行目）: <input v-model="bookDetails.description3" /><br />
    （４行目）: <input v-model="bookDetails.description4" /><br />
    作者：<input v-model="bookDetails.author" /><br />
    英語表記：<input v-model="bookDetails.authorEn" />
  </div>
</template>

<script>
export default {
  props: {
    bookDetails: Object
  }
}
</script>
