<template>
<div>

    <v-btn
      @click="openModal()"
        dark
        fixed
        bottom
        left
        fab
        color="primary"
      >
      <v-icon>people</v-icon>
    </v-btn>

  <v-dialog v-model="modalTeam" fullscreen  hide-overlay transition="dialog-bottom-transition">
    <v-card class="pa-3 color-back">
      <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="closeModal()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
      </v-toolbar>

    <v-layout row wrap v-for="i in Math.round(this.numberOfPlayers/2)" xs12 :key="`12${i}`">
      <v-flex xs3 v-if="(numberOfPlayers/2 == Math.round(numberOfPlayers/2)) || i != Math.round(numberOfPlayers/2)">
        <v-btn :disabled="team[numberOfPlayers - i].killed" color="primary">player {{ numberOfPlayers - i + 1 }} <br>{{team[numberOfPlayers - i].role}}</v-btn>
      </v-flex>
      <v-flex xs3>
        <v-btn :disabled="team[i-1].killed" color="primary">player {{ i }}<br>{{team[i-1].role}}</v-btn>
      </v-flex>
    </v-layout>

    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: "ModalTeam",
  computed: {
    numberOfPlayers() {
      return this.$store.getters.numberOfPlayers;
    },
    team() {
      return this.$store.getters.team;
    },
    modalTeam: {
      get() {
        return this.$store.getters.modalTeam;
      },
      set() {
        this.$store.commit("SET_MODAL_TEAM", false);
      }
    }
  },
  methods: {
    openModal() {
      this.$store.commit("SET_MODAL_TEAM", true);
    },
    closeModal() {
      this.$store.commit("SET_MODAL_TEAM", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
