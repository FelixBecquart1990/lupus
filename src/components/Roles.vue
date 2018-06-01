<template>
<div>
  <div v-for="player in numberOfPlayers">
    ok
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Roles",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["numberOfPlayers"])
  },
  methods:{

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
