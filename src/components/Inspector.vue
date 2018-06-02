<template>
  <v-card class="inspector">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">設定</h3>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>タイトル</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.title" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>サブタイトル</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-text-field v-model="bookDetails.subtitle1" />
          </v-flex>
          <v-flex xs1 class="subtitle-middle">
            と
          </v-flex>
          <v-flex xs2>
            <v-text-field v-model="bookDetails.subtitle2" />
          </v-flex>
          <v-flex xs1 class="subtitle-middle">
            と
          </v-flex>
          <v-flex xs2>
            <v-text-field v-model="bookDetails.subtitle3" />
          </v-flex>
          <v-flex xs1 class="subtitle-middle">
            で、
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.subtitle4" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>説明（１行目）</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.description1" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>説明（２行目）</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.description2" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>説明（３行目）</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.description3" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>説明（４行目）</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.description4" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>作者</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.author" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>作者（英語表記）</v-subheader>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="bookDetails.authorEn" />
          </v-flex>
        </v-layout>
      </div>
    </v-card-title>
  </v-card>
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
