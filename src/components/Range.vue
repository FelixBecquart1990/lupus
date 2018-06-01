<template>
  <div>
    <v-flex xs12 class="text-xs-center">
      <h1>Vous êtes le Maître du Jeu</h1>
      <h3>Combien de personnes jouent avec vous ?</h3>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-slider
        v-model="numberOfPlayers"
        thumb-label
        step="1"
        ticks
        :min="4"
        :max="10"
        ></v-slider>
    </v-flex>
    <v-flex xs4 offset-xs4 center>
      <h2 class="text-xs-center">{{ numberOfPlayers }}</h2>
    </v-flex>
    <v-flex xs4 offset-xs4 center>
      <v-btn @click="storeNumberOfPlayers()" block color="primary" dark>Play</v-btn>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "Range",
  data() {
    return {
      numberOfPlayers: 4
    };
  },
  methods: {
    storeNumberOfPlayers() {
      this.$store.commit("SET_NUMBER_OF_PLAYERS", this.numberOfPlayers);
      this.$store.commit("SET_RANGE", false);
      this.$store.commit("SET_ROLES", true);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
