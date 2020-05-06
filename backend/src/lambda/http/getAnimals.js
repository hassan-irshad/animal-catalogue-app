'use strict'

const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')
const parseUserId = require('../../auth/utils')

exports.handler = async event => {
    console.log('Processing Event: ', event)
    const jwtToken = event.headers.Authorization.split(' ')[1]
    const userId = parseUserId(jwtToken)

    await connectToDatabase()
    const animals = await Animal.find({
        userId
    })

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
