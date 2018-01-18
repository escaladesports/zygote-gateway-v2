import exeq from 'exeq'

let stage = process.env.TRAVIS_BRANCH
if(stage === 'master'){
	stage = 'production'
}
else{
	stage = stage.replace(/[^a-zA-Z0-9]/g, '_')
}

async function cmd(str){
	console.log(str)
	try {
		await exeq(str)
	}
	catch(err){
		console.error(err)
		process.exit(1)
	}
}

async function deploy(){
	await cmd(`SLS_DEBUG=* serverless invoke test --stage ${stage} --compilers js:babel-core/register`)
	await cmd(`SLS_DEBUG=* serverless deploy --verbose --stage ${stage}`)
}
deploy()
