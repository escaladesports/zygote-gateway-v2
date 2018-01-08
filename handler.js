import middy from 'middy'
import { httpErrorHandler, cors } from 'middy/middlewares'

const hello = (event, context, callback) => {
	callback(null, {
		result: 'success',
		message: 'successful callback!'
	})
}

module.exports.hello = middy(hello)
	.use(cors())
	.use(httpErrorHandler())