#### Capturing output from a custom resource

Sometimes you want to display the output from a Lambda Custom
Resource, this worked for me.

In the Template:

#### template.yaml

``` 
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: Can you make a Lambda Function run

Outputs:
      NameOfOurVariable:
        Value:
          Fn::GetAtt:
          - test
          - key
# The resource is called test, the value we are getting is called key          
# The value is called key, Key is what we are looking for          

Resources:
  test:
    Type: Custom::test
    Properties:
      ServiceToken: arn:aws:lambda:us-east-1:761861444952:function:runOnce
```

#### index.js

My Lambda Function

``` 
var response = require('cfn-response');

exports.handler = (event, context, callback) => {
    // TODO implement

    console.log("runOnceRan!");
    
    response.send(event, context, response.SUCCESS, {"key":"value"});
};
```