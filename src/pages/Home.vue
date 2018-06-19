<template>
  <div>
      <HowToPlay v-if="howtoplay" ref="howtoplay"/>
      <Range v-if="range" ref="range"/>
      <Roles v-if="roles" ref="roles"/>
      <Cycle v-if="cycle" ref="cycle"/>
  </div>
</template>

<script>
import HowToPlay from "../components/HowToPlay";
import Range from "../components/Range";
import Roles from "../components/Roles";
import Cycle from "../components/Cycle";

export default {
  name: "Home",
  components: {
    HowToPlay,
    Range,
    Roles,
    Cycle
  },
  computed: {
    howtoplay() {
      return this.$store.getters.howtoplay;
    },
    range() {
      return this.$store.getters.range;
    },
    roles() {
      return this.$store.getters.roles;
    },
    cycle() {
      return this.$store.getters.cycle;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
