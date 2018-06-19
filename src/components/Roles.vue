<template>
<div>
  <v-layout>
    <v-flex xs4 offset-xs4 center>
      <div v-if="hidden" @click="discoverPlayer()" block color="primary" class="text-xs-center">
        <h1>Prêt ?</h1>
      </div>
      <!--<v-btn v-if="!hidden && this.player + 1 < this.team.length" @click="hide()" block color="primary" dark>Joueur suivant</v-btn>
      <v-btn v-if="this.player + 1 >= this.team.length && !hidden" @click="next()" block color="primary" dark>Continuer</v-btn>-->

      <v-layout v-if="!hidden && this.player < this.team.length" column align-center @click="hide()">
        <img v-if="currentRole == 'villager'" src="../../static/img/emojis/villager.png" alt="wolf" class="mb-5">
        <img v-if="currentRole == 'wolf'" src="../../static/img/emojis/wolf.png" alt="wolf" class="mb-5">
        <!--<p class="text-xs-center">Tu es un {{ currentRole }}</p>-->
      </v-layout>


    </v-flex>

  </v-layout>
  <div id="playerNumber">
    <h1>{{ player + 1 }}</h1>
  </div>
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
      if (this.player == this.team.length -1)
      {
        this.$store.commit("SET_ROLES", false);
        this.$store.commit("SET_CYCLE", true);
      }else{
        this.hidden = true;
        this.player++;
      }

    },
    discoverPlayer() {
      this.hidden = false
      this.currentRole = this.team[this.player].role;
      //console.log(this.team[this.player].role);


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
#playerNumber {
  position: absolute;
  right: auto;
  bottom: 0;
}
#playerNumber h1 {
  font-size: 10em;
}
</style>
