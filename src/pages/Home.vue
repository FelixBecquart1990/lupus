<template>
  <div>
    <v-flex xs12 class="text-xs-center">
      <h1>Vous êtes le Maître du Jeu</h1>
      <h3>Combien de personnes jouent avec vous ?</h3>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-slider
        v-model="value"
        thumb-label
        step="1"
        ticks
        :min="4"
        :max="10"
        ></v-slider>
    </v-flex>
    <v-flex xs4 offset-xs4 center>
      <h2 class="text-xs-center">{{ value }}</h2>
    </v-flex>
    <v-flex xs4 offset-xs4 center>
      <v-btn block color="primary" dark>Play</v-btn>
    </v-flex>
  </div>
</template>

<script>
import Range from "../components/Range";

export default {
  name: "Home",
  components: {
    Range
  },
  data () {
    return {
      value: 0
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
