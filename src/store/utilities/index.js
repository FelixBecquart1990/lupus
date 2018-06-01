import * as firebase from "firebase";

export default {
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {

  },
  getters: {
    loading(state) {
      return state.loading;
    }
  }
};
