'use strict';

var AWS = require('aws-sdk');
var fs = require('fs');
var s3 = new AWS.S3();
var response = require ('cfn-response')

var oktaOrg = ""
var myBucket = ""
var myKey = 'index.html';


let createS3Bucket = function(bucketname, callback) {
    return new Promise(function(resolve, reject) {
        s3.createBucket({ Bucket: bucketname, ACL: 'public-read' }, function(err, data) {
            if (err) {
                console.log(err)

                if (err.code == "BucketAlreadyExists") { //no sweat.. already there
                    resolve()
                }
                else { //maybe bucketname didn't meet requirements ?
                    reject ( err )
                }
            } else {
                resolve ()
            }
        });

    });
}

let createIndexFile = function(nameOfBucket, nameOfFile, callback) {
    return new Promise(function(resolve, reject) {
        var fileBuffer = fs.readFileSync("oktaLoginPage.html");
        var metaData = 'text/html';

        var fileString = fileBuffer.toString()
        fileString =  fileString.replace( "{oktaOrg}","https://"+oktaOrg)
        var buf = Buffer.from(fileString, 'utf-8');

        s3.putObject({
            ACL: 'public-read',
            Bucket: nameOfBucket,
            Key: nameOfFile,
            Body: buf,
            ContentType: metaData
        }, function(error, response2) {
            resolve('done')

        });
    })
}

let deleteS3Bucket = function(bucketname, callback) {
    return new Promise(function(resolve, reject) {
        var params = {
            Bucket: bucketname,
            Delete: { // required
                Objects: [ // required
                    {
                        Key: myKey // required
                    }
                ],
            },
        };

        s3.deleteObjects(params, function(err, data) {
            if (err) {
                if ( err.code == "NoSuchBucket") {  // No sweat, bucket doesn't exist
                    resolve()
                }
                else {
                    callback(err)

                }
            }
            else {
                console.log("File gone");
                s3.deleteBucket({Bucket: myBucket}, function (err, data) {
                    if (err) {
                        callback ( err )
                    } else {
                        resolve () // All good
                    }
                });

            } // successful response
        });

    });
}



exports.handler = (event, context, callback) => {

    myBucket=event.ResourceProperties['bucketname']
    oktaOrg=event.ResourceProperties['oktaOrg']

    if (event.RequestType == 'Create') {

        createS3Bucket(myBucket, callback).then(function () {
            createIndexFile(myBucket, "index.html").then ( function() {
                response.send(event, context, response.SUCCESS, {"1":"1"});

            }).catch( function(err) {
                response.send(event, context, response.FAILED, {"1":"1"});

            })
        })
    }

    else if (event.RequestType == 'Delete') {
        deleteS3Bucket(myBucket, callback).then(function () {
            response.send(event, context, response.SUCCESS, {"1":"1"});
        })
    }
};






