import { apiEndpoint } from '../config'
import Axios from 'axios'
import { getIdToken } from '../auth/index'

export async function getAnimals () {
  console.log('Fetching animals')
  const idToken = getIdToken()

  const response = await Axios.get(`${apiEndpoint}/animals`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
  console.log('animals:', response.data)
  return response.data.animals
}

export async function deleteAnimal (animalId) {
  const idToken = getIdToken()
  await Axios.delete(`${apiEndpoint}/animals/${animalId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
}

export async function createAnimal (newAnimal) {
  const idToken = getIdToken()
  const response = await Axios.post(`${apiEndpoint}/animals`, JSON.stringify(newAnimal), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
  return response.data.newAnimal
}

export async function getUploadUrl (animalId) {
  const idToken = getIdToken()
  const response = await Axios.post(`${apiEndpoint}/animals/${animalId}/attachment`, '', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
  return response.data.uploadUrl
}

export async function uploadFile (uploadUrl, file) {
  await Axios.put(uploadUrl, file)
}
