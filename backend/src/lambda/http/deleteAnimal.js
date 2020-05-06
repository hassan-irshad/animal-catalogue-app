'use strict'

const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')

exports.handler = async event => {
  console.log('Processing Event: ', event)

  const animalId = event.pathParameters.animalId

  await connectToDatabase()
  const animal = await Animal.findOneAndDelete({
    _id: animalId
  })

  if (!animal) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Provide animalId not found.'
      })
    }
  }


  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Delete Successfull'
    })
  }
}