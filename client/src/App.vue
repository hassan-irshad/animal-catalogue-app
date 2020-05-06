<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <Home/>
      <!-- <Card/> -->
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Home from '@/views/Home.vue'
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'App',

  components: {
    Home,
    Toolbar
  },

  data: () => ({
    //
  })
}
</script>
