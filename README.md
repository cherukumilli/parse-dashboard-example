# parse-dashboard-example

Example project using the [parse-dashboard](https://github.com/ParsePlatform/parse-dashboard) module on Express.

### For Local Development

* Make sure you have at least Node 4.3. `node --version`
* Clone this repo and change directory to it.
* `npm install`
* Prerequisite: Ensure you have the parse-server installed and working
  * Check the parse-server-example project for a quick start: https://github.com/ParsePlatform/parse-server-example
* Run the server with: npm start

### Using it

After starting the dashboard, you can visit http://localhost:4040 in your browser

### Usage
Parse Dashboard can be mounted on an Express app. Express is a web framework for Node.js. The fastest way to get started is to clone the [Parse Dashboard repo](https://github.com/ParsePlatform/parse-dashboard), which at its root contains a sample Express app with the Parse Dashboard API mounted.

The constructor returns an API object that conforms to an [Express Middleware](http://expressjs.com/en/api.html#app.use). This object provides the REST endpoints for a Parse Dashboard app. Create an instance like so:

```
var express = require('express');
var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  apps: [
    {
      appId: process.env.APP_ID || 'myAppId',
      masterKey: process.env.MASTER_KEY || 'myMasterKey',
      serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME || 'MyApp',
    },
  ],
});

var app = express();

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
```

* More configuration options can be found at: [Configuring Parse Dashboard](https://github.com/ParsePlatform/parse-dashboard#configuring-parse-dashboard)

### Getting Started With Heroku Development

#### With the Heroku Button

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### Without It

* Clone the repo and change directory to it
* Log in with the [Heroku Toolbelt](https://toolbelt.heroku.com/) and create an app: `heroku create`
* Deploy it with: `git push heroku master`

### Getting Started With AWS Elastic Beanstalk

#### With the Deploy to AWS Button

* HELP WANTED - Need someone to help document this step

#### Without It

* Clone the repo and change directory to it
* Log in with the [AWS Elastic Beanstalk CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html), select a region, and create an app: `eb init`
* Create an environment and pass in App ID, Master Key, serverURL and appName (optional): `eb create --envvars APP_ID=<replace with Parse app ID>, MASTER_KEY=<replace with Parse master key>, SERVER_URL=<replace with your parse server URL>, APP_NAME=<replace with an optional appname>`

### Getting Started With Microsoft Azure App Service

#### With the Deploy to Azure Button

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

#### Without It

A detailed tutorial is available here:
* HELP WANTED - Need someone to help document the step below correctly
[Azure welcomes Parse developers](https://azure.microsoft.com/en-us/blog/azure-welcomes-parse-developers/)


### Getting Started With Google App Engine

1. Clone the repo and change directory to it
1. Create a project in the [Google Cloud Platform Console](https://console.cloud.google.com/).
1. [Enable billing](https://console.cloud.google.com/project/_/settings) for your project.
1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/).
1. Modify `app.yaml` to update your environment variables.
1. Delete `Dockerfile`
1. Deploy it with `gcloud preview app deploy`

A detailed tutorial is available here:
* HELP WANTED - Need someone to help document the step below correctly
[Running Parse Dashboard server on Google App Engine](https://cloud.google.com/nodejs/resources/frameworks/parse-server)

### Getting Started With Scalingo

#### With the Scalingo button

[![Deploy to Scalingo](https://cdn.scalingo.com/deploy/button.svg)](https://my.scalingo.com/deploy)

#### Without it

* HELP WANTED - Need someone to help document the 3 steps below correctly

* Clone the repo and change directory to it
* Log in with the [Scalingo CLI](http://cli.scalingo.com/) and create an app: `scalingo create my-parse-dashboard`
* Deploy it with: `git push scalingo master`
