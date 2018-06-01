import * as firebase from "firebase";

export default {
  state: {
    loading: false,
    range:true,
    roles:false,
    cycle:false
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_RANGE(state, payload) {
      state.range = payload;
    },
    SET_ROLES(state, payload) {
      state.roles = payload;
    },
    SET_CYCLE(state, payload) {
      state.cycle = payload;
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
    },
    roles(state) {
      return state.roles;
    },
    cycle(state) {
      return state.cycle;
    }
  }
};
