import Vue from 'vue'
import Vuex from 'vuex'

import clickModule from "@/store/clicks/clicks";

import types from "@/store/types";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    [types.SET_POSTS]: (state, posts) => state.posts = posts
  },
  getters: {
    getPosts(state) {
      return state.posts
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(response => response.json())
      commit(types.SET_POSTS, response)
    }
  },
  modules: {
    clickModule
  }
})
