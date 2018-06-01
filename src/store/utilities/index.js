import * as firebase from "firebase";

export default {
  state: {
    loading: false,
    range: true,
    roles: false,
    cycle: false,
    night: true,
    werewolfSpot: false,
    chooseDeadByWolfes: false,
    chooseDeadByVillage: false,
    day: false,
    whoIsDeadByWolfes: false,
    whoIsDeadByVillage: false,
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
    SET_CHOOSE_DEAD_WOLFES(state, payload) {
      state.chooseDeadByWolfes = payload;
    },
    SET_CHOOSE_DEAD_VILLAGE(state, payload) {
      state.chooseDeadByVillage = payload;
    },
    SET_DAY(state, payload) {
      state.day = payload;
    },
    SET_WHO_IS_DEAD_BY_WOLFES(state, payload) {
      state.whoIsDeadByWolfes = payload;
    },
    SET_WHO_IS_DEAD_BY_VILLAGE(state, payload) {
      state.whoIsDeadByVillage = payload;
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
    chooseDeadByWolfes(state) {
      return state.chooseDeadByWolfes;
    },
    chooseDeadByVillage(state) {
      return state.chooseDeadByVillage;
    },
    day(state) {
      return state.day;
    },
    whoIsDeadByWolfes(state) {
      return state.whoIsDeadByWolfes;
    },
    whoIsDeadByVillage(state) {
      return state.whoIsDeadByVillage;
    },
    villageSpot(state) {
      return state.villageSpot;
    },
  }
};
