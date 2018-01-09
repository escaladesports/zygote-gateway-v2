import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

import getKey from './get-key'

export default function (options = {}){
	// Default options
	options = {
		path: 'env.js',
		...options
	}
	options.key = getKey(options)

	console.log(options.key)
}