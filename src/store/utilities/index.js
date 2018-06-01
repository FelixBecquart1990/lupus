import * as firebase from "firebase";

export default {
  state: {
    loading: false,
    range:true
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_RANGE(state, payload) {
      state.range = payload;
    },
  },
  actions: {

  },
  getters: {
    loading(state) {
      return state.loading;
    },
    range(state) {
      return state.range;
    }
  }
};
