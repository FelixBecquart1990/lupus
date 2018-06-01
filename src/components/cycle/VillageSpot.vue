<template>
  <v-container fluid @click="next()">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../../static/img/emojis/pointing.png" alt="pointing" class="mb-5">
        <p class="text-xs-center"> Le village désigne sa victime </p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "VillageSpot",
  methods: {
    next() {
      this.$store.commit("SET_VILLAGE_SPOT", false);
      this.$store.commit("SET_CHOOSE_DEAD", true);
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
