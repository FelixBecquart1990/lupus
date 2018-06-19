<template>
  <div>
    <v-layout row wrap>
      <v-flex v-for="i in this.numberOfPlayers" xs6 :key="`6${i}`">
        <v-btn v-if="team[i-1].killed==false" @click="declarePlayer(i)" color="primary">player {{ i }}</v-btn>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>village - Êtes-vous sûr de tuer le joueur {{ declaredPlayer }}</v-card-text>
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
  name: "ChooseDeadByVillage",
  data() {
    return {
      newTeam: null,
      dialog: false,
      declaredPlayer: 0
    };
  },
  mounted() {
    console.log("G-ChooseDeadByVillage");
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
      console.log("you have declared player", this.declaredPlayer);
    },
    killPlayer(i) {
      this.$store.commit(
        "SET_DEAD",
        this.$store.getters.team[this.declaredPlayer - 1]
      );

      this.newTeam = this.$store.getters.team;
      this.newTeam[i - 1].killed = true;
      this.$store.commit("SET_TEAM", this.newTeam);

      console.log(this.$store.getters.dead);
      console.log("you have killed player", i);
      this.$store.commit("SET_CHOOSE_DEAD_VILLAGE", false);
      this.$store.commit("SET_WHO_IS_DEAD_BY_VILLAGE", true);
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
