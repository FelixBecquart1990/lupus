<template>
<div>
  
  <v-dialog v-model="modalEndGame" fullscreen  hide-overlay>
    <v-card class="pa-3 color-back">
      End of the game<br>
      {{winners}} win<br>
      Refresh to play again

    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: "ModalEndGame",
  computed: {
    winners() {
      return this.$store.getters.winners;
    },
    modalEndGame: {
      get() {
        return this.$store.getters.modalEndGame;
      },
      set() {
        this.$store.commit("SET_MODAL_END_GAME", false);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
