'use strict'

const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')
const parseUserId = require('../../auth/utils')

exports.handler = async event => {
  console.log('Processing Event: ', event)

  const animalId = event.pathParameters.animalId
  const jwtToken = event.headers.Authorization.split(' ')[1]
  const userId = parseUserId(jwtToken)

  await connectToDatabase()
  const animal = await Animal.findOneAndDelete({
    _id: animalId,
    userId
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