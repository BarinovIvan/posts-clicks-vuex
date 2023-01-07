import state from "@/store/clicks/common/state";

const getters = {
  getClicks(state) {
    return state.clicks
  }
}

export default getters
