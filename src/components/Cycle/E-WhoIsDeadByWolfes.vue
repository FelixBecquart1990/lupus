<template>
  <v-container fluid @click="next()">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img v-if="dead.role == 'villager'" src="../../../static/img/emojis/facepalm.png" alt="day" class="mb-5">
        <img v-if="dead.role == 'wolf'" src="../../../static/img/emojis/wolf.png" alt="day" class="mb-5">
        <p class="text-xs-center">Le joueur {{dead.player}} a été tué <br>C'était un {{dead.role}}</p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "WhoIsDeadByWolfes",
  mounted() {
    console.log("E-WhoIsDeadByWolfes");
    this.$store.dispatch("triggerBonus");
  },
  methods: {
    next() {
      this.$store.dispatch("checkIfEndGame");
      this.$store.commit("SET_WHO_IS_DEAD_BY_WOLFES", false);
      this.$store.commit("SET_VILLAGE_SPOT", true);
    }
  },
  computed: {
    dead() {
      return this.$store.getters.dead;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
