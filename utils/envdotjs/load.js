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

	// TODO: Unencrypt
	if(extname(options.path) === '.enc'){

	}

	// Import env file
	options.path = resolve(process.cwd(), options.path)
	let obj = pathExistsSync(options.path) ? require(options.path) : {}

	// Expose variables
	for(let i in obj){
		process.env[i] = obj[i]
	}
}