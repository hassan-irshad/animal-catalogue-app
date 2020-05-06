'use strict'

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const connectToDatabase = require('../../db/mongose')
const { Animal } = require('../../models/animal')
const parseUserId = require('../../auth/utils')

const bucketName = process.env.IMAGES_S3_BUCKET
const urlExpiration = process.env.SIGNED_URL_EXPIRATION

const s3 = new AWS.S3({
  signatureVersion: 'v4'
})

exports.handler = async event => {
  console.log('Processing Event: ', event)
  const animalId = event.pathParameters.animalId
  const jwtToken = event.headers.Authorization.split(' ')[1]
  const userId = parseUserId(jwtToken)

  if (!animalId) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Provide animalId.'
      })
    }
  }

  await connectToDatabase()

  // Check if animal with the given id exist
  const validAnimalId = await Animal.findOne({_id: animalId, userId})

  if (!validAnimalId) {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Animal does not exist'
      })
    }
  }

  const imageId = uuidv4();
  const url = getUploadUrl(imageId)

  const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageId}`

  await Animal.findByIdAndUpdate(animalId, { imageUrl: imageUrl })

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      uploadUrl: url
    })
  }
}

function getUploadUrl(imageId) {
  return s3.getSignedUrl('putObject', {
    Bucket: bucketName,
    Key: imageId,
    Expires: Number(urlExpiration)
  })
}