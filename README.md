# parse-dashboard-example

Example project using the [parse-dashboard](https://github.com/ParsePlatform/parse-dashboard) module on Express.

### For Local Development

- Make sure you have at least Node 4.3. `node --version`
- Clone this repo and change directory to it.
- `npm install`
- Prerequisite: Ensure you have the parse-server installed and working
  - Check the parse-server-example project for a quick start: https://github.com/ParsePlatform/parse-server-example
- Run the server with: npm start

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

- More configuration options can be found at: [Configuring Parse Dashboard](https://github.com/ParsePlatform/parse-dashboard#configuring-parse-dashboard)

### Getting Started With Heroku Development

#### Using Heroku CLI

- Clone the repo and change directory to it
- Log in with the [Heroku Toolbelt](https://toolbelt.heroku.com/) and create an app: `heroku create`
- Deploy it with: `git push heroku master`
- Open the Heroku dashboard->settings page for your app at: https://dashboard.heroku.com/apps/`<your app name>`/settings
- Click on `Reveal Config Vars` button on the Heroku settings page
- Add the following `Config Vars`. Set them to the values for your `parse-server`
- APP_ID
- MASTER_KEY
- SERVER_URL
- APP_NAME

#### With the Heroku Button

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
