'use strict'

exports.handler = async event => {
    console.log('Processing Event: ', event)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
    )
  }
}