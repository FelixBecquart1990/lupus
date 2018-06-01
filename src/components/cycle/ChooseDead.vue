<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout>
        <v-flex v-for="i in this.numberOfPlayers" xs12>
          <v-btn @click="declarePlayer(i)" @click.native.stop="dialog = true" block color="primary" dark>{{ i }}</v-btn>
        </v-flex>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-text>Êtes-vous sûr de tuer le joueur {{ declaredPlayer }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" flat="flat" @click="killPlayer(declaredPlayer)" @click.native="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name: "ChooseDead",
    methods: {
      declarePlayer(i) {
        this.declaredPlayer = i;
        console.log("you have declared player", this.declaredPlayer);
      },
      killPlayer(i) {
        console.log("you have killed player", i);
      }
    },
    computed: {
      numberOfPlayers() {
        return this.$store.getters.numberOfPlayers;
      }
    },
    data () {
      return {
        dialog: false,
        declaredPlayer: 0
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
