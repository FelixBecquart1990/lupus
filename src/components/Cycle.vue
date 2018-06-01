<template>
  <div>
    cycle
    <Night ref="night"/>
    <WerewolfSpot ref="werewolfSpot"/>
  </div>
</template>

<script>
  import Night from "../components/cycle/Night";
  import WerewolfSpot from "../components/cycle/WerewolfSpot";

  export default {
    name: "Cycle",
    components: {
      Night,
      WerewolfSpot
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
