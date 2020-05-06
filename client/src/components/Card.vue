<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :style="{marginTop: marginTop}"
  >
    <v-img
      :src="item.imageUrl"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.name}}
    </v-card-title>

    <v-card-subtitle>
      {{item.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        :loading="loading"
        color="orange"
        text
        @click="removeAnimal"
      >
        Delete
      </v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>
import { deleteAnimal } from '../api/animals-api'

export default {
  name: 'Card',
  props: ['item'],

  data: () => ({
    marginTop: '10px',
    loading: false
  }),
  methods: {
    async removeAnimal (event) {
      try {
        this.loading = true
        await deleteAnimal(this.item._id)
        this.loading = false
        this.$emit('clicked', 'deleted')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
