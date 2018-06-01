<template>
  <v-app id="app">
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style>

@font-face {
  font-family: primary;
  src: url(../static/font/Tahu.ttf);
}
/*@font-face {
  font-family: secondary;
  src: url(../static/font/gothamrnd-medium.ttf);
}*/
* {
  font-family: primary;
}
</style>
