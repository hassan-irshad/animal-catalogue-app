<template>
    <v-dialog
      :value="dialogSwitch"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="toggleSwitch"
          >
            Disagree
          </v-btn>

          <!-- <v-btn
            color="green darken-1"
            text
            @click="close"
          >
            Agree
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'FormModal',
  props: ['dialog'],

  // data () {
  //   return {
  //     dialogSwitch: this.dialog
  //   }
  // },

  // computed: {
  //   dialogSwitch: {
  //     get () {
  //       return this.dialog
  //     }
  //     set
  //   }
  // },

  // methods: {
  //   toggleSwitch () {
  //     this.dialogSwitch = false
  //   }
  // }
}
</script>
