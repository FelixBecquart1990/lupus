<template>
<div>

    <v-layout row wrap v-for="i in Math.round(this.numberOfPlayers/2)" xs12 :key="`12${i}`">
      <v-flex xs3 v-if="(numberOfPlayers/2 == Math.round(numberOfPlayers/2)) || i != Math.round(numberOfPlayers/2)">
        <v-btn class="round-button" :disabled="team[numberOfPlayers - i].killed" @click="declarePlayer(numberOfPlayers - i + 1)" color="primary">player {{ numberOfPlayers - i + 1 }}</v-btn>
      </v-flex>
      <v-flex xs3>
        <v-btn class="round-button" :disabled="team[i-1].killed" @click="declarePlayer(i)" color="primary">player {{ i }}</v-btn>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>Wolfes - Êtes-vous sûr de tuer le joueur {{ declaredPlayer }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="killPlayer(declaredPlayer)" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
  name: "ChooseDeadByWolfes",
  data() {
    return {
      dialog: false,
      newTeam: null,
      declaredPlayer: 0
    };
  },
  mounted() {
    console.log("C-ChooseDeadByWolfes");
    this.$store.dispatch("triggerBonus");
  },
  computed: {
    numberOfPlayers() {
      return this.$store.getters.numberOfPlayers;
    },
    team() {
      return this.$store.getters.team;
    }
  },
  methods: {
    declarePlayer(i) {
      this.dialog = true;
      this.declaredPlayer = i;
      //console.log("you have declared player", this.declaredPlayer);
    },
    killPlayer(i) {
      this.$store.commit(
        "SET_DEAD",
        this.$store.getters.team[this.declaredPlayer - 1]
      );

      this.newTeam = this.$store.getters.team;
      this.newTeam[i - 1].killed = true;
      this.$store.commit("SET_TEAM", this.newTeam);

      //console.log(this.$store.getters.dead);
      //console.log("you have killed player", i);
      this.$store.commit("SET_CHOOSE_DEAD_WOLFES", false);
      this.$store.commit("SET_DAY", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round-button{
  height: 100px;
  border-radius:50px;
}
</style>
