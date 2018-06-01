export default {
  state: {
    dead: null
  },
  mutations: {
    SET_DEAD(state, payload) {
      state.dead = payload;
    },
  },
  getters: {
    dead(state) {
      return state.dead;
    }
  },
  actions: {
    
  }
};
