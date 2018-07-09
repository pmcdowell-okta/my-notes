### Orchestrating Custom Resource in Cloudformation

My usecase had two Custom Resources, one needed to be run before
the other. This template shows how to take the output from one
Custom Resource and feed it into another Custom Resource.

```
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: Run Lambda1, then run Lambda2 w/ outpu from Lambda1


Resources:
  lambda1:
    Type: Custom::test
    Properties:
      ServiceToken: arn:aws:lambda:us-east-1:761861444952:function:runOnce

  lambda2:
    Type: Custom::test2
    Properties:
      ServiceToken: arn:aws:lambda:us-east-1:761861444952:function:runOnce
      myParameter: !GetAtt lambda1.test

```

#### Not Recommended

If you want to jam everything in a single template, you might be able to use a 
lambda function like this, which includes the **cnf-response.js**

**Just Experimenting, making it easier for others to deploy**

``` 
exports.SUCCESS = "SUCCESS";
exports.FAILED = "FAILED";

exports.send = function(event, context, responseStatus, responseData, physicalResourceId, noEcho) {

    var responseBody = JSON.stringify({
        Status: responseStatus,
        Reason: "See the details in CloudWatch Log Stream: " + context.logStreamName,
        PhysicalResourceId: physicalResourceId || context.logStreamName,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        NoEcho: noEcho || false,
        Data: responseData
    });

    console.log("Response body:\n", responseBody);

    var https = require("https");
    var url = require("url");

    var parsedUrl = url.parse(event.ResponseURL);
    var options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.path,
        method: "PUT",
        headers: {
            "content-type": "",
            "content-length": responseBody.length
        }
    };

    var request = https.request(options, function(response) {
        console.log("Status code: " + response.statusCode);
        console.log("Status message: " + response.statusMessage);
        context.done();
    });

    request.on("error", function(error) {
        console.log("send(..) failed executing https.request(..): " + error);
        context.done();
    });

    request.write(responseBody);
    request.end();
}



exports.handler = (event, context, callback) => {
    console.log ( event );
    //I use this to check that parameter is getting passed in
    console.log("runOnceRan!");
    exports.send(event, context, exports.SUCCESS, {"test":"key23"});
    // All it does is return parameter key23
};

```