<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Клики: {{ getClicks }}</h2>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'AboutView',
    computed: {
      ...mapGetters('clickModule', ['getClicks'])
    }
  }
</script>
