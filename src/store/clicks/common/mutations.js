import types from '@/store/types.js'

const mutations = {
    [types.SET_CLICKS]: (state, clicks) => {
      state.clicks = clicks
  }
}

export default mutations
