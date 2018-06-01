<template>
  <div>
    cycle
    <Night ref="night"/>
  </div>
</template>

<script>
  import Night from "../components/cycle/Night";
  export default {
    name: "Cycle",
    components: {
      Night
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
