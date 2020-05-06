<template>
    <v-overlay>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>
<script>
import { handleAuthentication } from '../auth/index'
export default {
  name: 'Callback',
  mounted () {
    console.log('callback')
    handleAuthentication()
  }
}
</script>
