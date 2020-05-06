'use strict'

const { v4: uuidv4 } = require('uuid');
const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')

exports.handler = async event => {
    console.log('Processing Event: ', event)

    const itemId = uuidv4();

    const parsedBody = JSON.parse(event.body)

    const animal = new Animal({
        _id: itemId,
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