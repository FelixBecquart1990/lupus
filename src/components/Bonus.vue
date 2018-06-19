<template>
  <div>
    bonus

    <OneShotToRandomPlayer ref="oneShotToRandomPlayer"/>


  </div>
</template>

<script>
import OneShotToRandomPlayer from "../components/bonus/OneShotToRandomPlayer";

export default {
  name: "Bonus",
  components: {
    OneShotToRandomPlayer
  },
  computed: {
    /*night() {
      return this.$store.getters.night;
    }*/
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
