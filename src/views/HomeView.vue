<template>
  <div class="home">
    <button @click="incrementClick()">Click</button>
    <h2>{{ getClicks }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions('clickModule', ['incrementClick'])
  },
  computed: {
    ...mapGetters('clickModule', ['getClicks'])
  }
}
</script>

<style>
  button {
    margin-bottom: 20px;
  }
</style>
