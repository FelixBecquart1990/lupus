<template>
<div>
  <v-btn @click="getTeam()">Discover first player</v-btn>
</div>
</template>

<script>
export default {
  name: "Roles",
  data() {
    return {
      team: []
    };
  },
  methods: {
    getTeam() {
      this.team = ["wolf"]
      for (let i = 0; i < this.numberOfPlayers-1; i++) {
        this.team.push("villager");
      }
      console.log(this.team);
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
