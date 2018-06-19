<template>
  <div>
    <v-flex xs12 class="text-xs-center" style="margin-top:150px;">
      <h2>1. Choisissez 1 Maître du jeu et asseyez vous en cercle autour de lui</h2>
      <h2>2. Faîtes tourner le téléphone pour que chacun découvre son rôle</h2>
      <h2>3. Le Maître du jeu suit les indications qui s'affichent à l'écran</h2>
    </v-flex>
    <v-flex xs4 offset-xs4 center>
      <v-btn @click="play()" block color="primary" dark>C'est parti !</v-btn>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "HowToPlay",
  methods: {
    play() {
      this.$store.commit("SET_HOWTOPLAY", false);
      this.$store.commit("SET_RANGE", true);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
