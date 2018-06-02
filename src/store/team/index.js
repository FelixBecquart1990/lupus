export default {
  state: {
    numberOfPlayers: 4,
    team: [],
    modalTeam:false,
    winners: null
  },
  mutations: {
    SET_NUMBER_OF_PLAYERS(state, payload) {
      state.numberOfPlayers = payload;
    },
    SET_TEAM(state, payload) {
      state.team = payload;
    },
    SET_WINNERS(state, payload) {
      state.winners = payload;
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
    winners(state) {
      return state.winners;
    },
    modalTeam(state) {
      return state.modalTeam;
    }
  },
  actions: {
    
  }
};
