export default {
  state: {
    numberOfPlayers: 4,
    team: []
  },
  mutations: {
    SET_NUMBER_OF_PLAYERS(state, payload) {
      state.numberOfPlayers = payload;
    },
    SET_TEAM(state, payload) {
      state.team = payload;
    }
  },
  getters: {
    numberOfPlayers(state) {
      return state.numberOfPlayers;
    },
    team(state) {
      return state.team;
    }
  },
  actions: {
    
  }
};
