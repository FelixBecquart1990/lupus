/*import * as firebase from "firebase";

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_UID(state, payload) {
      state.user.uid = payload;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    currentUser(state) {
      return state.user;
    }
  },
  actions: {
    logout({ commit }) {
      firebase.auth().signOut();
    },
    createAnonymousUser({ commit, state }) {
      firebase
        .auth()
        .signInAnonymously()
        .then(data => {
          commit("SET_UID", data.uid);
          firebase
            .database()
            .ref("users/" + data.uid)
            .update(state.user);
        });
    },
    fetchUserData({ commit, state, dispatch }, payload) {
      //console.log("Fetch user's data");
      firebase
        .database()
        .ref("/users/" + payload.uid)
        .once("value")
        .then(data => {
          commit("SET_USER", data.val());
          dispatch("updateUserData");
        });
    },
    updateUserData({ commit, getters, state, dispatch }, payload) {
      //console.log("Update user's data");
      firebase
      .database()
      .ref("users/" + getters.user.uid)
      .on("child_changed", snapshot => {
        //console.log(snapshot.key);
        //console.log(snapshot.val());
      });
    },
  }
};
*/