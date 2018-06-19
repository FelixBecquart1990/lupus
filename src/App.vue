<template>
  <v-app id="app">
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*@font-face {
  font-family: primary;
  src: url(../static/font/Tahu.ttf);
}*/
/*@font-face {
  font-family: secondary;
  src: url(../static/font/gothamrnd-medium.ttf);
}*/
* {
  font-family: primary;
}

#app {
  background-color: #9E4770;
}

.center-screen {
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.round-button{
  height: 100px;
  width: 100px;
  border-radius:50%;
  margin-right:auto;
  margin-left:auto;
}
</style>
