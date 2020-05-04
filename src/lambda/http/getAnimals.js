'use strict'

const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')

exports.handler = async event => {
    console.log('Processing Event: ', event)

    await connectToDatabase()
    const animals = await Animal.find()

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            animals
        })
    }
}
