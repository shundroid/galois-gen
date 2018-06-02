<template lang="pug">
  #book
    img(src="../assets/book.jpg")
    .overlay
      .title-overlay
      .description-overlay
      .author-overlay
      .subtitle-overlay
      .b-title {{ bookDetails.title }}
      .description-1
        | {{ bookDetails.description1 }}#[br]{{ bookDetails.description2 }}
      .description-2
        | {{ bookDetails.description3 }}#[br]{{ bookDetails.description4 }}
      .author
        .author-jp(v-html="authorRendered")
        .author-en
          | {{ bookDetails.authorEn }}
      .subtitle
        | {{ bookDetails.subtitle1 }}#[span.small と]{{ bookDetails.subtitle2 }}#[span.small と]{{ bookDetails.subtitle3 }}#[span.small で、]{{ bookDetails.subtitle4 }}
</template>

<script>
export default {
  props: {
    bookDetails: Object
  },
  computed: {
    authorRendered () {
      return this.bookDetails.author.split('').join('<br />')
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: genjyuu;
  src: url('../assets/GenJyuuGothic-Normal.ttf');
}
img {
  width: 100%;
  height: 100%;
}
#book {
  margin-bottom: 10px;
  width: 100vw;
  height: calc(100vw / 690 * 1000);
  line-height: normal;
  position: relative;
  font-size: calc(1vw / 690 * 1000);
}
@media screen and (min-width: 700px) {
  #book {
    width: calc(100vh / 1000 * 690);
    height: 100vh;
    margin-right: 10px;
    font-size: 1vh;
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  font-family: genjyuu;
  width: 100%;
  height: 100%;
}
.overlay > * {
  position: absolute;
}
.b-title {
  top: 49%;
  width: 100%;
  text-align: center;
  color: #d7e6ec;
  font-size: 13em;
}
.title-overlay {
  background-color: #2191d9;
  top: 80%;
  width: 50%;
  height: 20%;
}
.description-overlay {
  background-color: #2191d9;
  top: 51%;
  width: 100%;
  height: 13%;
}
.author-overlay {
  background-color: #f5f5f5;
  top: 0;
  left: 85%;
  width: 10%;
  height: 40%;
}
.subtitle-overlay {
  background-color: #f5f5f5;
  top: 44%;
  width: 100%;
  height: 6%;
}
.description-1 {
  top: 80.5%;
  left: 1%;
  color: #012942;
  font-weight: bold;
  line-height: 1.4;
  font-size: 2.4em;
  letter-spacing: -0.05em;
}
.description-2 {
  top: 87%;
  left: 1%;
  color: #012942;
  font-weight: bold;
  line-height: 1.4;
  font-size: 3.9em;
  letter-spacing: -0.05em;
}
.author {
  top: 5.5%;
  left: 86%;
}
.author-jp {
  font-size: 3.7em;
  line-height: 1.1em;
  color: #313630;
}
.author-en {
  transform: rotate(90deg);
  transform-origin: left center;
  white-space: nowrap;
  font-size: 1.6em;
  color: #2191d9;
  margin-top: -0.4em;
  margin-left: 1.25em;
}
.subtitle {
  top: 43.5%;
  width: 100%;
  letter-spacing: -0.05em;
  font-size: 4.2em;
  text-align: center;
}
.small {
  font-size: 0.71em;
}
</style>
