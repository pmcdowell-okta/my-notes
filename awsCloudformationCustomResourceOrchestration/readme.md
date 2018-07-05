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
