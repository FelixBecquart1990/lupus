<template>
  <div>
    cycle

    <Night v-if="night" ref="night"/>
    <WerewolfSpot v-if="werewolfSpot" ref="werewolfSpot"/>
    <ChooseDeadByWolfes v-if="chooseDeadByWolfes" ref="chooseDeadByWolfes"/>
    <ChooseDeadByVillage v-if="chooseDeadByVillage" ref="chooseDeadByVillage"/>
    <Day v-if="day" ref="day"/>
    <WhoIsDead v-if="whoIsDead" ref="whoIsDead"/>
    <VillageSpot v-if="villageSpot" ref="villageSpot"/>

  </div>
</template>

<script>
import Night from "../components/cycle/Night";
import WerewolfSpot from "../components/cycle/WerewolfSpot";
import ChooseDeadByWolfes from "../components/cycle/ChooseDeadByWolfes";
import ChooseDeadByVillage from "../components/cycle/ChooseDeadByVillage";
import Day from "../components/cycle/Day";
import WhoIsDead from "../components/cycle/WhoIsDead";
import VillageSpot from "../components/cycle/VillageSpot";

export default {
  name: "Cycle",
  components: {
    Night,
    WerewolfSpot,
    ChooseDeadByWolfes,
    ChooseDeadByVillage,
    Day,
    WhoIsDead,
    VillageSpot
  },
  computed: {
    night() {
      return this.$store.getters.night;
    },
    werewolfSpot() {
      return this.$store.getters.werewolfSpot;
    },
    chooseDeadByWolfes() {
      return this.$store.getters.chooseDeadByWolfes;
    },
    chooseDeadByVillage() {
      return this.$store.getters.chooseDeadByVillage;
    },
    day() {
      return this.$store.getters.day;
    },
    whoIsDead() {
      return this.$store.getters.whoIsDead;
    },
    villageSpot() {
      return this.$store.getters.villageSpot;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
