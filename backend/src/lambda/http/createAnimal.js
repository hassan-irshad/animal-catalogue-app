'use strict'

const { v4: uuidv4 } = require('uuid');
const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')
const parseUserId = require('../../auth/utils')

exports.handler = async event => {
    console.log('Processing Event: ', event)
    const jwtToken = event.headers.Authorization.split(' ')[1]
    const userId = parseUserId(jwtToken)

    const itemId = uuidv4();

    const parsedBody = JSON.parse(event.body)

    if (!parsedBody.name) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            error: 'Provide name attribute.'
          })
        }
    }

    if (!parsedBody.desctiption) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            error: 'Provide description attribute.'
          })
        }
      }

    const animal = new Animal({
        _id: itemId,
        userId,
        ...parsedBody
    })

    await connectToDatabase()
    const newAnimal = await animal.save()

    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            newAnimal
        })
    }
}