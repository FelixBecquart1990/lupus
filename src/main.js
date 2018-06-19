// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//import firebase from "firebase";
import { store } from "./store";

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  /*created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBYozTouIa4zvAF9Odu2ng4xoVdxo2NFCo",
      authDomain: "play-lupus.firebaseapp.com",
      databaseURL: "https://play-lupus.firebaseio.com",
      projectId: "play-lupus",
      storageBucket: "play-lupus.appspot.com",
      messagingSenderId: "23422226466"
    });
    // auth
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("fetchUserData", user).then(data => {});
      } else {
        console.log("no user");
      }
    });
  }*/
})
