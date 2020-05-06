<template>
  <div class="home">
    <Card v-for="item in animals" :key="item._id" :item="item"/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
// const axios = require('axios').default
import { getAnimals } from '../api/animals-api'

export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {
      animals: []
    }
  },
  async mounted () {
    this.animals = await getAnimals()
    console.log('inside home', this.animals)
  }
}
</script>
