require('dotenv').config({
	silent: true,
	path: process.env.NODE_ENV === 'production' ? '.env-production' : '.env'
})
import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'

console.log('TEST:', process.env.TEST)

const hello = (event, context, callback) => {
	console.log('BODY:', event.body)
	callback(null, {
		body: JSON.stringify({
			result: 'success'
		})
	})
}

module.exports.hello = middy(hello)
	.use(cors())
	.use(jsonBodyParser())
	.use(httpErrorHandler())