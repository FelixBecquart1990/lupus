<template>
  <div>
    cycle
    <Night v-if="night" ref="night"/>
    <WerewolfSpot v-if="werewolfSpot" ref="werewolfSpot"/>
    <ChooseDead v-if="chooseDead" ref="chooseDead"/>
  </div>
</template>

<script>
  import Night from "../components/cycle/Night";
  import WerewolfSpot from "../components/cycle/WerewolfSpot";
  import ChooseDead from "../components/cycle/ChooseDead";

  export default {
    name: "Cycle",
    components: {
      Night,
      WerewolfSpot,
      ChooseDead
    },
    computed: {
    night() {
      return this.$store.getters.night;
    },
    werewolfSpot() {
      return this.$store.getters.werewolfSpot;
    },
    chooseDead() {
      return this.$store.getters.chooseDead;
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
