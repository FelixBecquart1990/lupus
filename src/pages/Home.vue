<template>
  <div>
      <Range ref="range"/>
      <Roles ref="roles"/>
  </div>
</template>

<script>
import Range from "../components/Range";
import Roles from "../components/Roles";

export default {
  name: "Home",
  components: {
    Range,
    Roles
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
