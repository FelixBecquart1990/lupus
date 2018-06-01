<template>
  <v-container fluid @click="next()">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../../static/img/emojis/facepalm.png" alt="day" class="mb-5">
        <p class="text-xs-center">Le village a tué le joueur {{dead.player}} <br>C'était un villageois</p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "WhoIsDeadByVillage",
  methods: {
    next() {
      this.$store.commit("SET_WHO_IS_DEAD_BY_VILLAGE", false);
      this.$store.commit("SET_VILLAGE_NIGHT", true);
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
