// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

let localParseServer = 'http://localhost:1337/parse';
  // Heroku requires HTTPS. Please read the README file for details.
let herokuParseServer = 'https://my-parse-dashboard.herokuapp.com/parse';

var dashboard = new ParseDashboard({
  apps: [
    {
      appId: process.env.APP_ID || 'myAppId',
      masterKey: process.env.MASTER_KEY || 'myMasterKey',
      serverURL: process.env.SERVER_URL || herokuParseServer || localParseServer,
      appName: process.env.APP_NAME || 'MyApp',
    },
  ],
  users: [
    { user: process.env.USERNAME, pass: process.env.PASSWORD }
  ],
  trustProxy: 1
});

var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
