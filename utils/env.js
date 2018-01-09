import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

function config(options = {}){
	options = {
		path: 'env.js',
		...options
	}
	console.log(options)
	options.path = require(process.cwd(), options.path)
	let obj = pathExistsSync(options.path) ? require(options.path) : {}
}

module.exports = {
	config
}