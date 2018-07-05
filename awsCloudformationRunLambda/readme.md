### Run a Lambda function or whatever with Custom Resource

This was hard for me to figure out, and I'm still processing
what I got to work, but this sample code might help you invoke
a Lambda Function or what ever you want with a **Custom Resource**.

All the source is included, and the deploy.sh script I used to
push it out.

##### index.js

The lambda function just console.logs some output, and returns
success, that was all I wanted to prove.

``` 
var response = require('cfn-response');
exports.handler = (event, context, callback) => {
    console.log("runOnceRan!");
    response.send(event, context, response.SUCCESS, {"1":"2"});
};

```

You need to include cfn-response.js in the lambda. For some
reason long to explain it is not provided by AWS.

##### customResourceRunLambda.yaml

The cloudformation template just calls this Lambda function

``` 
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: Can you make a Lambda Function run

Resources: 
  test: 
    Type: Custom::test
    Properties: 
      ServiceToken: arn:aws:lambda:us-east-1:761861444952:function:runOnce
#      OptionalParamater : "OptionalParamaeterPassed"
```

#### Optional Parameters are passed to Lambda like this:

``` 
// From event, so event.ResourceProperties.key1 would be the value

ResourceProperties: 
{ key1: 'theKeyYouPassed',
```