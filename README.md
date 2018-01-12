# serverless-aws-boilerplate

WIP

A bare-bones boilerplate for working with [AWS Lambda functions](https://aws.amazon.com/lambda/) in the [Serverless framework](https://serverless.com/).

## Features

- [ES6](http://es6-features.org/) transpiling
- [Middy](https://middy.js.org/) for easy Lambda middleware
- [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/) for unit testing
- [envdotjs](https://www.npmjs.com/package/envdotjs) for environment variables

## Installation

```bash
git clone git@github.com:escaladesports/serverless-aws-boilerplate.git new-function
cd new-function
yarn
```

## Environment Variables

Environment variables are (by default) managed through 2 .env files. `.env-production` is used for the production stage only, while `.env` is used for all other stages, include local invocations. While this method has some issues with collaboration on environment, it's preferable over [committing your secure credentials to config files](https://12factor.net/config).

## Deployment

`yarn deploy` will deploy to a staging environment. Use `yarn deploy-production` to deploy to production. All unit tests must pass a production test for a production deploy to succeed. You can modify the production deployment script in `package.json` if this needs to be changed.