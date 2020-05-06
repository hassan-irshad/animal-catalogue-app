<template>
  <v-container>
    <Toolbar />
    <h1>Login to continue</h1>
     <v-btn
      color="warning"
      @click="signIn"
    >
      Login
    </v-btn>
  </v-container>
</template>

<script>
import { login } from '../auth/index'
import Toolbar from '../components/Toolbar'

export default {
  name: 'Login',
  components: {
    Toolbar
  },
  methods: {
    signIn () {
      login()
    }
  }
}
</script>
