import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'
import { load } from 'envdotjs'
load()

console.log('TEST:', process.env.TEST)

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