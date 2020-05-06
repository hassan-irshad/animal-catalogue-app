<template>
    <v-app-bar
      app
      color="#ffba39"
      dark
    >
    <v-toolbar-title>Animal Catalogue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn dark color="#5200c6">
      <v-icon dark>mdi-plus</v-icon>
      Add New Animal
    </v-btn>
    <!-- <FormModal :dialog="dialog"/> -->
    </v-app-bar>
</template>

<script>

// import FormModal from './FormModal'

export default {
  name: 'Toolbar'

  // components: {
  //   FormModal
  // },

  // data: () => ({
  //   dialog: false
  // }),

  // methods: {
  //   dialogSwitch: function () {
  //     console.log('d', this.dialog)
  //     this.dialog = true
  //   }
  // }
}
</script>
