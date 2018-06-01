import Vue from "vue";
import Vuex, { createNamespacedHelpers } from "vuex";
import user from './user'
import utilities from './utilities'
import team from './team'
import game from './game'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    utilities,
    team,
    game
  }
});
