import { branch } from 'git-rev-promises'

async function checkDeploy() {
	const currentBranch = await branch()
	if (currentBranch === `master`) {
		console.log(`Deployment to master branch prevented.`)
		process.exit(1)
	}
}

checkDeploy()
