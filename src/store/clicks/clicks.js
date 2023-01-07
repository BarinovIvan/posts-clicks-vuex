import state from './common/state'
import mutations from './common/mutations'
import getters from './common/getters'
import actions from './common/actions'

const clickModule = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

export default clickModule
