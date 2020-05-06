<template>
    <v-app-bar
      app
      color="#ffba39"
      dark
    >
    <v-toolbar-title>Animal Catalogue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn dark color="#5200c6" @click="navigate">
      <v-icon dark>mdi-plus</v-icon>
      Add New Animal
    </v-btn>
    </v-app-bar>
</template>

<script>

import router from '../router/index'

export default {
  name: 'Toolbar',

  methods: {
    navigate () {
      router.push({ name: 'CreateAnimal' })
    }
  }
}
</script>
