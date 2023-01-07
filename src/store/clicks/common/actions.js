import types from '@/store/types.js'

const actions = {
  incrementClick({ commit, state }) {
    commit(types.SET_CLICKS, ++state.clicks)
  }
}

export default actions
