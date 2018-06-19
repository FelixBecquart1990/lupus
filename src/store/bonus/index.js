export default {
  state: {
    oneShotToRandomPlayer: false
  },
  mutations: {
    SET_ONE_SHOT_TO_RANDOM_PLAYER(state, payload) {
      state.oneShotToRandomPlayer = payload;
    }
  },
  actions: {
    triggerBonus({ commit }){
      console.log("trigger bonus")
      commit("SET_ONE_SHOT_TO_RANDOM_PLAYER", true);
    }
  },
  getters: {
    oneShotToRandomPlayer(state) {
      console.log("déclanchement getter")
      return state.oneShotToRandomPlayer;
    }
  }
};
