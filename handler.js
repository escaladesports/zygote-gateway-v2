import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'

const hello = (event, context, callback) => {
	console.log('BODY TYPE:', typeof event.body)
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