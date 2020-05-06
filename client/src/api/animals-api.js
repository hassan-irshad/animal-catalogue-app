import { apiEndpoint } from '../config'
import Axios from 'axios'

export async function getAnimals () {
  console.log('Fetching animals')

  const response = await Axios.get(`${apiEndpoint}/animals`, {
    headers: {
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${idToken}`
    }
  })
  console.log('animals:', response.data)
  return response.data.animals
}
