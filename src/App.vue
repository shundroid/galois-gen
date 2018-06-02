<template lang="pug">
  v-app#app
    g-title
    .buy
      | 購入は
      a(href="https://www.amazon.co.jp/%E5%9B%B3%E8%A7%A3%E3%81%A8%E5%AE%9F%E4%BE%8B%E3%81%A8%E8%AB%96%E7%90%86%E3%81%A7%E3%80%81%E4%BB%8A%E5%BA%A6%E3%81%93%E3%81%9D%E3%82%8F%E3%81%8B%E3%82%8B%E3%82%AC%E3%83%AD%E3%82%A2%E7%90%86%E8%AB%96-%E9%88%B4%E6%9C%A8-%E6%99%BA%E7%A7%80/dp/4797390204" target="_blank") こちら
      | ！
    main
      book(:bookDetails="bookDetails")
      inspector(:bookDetails="bookDetails")
</template>

<script>
import GTitle from './components/Title'
import Book from './components/Book'
import Inspector from './components/Inspector'

export default {
  name: 'App',
  components: {
    GTitle,
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
        description4: '格好の入門書。'
      }
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}

.buy {
  width: 100%;
}

.md-primary {
  background-color: #0062a1;
  color: white;
}

@media screen and (min-width: 700px) {
  main {
    display: flex;
  }
}
</style>
