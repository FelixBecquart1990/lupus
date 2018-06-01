<template>
  <div>
      <Range ref="range"/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    Range: () => import("@/components/Range"),
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
