import { pathExistsSync } from 'fs-extra'
import { resolve, extname } from 'path'

import unencrypt from './unencrypt'

export default function (options = {}){
	// Default options
	options = {
		...options
	}

	let noPath
	if(!options.path){
		options.path = 'env.js.enc'
		noPath = true
	}
	let obj
	options.path = resolve(process.cwd(), options.path)


	// Import encrypted file
	if(extname(options.path) === '.enc'){
		if (pathExistsSync(options.path)) {
			obj = unencrypt(options)
		}
		else if(!noPath){
			options.path = options.path.replace(/.enc$/, '')
		}
	}

	// Import js file
	if (!obj && pathExistsSync(options.path)) {
		obj = require(options.path)
	}

	// Expose variables
	if (obj) {
		for (let i in obj) {
			process.env[i] = obj[i]
		}
	}
}