<template>
  <div>
    cycle

    <Night v-if="night" ref="night"/>
    <WerewolfSpot v-if="werewolfSpot" ref="werewolfSpot"/>
    <ChooseDeadByWolfes v-if="chooseDeadByWolfes" ref="chooseDeadByWolfes"/>
    <Day v-if="day" ref="day"/>
    <WhoIsDeadByWolfes v-if="whoIsDeadByWolfes" ref="whoIsDeadByWolfes"/>
    <VillageSpot v-if="villageSpot" ref="villageSpot"/>
    <ChooseDeadByVillage v-if="chooseDeadByVillage" ref="chooseDeadByVillage"/>
    <WhoIsDeadByVillage v-if="whoIsDeadByVillage" ref="whoIsDeadByVillage"/>
    
    <ModalTeam ref="modalTeam"/>
    <ModalEndGame ref="modalEndGame"/>

    <Bonus ref="bonus"/>


  </div>
</template>

<script>
import Bonus from "./Bonus";

import Night from "../components/cycle/A-Night";
import WerewolfSpot from "../components/cycle/B-WerewolfSpot";
import ChooseDeadByWolfes from "../components/cycle/C-ChooseDeadByWolfes";
import Day from "../components/cycle/D-Day";
import WhoIsDeadByWolfes from "../components/cycle/E-WhoIsDeadByWolfes";
import VillageSpot from "../components/cycle/F-VillageSpot";
import ChooseDeadByVillage from "../components/cycle/G-ChooseDeadByVillage";
import WhoIsDeadByVillage from "../components/cycle/H-WhoIsDeadByVillage";

import ModalTeam from "../components/ModalTeam";
import ModalEndGame from "../components/ModalEndGame";

export default {
  name: "Cycle",
  components: {
    Bonus,
    Night,
    WerewolfSpot,
    ChooseDeadByWolfes,
    ChooseDeadByVillage,
    Day,
    WhoIsDeadByWolfes,
    WhoIsDeadByVillage,
    VillageSpot,
    ModalTeam,
    ModalEndGame
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
    whoIsDeadByWolfes() {
      return this.$store.getters.whoIsDeadByWolfes;
    },
    whoIsDeadByVillage() {
      return this.$store.getters.whoIsDeadByVillage;
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
