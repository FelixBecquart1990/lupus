export default {
  state: {
    dead: null,
    modalEndGame: false
  },
  mutations: {
    SET_DEAD(state, payload) {
      state.dead = payload;
    },
    SET_MODAL_END_GAME(state, payload) {
      state.modalEndGame = payload;
    }
  },
  actions: {
    checkIfEndGame({ commit, getters, state, dispatch }) {
      let team = getters.team;
      let wolfs = 0
      let villagers = 0
      for (let player in team){
        //console.log(team[player])
        if (team[player].role == "wolf" && team[player].killed == false){
          wolfs++
        }
        if (team[player].role == "villager" && team[player].killed == false){
          villagers++
        }
      }
      //console.log("villagers", villagers, " wolfs", wolfs)

      if (wolfs == 0){
        commit("SET_WINNERS", "villagers")
        commit("SET_MODAL_END_GAME", true);
      }else if (villagers == 0){
        commit("SET_WINNERS", "wolfs")
        commit("SET_MODAL_END_GAME", true);
      }
      //commit("SET_MODAL_END_GAME", true);
    }
  },
  getters: {
    dead(state) {
      return state.dead;
    },
    modalEndGame(state) {
      return state.modalEndGame;
    }
  }
};
