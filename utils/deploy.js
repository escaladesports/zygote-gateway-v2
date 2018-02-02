import exeq from 'exeq'

let stage = process.env.TRAVIS_BRANCH
if(stage === 'master'){
	stage = 'production'
}
else{
	stage = stage.replace(/[^a-zA-Z0-9]/g, '')
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
	console.log('PULL REQUEST:', process.env.TRAVIS_PULL_REQUEST)
	if (!process.env.TRAVIS_PULL_REQUEST) {
		await cmd(`SLS_DEBUG=* serverless invoke test --stage ${stage} --compilers js:babel-core/register`)
		await cmd(`SLS_DEBUG=* serverless deploy --verbose --stage ${stage}`)
	}
	else{
		console.log('No deploy on pull request')
	}
}
deploy()
