# www.caerurfapugs.co.uk
TThe Caerurfa Pugs Website

Powered by [Gatsbyjs](https://www.gatsbyjs.org) and [Serverless](https://serverless.com)

## Deploy
The following will clean the public folder, build Gatsbyjs, deploy to surge.sh and deploy to the production serverless stage.
```
npm run deploy
```

## Working with Serverless
[Serverless Docs](https://serverless.com/framework/docs/providers/aws/cli-reference/)

### Deploy the project to develop
```
serverless deploy
```

### Deploy a single function to develop (faster)
```
serverless deploy function --function {function name}
```

### Testing
Functions can be best tested from the API Gateway console, to ensure the data Lambda receives is accurate.
