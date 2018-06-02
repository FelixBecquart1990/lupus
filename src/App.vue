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

</style>
