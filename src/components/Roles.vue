<template>
<div>
  <v-layout>
    <v-flex xs4 offset-xs4 center>
      <v-btn v-if="hidden" @click="discoverPlayer()" block color="primary" dark>Joueur {{player+1}} - Découvrir mon rôle</v-btn>
      <v-btn v-if="!hidden && this.player < this.team.length" @click="hide()" block color="primary" dark>Joueur suivant</v-btn>
      <v-btn v-if="this.player >= this.team.length" @click="next()" block color="primary" dark>Continuer</v-btn>

      <v-layout v-if="currentRole != '' && !hidden" column align-center>
        <img v-if="currentRole == 'villager'" src="../../static/img/emojis/villager.png" alt="wolf" class="mb-5">
        <img v-if="currentRole == 'wolf'" src="../../static/img/emojis/wolf.png" alt="wolf" class="mb-5">
        <p class="text-xs-center" @click="nextPlayer()">{{ player }} - Tu es un {{ currentRole }}</p>
      </v-layout>

    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  name: "Roles",
  data() {
    return {
      hidden:true,
      team: [],
      player: 0,
      currentRole: ""
    };
  },
  mounted() {
    let roles = [];
    /*for (let i = 0; i < this.numberOfPlayers - 1; i++) {
      roles.push("villager");
    }*/
    if (this.numberOfPlayers == 4) {
      roles = ["wolf", "villager", "villager", "villager"];
    } else if (this.numberOfPlayers == 5) {
      roles = ["wolf", "villager", "villager", "villager", "villager"];
    }else if (this.numberOfPlayers == 6) {
      roles = ["wolf", "wolf", "villager", "villager", "villager", "villager"];
    }else if (this.numberOfPlayers == 7) {
      roles = ["wolf", "wolf", "villager", "villager", "villager", "villager", "villager"];
    }else if (this.numberOfPlayers == 8) {
      roles = ["wolf", "wolf", "villager", "villager", "villager", "villager", "villager", "villager"];
    }else if (this.numberOfPlayers == 9) {
      roles = ["wolf", "wolf", "villager", "villager", "villager", "villager", "villager", "villager", "villager"];
    }else if (this.numberOfPlayers == 10) {
      roles = ["wolf", "wolf", "wolf", "villager", "villager", "villager", "villager", "villager", "villager", "villager"];
    }

    const shuffleArray = arr =>
      arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

    roles = shuffleArray(roles);

    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.team.push({ role: roles[i], killed: false, player: i + 1 });
    }

    this.$store.commit("SET_TEAM", this.team);
  },
  methods: {
    next(){
      this.$store.commit("SET_ROLES", false);
      this.$store.commit("SET_CYCLE", true);
    },
    hide(){
      this.hidden = true
    },
    discoverPlayer() {
      this.hidden = false

        this.currentRole = this.team[this.player].role;
        //console.log(this.team[this.player].role);
        this.player++;
      
    }
  },
  computed: {
    numberOfPlayers() {
      return this.$store.getters.numberOfPlayers;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
