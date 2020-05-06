<template>
    <v-app-bar
      app
      color="#ffba39"
      dark
    >
    <v-toolbar-title>Animal Catalogue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
    dark color="#5200c6"
    @click="signOut"
    v-if="authenticateCheck">
      Logout
    </v-btn>
    </v-app-bar>
</template>

<script>

import { isAuthenticated, logout } from '../auth/index'

export default {
  name: 'Toolbar',

  methods: {
    signOut () {
      logout()
    }
  },
  computed: {
    authenticateCheck () {
      return isAuthenticated()
    }
  }
}
</script>
