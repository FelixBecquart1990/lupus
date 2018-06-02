export default {
  state: {
    numberOfPlayers: 4,
    team: [],
    modalTeam:false,
  },
  mutations: {
    SET_NUMBER_OF_PLAYERS(state, payload) {
      state.numberOfPlayers = payload;
    },
    SET_TEAM(state, payload) {
      state.team = payload;
    },
    SET_MODAL_TEAM(state, payload) {
      state.modalTeam = payload
    }
  },
  getters: {
    numberOfPlayers(state) {
      return state.numberOfPlayers;
    },
    team(state) {
      return state.team;
    },
    modalTeam(state) {
      return state.modalTeam;
    }
  },
  actions: {
    
  }
};
