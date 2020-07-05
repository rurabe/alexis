'use strict';

const AWS = require('aws-sdk');

module.exports = {
  initialize: () => {
    const credentials = new AWS.SharedIniFileCredentials({profile: 'nico_robin'});
    AWS.config.credentials = credentials;
  }
};
