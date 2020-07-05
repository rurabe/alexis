'use strict';

const AWS = require('aws-sdk');
const Polly = new AWS.Polly({ region: 'us-west-2' });


SynthesizeSpeechService = {
  synthesizeExpressions: (expressions=[]) => {
    // Polly.synthesizeSpeech(params, (err, data) => {
  }
};

module.exports = SynthesizeSpeechService;