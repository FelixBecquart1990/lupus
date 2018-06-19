<template>
  <div>    
    <v-dialog v-model="dialog" max-width="290" persistent>
      <v-card>
        <v-card-text>Le joueur {{ playerWhoDrink }} boit une gorgée</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         <v-btn color="green darken-1" flat="flat" @click="done()">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
export default {
  name: "OneShotToRandomPlayer",
  data() {
    return {
      dialog: false,
      playerWhoDrink: null
    };
  },
  mounted(){
    this.selectRandomPlayer()
  },
  methods: {
    selectRandomPlayer() {
      // random number between 0 and 3*number of players
      let playerNumber = Math.floor(Math.random() * this.team.length*3)
      console.log("random player number: ", playerNumber)
      if (playerNumber < this.team.length && this.team[playerNumber].killed == false) {
        this.dialog = true
        this.playerWhoDrink = this.team[playerNumber].player
      }
    },
    done() {
      this.$store.commit("SET_ONE_SHOT_TO_RANDOM_PLAYER", false);
      this.dialog = false;
    }
  },
  computed: {
    team() {
      return this.$store.getters.team;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
