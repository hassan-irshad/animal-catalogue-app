<template>
  <div>
    <Toolbar />
    <v-container>
    <v-btn
    dark color="#5200c6"
    @click="navigate"
    >
      <v-icon dark>mdi-plus</v-icon>
      Add New Animal
    </v-btn>
    <div v-if="animals">
      <h3 v-if="animals.length === 0">No animals! Add animals by clicking the above button.</h3>
      <Card v-for="item in animals" :key="item._id" :item="item" @clicked="fetchAnimals"/>
    </div>
    </v-container>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { getAnimals } from '../api/animals-api'
import Toolbar from '../components/Toolbar'
import router from '../router/index'

export default {
  name: 'Home',
  components: {
    Card,
    Toolbar
  },
  data () {
    return {
      animals: null
    }
  },
  async mounted () {
    this.fetchAnimals()
  },
  methods: {
    navigate () {
      router.push({ name: 'CreateAnimal' })
    },
    async fetchAnimals () {
      try {
        this.animals = await getAnimals()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
