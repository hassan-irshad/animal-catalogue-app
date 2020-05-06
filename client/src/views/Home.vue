<template>
  <div class="home">
    <Card v-for="item in animals" :key="item._id" :item="item" @clicked="onClickDelete"/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
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
  },
  methods: {
    async onClickDelete (value) {
      this.animals = await getAnimals()
    }
  }
}
</script>
