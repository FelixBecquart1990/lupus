<template>
<div>
  <div v-for="player in numberOfPlayers">
    ok
  </div>
</div>
</template>

<script>

export default {
  name: "Roles",
  data() {
    return {
    };
  },
  mounted(){

  },
  computed: {
    numberOfPlayers() {
      return this.$store.getters.numberOfPlayers;
    },
  },
  methods:{

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
