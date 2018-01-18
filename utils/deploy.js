import cmd from 'exeq'

let stage = process.env.TRAVIS_BRANCH
if(stage === 'master'){
	stage = 'production'
}
else{
	stage = stage.replace(/[^0-9\-]/g, '-')
}

async function deploy(){
	try {
		await exeq(
			`SLS_DEBUG=* serverless invoke test --stage ${stage} --compilers js:babel-core/register`,
			`SLS_DEBUG=* serverless deploy --verbose --stage ${stage}`,
		)
	}
	catch(e){
		console.error(e)
		process.exit(1)
	}
}
deploy()
