import { createStore } from "vuex";

export const store = createStore({
  state () {
    return {
      buttonStatus: ""
    }
  },
  mutations: {
    changeStatus(state) {
      if (!state.buttonStatus || state.buttonStatus === "O") {
        state.buttonStatus = "X";
      } else if (state.buttonStatus === "X") {
        state.buttonStatus = "O";
      }
    }
  }
})
