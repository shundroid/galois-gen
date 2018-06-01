<template>
  <div class="book">
    <img src="../assets/book.jpg">
    <div class="overlay">
      <div class="title-overlay"></div>
      <div class="description-overlay"></div>
      <div class="author-overlay"></div>
      <div class="subtitle-overlay"></div>
      <div class="title">ガロア理論</div>
      <div class="description-1">
        一歩一歩階段を上るように、<br />
        わかっていく楽しみを味わえる
      </div>
      <div class="description-2">
        ガロア理論への<br />
        格好の入門書。
      </div>
      <div class="author">
        <div class="author-jp">
          鈴木智秀
        </div>
        <div class="author-en">
          Tomohide Suzuki
        </div>
      </div>
      <div class="subtitle">
        図解<span class="small">と</span>実例<span class="small">と</span>論理<span class="small">で</span>、今度こそわかる
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: genjyuu;
  src: url('../assets/GenJyuuGothic-Normal.ttf');
}
img {
  height: 100%;
}
.book {
  position: relative;
  height: 100vh;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  font-family: genjyuu;
  width: calc(100vh / 1000 * 690);
  height: 100%;
}
.overlay > * {
  position: absolute;
}
.title {
  top: 49%;
  width: 100%;
  text-align: center;
  color: #d7e6ec;
  font-size: 13vh;
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
  font-size: 2.4vh;
  letter-spacing: -0.05em;
}
.description-2 {
  top: 87%;
  left: 1%;
  color: #012942;
  font-weight: bold;
  line-height: 1.4;
  font-size: 3.9vh;
  letter-spacing: -0.05em;
}
.author {
  top: 6%;
  left: 83%;
}
.author-jp {
  writing-mode: vertical-rl;
  font-size: 3.7vh;
  color: #313630;
}
.author-en {
  writing-mode: vertical-rl;
  font-size: 1.6vh;
  margin-left: 2vh;
  margin-top: 1vh;
  color: #2191d9;
}
.subtitle {
  top: 43.5%;
  width: 100%;
  letter-spacing: -0.05em;
  font-size: 4.2vh;
  text-align: center;
}
.small {
  font-size: 3vh;
}
</style>
