<template>
  <div>
      <Range ref="range"/>
      <Roles ref="roles"/>
      <Cycle ref="cycle"/>
  </div>
</template>

<script>
import Range from "../components/Range";
import Roles from "../components/Roles";
import Cycle from "../components/Cycle";

export default {
  name: "Home",
  components: {
    Range,
    Roles,
    Cycle
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
