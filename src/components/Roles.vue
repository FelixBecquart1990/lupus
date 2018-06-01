<template>
<div>
  <v-layout>
    <v-flex xs4 offset-xs4 center>
      <v-btn @click="discoverPlayer()" block color="primary" dark>Discover first player</v-btn>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  name: "Roles",
  data() {
    return {
      team: [],
      player: 0
    };
  },
  mounted() {
    let roles = ["wolf"];
    for (let i = 0; i < this.numberOfPlayers - 1; i++) {
      roles.push("villager");
    }

    const shuffleArray = arr =>
      arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

    roles = shuffleArray(roles);

    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.team.push({role:roles[i], killed:false, player:i+1});
    }

    this.$store.commit("SET_TEAM", this.team);

    console.log(this.team);
  },
  methods: {
    discoverPlayer() {
      alert(this.team[this.player].role);
      this.player++;
      if (this.player >= this.team.length) {
        this.$store.commit("SET_ROLES", false);
        this.$store.commit("SET_CYCLE", true);
      }
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
