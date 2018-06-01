import * as firebase from "firebase";

export default {
  state: {
    loading: false,
    range: true,
    roles: false,
    cycle: false,
    night: true,
    werewolfSpot: false,
    chooseDead: false,
    day: false,
    whoIsDead: false,
    villageSpot: false
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
    SET_NIGHT(state, payload) {
      state.night = payload;
    },
    SET_WEREWOLF_SPOT(state, payload) {
      state.werewolfSpot = payload;
    },
    SET_CHOOSE_DEAD(state, payload) {
      state.chooseDead = payload;
    },
    SET_DAY(state, payload) {
      state.day = payload;
    },
    SET_WHO_IS_DEAD(state, payload) {
      state.whoIsDead = payload;
    },
    SET_VILLAGE_SPOT(state, payload) {
      state.villageSpot = payload;
    },
  },
  actions: {
    shuffle({ commit }, a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
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
    },
    night(state) {
      return state.night;
    },
    werewolfSpot(state) {
      return state.werewolfSpot;
    },
    chooseDead(state) {
      return state.chooseDead;
    },
    day(state) {
      return state.day;
    },
    whoIsDead(state) {
      return state.whoIsDead;
    },
    villageSpot(state) {
      return state.villageSpot;
    },
  }
};
