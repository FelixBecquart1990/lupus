<template>
  <v-container fluid @click="next()">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../../static/img/emojis/day.png" alt="day" class="mb-5">
        <p class="text-xs-center"> Le jour se lève, le village se réveille</p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "Day",
  mounted() {
    console.log("D-Day");
    this.$store.dispatch("triggerBonus");
  },
  methods: {
    next() {
      this.$store.commit("SET_DAY", false);
      this.$store.commit("SET_WHO_IS_DEAD_BY_WOLFES", true);
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
