<template>
  <v-container fluid>
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col lg="10">
        <h1>Create Animal</h1>
        <v-form
          ref="form"
        >
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="description"
            label="Description"
            required
          ></v-text-field>

          <v-file-input
            v-model="image"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an image"
            prepend-icon="mdi-camera"
            label="Image"
          ></v-file-input>

          <p v-if="status !== null">{{status}}</p>
          <v-btn
            color="warning"
            :loading="loading"
            @click="submit"
          >
          Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createAnimal, getUploadUrl, uploadFile } from '../api/animals-api'
import router from '../router/index'
export default {
  name: 'CreateAnimal',

  data () {
    return {
      name: null,
      description: null,
      image: null,
      status: null,
      loading: false
    }
  },

  methods: {
    async submit () {
      try {
        this.loading = true
        this.status = 'Creating'
        const result = await createAnimal({ name: this.name, description: this.description })
        this.status = 'Getting upload url'
        const uploadUrl = await getUploadUrl(result._id)
        this.status = 'Uploading'
        await uploadFile(uploadUrl, this.image)
        this.status = null
        this.loading = false
        router.push({ name: 'Home' })
      } catch (e) {
        this.status = null
        this.loading = false
        alert(e)
      }
    }
  }
}
</script>
