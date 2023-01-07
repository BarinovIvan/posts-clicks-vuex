import Vue from 'vue'
import Vuex from 'vuex'

import clickModule from "@/store/clicks/clicks";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clickModule
  }
})
