import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'
import { getKey } from './utils/envdotjs'

console.log(getKey())

// Export function with middleware
module.exports.hello = middy((event, context, callback) => {
		console.log('BODY:', event.body)
		callback(null, {
			body: JSON.stringify({
				result: 'success'
			})
		})
	})
	.use(cors())
	.use(jsonBodyParser())
	.use(httpErrorHandler())