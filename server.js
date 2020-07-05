'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const CallsController = require('./src/controllers/calls_controller');
const HearbeatsController = require('./src/controllers/heartbeats_controller');

const AWSInit = require('./src/config/initializers/aws').initialize();

const app = express();

const app_json = express.Router();
app_json.use(bodyParser.json());

const port = (process.env.PORT||5000);


app_json.post('/calls',CallsController.create);
app_json.post('/heartbeats',HearbeatsController.create);


app.listen(port);
console.log(`app listening on port ${port}`);
