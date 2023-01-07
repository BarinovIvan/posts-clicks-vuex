<template>
  <div class="about">
    <h1>Клики и посты</h1>
    <h2>Клики: {{ getClicks }}</h2>
    <hr>
    <div
      v-for="post in getPosts"
      :key="post.id"
    >
      <h1>{{ post.id }} | {{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'AboutView',
    computed: {
      ...mapGetters('clickModule', ['getClicks']),
      ...mapGetters(['getPosts'])
    },
    methods: {
      ...mapActions(['fetchPosts'])
    },
    created() {
      this.fetchPosts()
    }
  }
</script>

<style>
  div {
    width: 500px;
    margin: 0 auto;
  }
</style>
