<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :style="{marginTop: marginTop}"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.name}}
    </v-card-title>

    <v-card-subtitle>
      {{item.description}}
    </v-card-subtitle>

  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['item'],

  data: () => ({
    marginTop: '10px',
    title: 'Hassan'
  })
}
</script>
