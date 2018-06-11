import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'
import fetch from 'isomorphic-fetch'
import { load } from 'envdotjs'
load()

import formatRequest from './format-request'
import api from './api-request'

// Export function with middleware
module.exports.endpoint = middy(async (event, context, callback) => {
  let body
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        requestError: e,
        errors: [
          'There was a problem with your request. Please try again later.'
        ]
      })
    })
  }
  const formattedBody = formatRequest(body)
  const res = await api(formattedBody)
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(res)
  })
})
  .use(cors())
  .use(jsonBodyParser())
  .use(httpErrorHandler())
