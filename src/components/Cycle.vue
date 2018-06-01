<template>
  <div>
    cycle
    <Night ref="night"/>
    <WerewolfSpot ref="werewolfSpot"/>
    <ChooseDead ref="chooseDead"/>
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
