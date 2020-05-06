<template>
    <v-btn
    color="warning"
    @click="signIn"
    >
    Login
    </v-btn>
</template>

<script>
import { login } from '../auth/index'
export default {
  name: 'Login',
  methods: {
    signIn () {
      login()
    }
  }
}
</script>
