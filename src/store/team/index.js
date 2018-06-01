export default {
  state: {
    numberOfPlayers: 4
  },
  mutations: {
    SET_NUMBER_OF_PLAYERS(state, payload) {
      state.numberOfPlayers = payload;
    }
  },
  getters: {
    numberOfPlayers(state) {
      return state.numberOfPlayers;
    }
  },
  actions: {
    
  }
};
