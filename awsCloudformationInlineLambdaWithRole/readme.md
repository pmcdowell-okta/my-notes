#### Create in-line Lambda with Role

This will not change the world, but it will help you create
an inline Lambda Function in a Cloudformation tempalte.

Creates and assigns role too.

``` 
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: inline Lambda

Resources:
  LambdaExecutionRole:
      Type: AWS::IAM::Role
      Properties:
        AssumeRolePolicyDocument:
          Version: '2012-10-17'
          Statement:
          - Effect: Allow
            Principal: {Service: [lambda.amazonaws.com]}
            Action: ['sts:AssumeRole']
        Path: /
        ManagedPolicyArns:
        - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
        Policies:
        - PolicyName: PublishVersion
          PolicyDocument:
            Version: 2012-10-17
            Statement:
            - Effect: Allow
              Action: ['lambda:PublishVersion']
              Resource: '*'

  inlineLambdaDeleteMe:
    Type: AWS::Lambda::Function
    Properties:
      Code:
        ZipFile: !Sub |
          var aws  = require('aws-sdk');
          exports.handler = function(event, context) {
            console.log ("In Lambda Function");
            var data={};
            data.key="value"
            context.succeed(JSON.stringify(data));
          };
      Handler: index.handler
      Runtime: nodejs6.10
      Timeout: '30'
      Role: !GetAtt LambdaExecutionRole.Arn




```