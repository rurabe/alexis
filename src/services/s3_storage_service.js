'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'us-west-2' });


const S3StorageService = {
  // var params = {Bucket: 'bucket', Key: 'key', Body: stream};
  // var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
  upload: (params={},options={}) => {
    return new Promise((resolve,reject) => {
      s3.upload(params,options,(err,data) => {
        resolve(data);
      });
    });
  }
};

module.exports = S3StorageService;