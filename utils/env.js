import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

function config(options = {}){
	options = {
		path: 'env.js',
		...options
	}
	options.path = resolve(process.cwd(), options.path)
	let obj = pathExistsSync(options.path) ? require(options.path) : {}
	for(let i in obj){
		process.env[i] = obj[i]
	}
}

module.exports = {
	config
}