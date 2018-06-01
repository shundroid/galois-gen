<template>
  <div id="app">
    <book :bookDetails="bookDetails" />
    <inspector :bookDetails="bookDetails" />
  </div>
</template>

<script>
import Book from './components/Book'
import Inspector from './components/Inspector'

export default {
  name: 'App',
  components: {
    Book,
    Inspector
  },
  data () {
    return {
      bookDetails: {
        author: '鈴木智秀',
        authorEn: 'Tomohide Suzuki',
        subtitle1: '図解',
        subtitle2: '実例',
        subtitle3: '論理',
        subtitle4: '今度こそわかる',
        title: 'ガロア理論',
        description1: '１歩１歩階段を上るように、',
        description2: 'わかっていく楽しみを味わえる',
        description3: 'ガロア理論への',
        description4: '格好の入門書'
      }
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}
</style>
