##### Start local API Gateway:

`sam local start-api`

##### Before deployment, make bucket: (Make Bucket)

`aws s3 mb s3://bucket-name`

##### Package:

`sam package --template-file template.yaml --s3-bucket [your_s3_bucket] --output-template-file package.yaml`

**Note, drop the s3:// prefix before packaging** *(Wasn't so obvious to me)*

`sam deploy --template-file package.yaml --stack-name serverless-application --capabilities CAPABILITY_IAM`

##### To remove the stack, run the following command:

`aws cloudformation delete-stack --stack-name serverless-application`

##### Nice Example of script that does it all for you:

Honestly, this deployment was pretty rough to get going.. Here is a working example of what i used to deploy an API Gateway with an Authorizer. I'll show the deployment script, then the SAM Template *(Thanks Brent)*

#### Sample Template

```
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: An example serverless "Hello World2 " application with a custom authorizer.

Parameters:
  AutoPublishAliasName:
    Type: String
    Default: current
    Description: The alias used for Auto Publishing
  StageName:
    Type: String
    Default: prod
    Description: The Lambda Function and API Gateway Stage
  FunctionName:
    Type: String
    Default: Example
    Description: The Lambda Function Name

Outputs:
  ExampleAPIUrl:
    Value: !Sub "https://${ApiGateway}.execute-api.${AWS::Region}.amazonaws.com/${StageName}/"

Resources:
  ApiGateway:
    Type: AWS::Serverless::Api
    Properties:
      StageName: Prod
      DefinitionBody:
        swagger: 2.0
        info:
          title:
            Ref: AWS::StackName
        securityDefinitions:
          test-authorizer:
            type: apiKey
            name: Authorization
            in: header
            x-amazon-apigateway-authtype: custom
            x-amazon-apigateway-authorizer:
              type: token
              authorizerUri:
                Fn::Sub: arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${TestAuthorizerFunc.Arn}/invocations
              authorizerResultTtlInSeconds: 5
        paths:
          "/":
            get:
              x-amazon-apigateway-integration:
                httpMethod: post
                type: aws_proxy
                uri:
                  Fn::Sub: arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${HelloWorld.Arn}/invocations
              responses: {}
              security:
                - test-authorizer: []

  HelloWorld:
    Type: AWS::Serverless::Function
    Properties:
      Handler: lambda_function.lambda_handler
      Runtime: python3.6
      CodeUri: ./HelloWorld
      Events:
        GetApi:
          Type: Api
          Properties:
            Path: /
            Method: get
            RestApiId:
                Ref: ApiGateway

  TestAuthorizerFunc:
    Type: AWS::Serverless::Function
    Properties:
      Handler: lambda_function.lambda_handler
      Runtime: python3.6
      CodeUri: ./TestAuthorizerFunc

  TestAuthorizerFuncPerm:
    Type: AWS::Lambda::Permission
    DependsOn:
      - ApiGateway
      - TestAuthorizerFunc
    Properties:
      Action: lambda:InvokeFunction
      FunctionName:
        Ref: TestAuthorizerFunc
      Principal: apigateway.amazonaws.com

```

#### Deploy.sh (This script rocks!, I forgot who wrote it, thank you though)

``` 
#!/bin/bash

S3_BUCKET=$1
STACK_NAME=$2

USE_MSG="Usage: deploy.sh S3_BUCKET STACK_NAME"

if [ -z "$S3_BUCKET" ]; then
  echo "Missing S3_BUCKET and STACK_NAME"
  echo $USE_MSG
  exit 1
fi

if [ -z "$STACK_NAME" ]; then
  echo "Missing STACK_NAME"
  echo $USE_MSG
  exit 1
fi

# zip up functionZZ
#zip api-proxy-lambda.zip index.js

# upload zip to S3
sam package  --template-file 03-sam-swagger-auth-template.yaml --s3-bucket $S3_BUCKET  --output-template-file output.yaml

# deploy to cloud formation
sam deploy --template-file output.yaml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM

# get API endpoint
API_ENDPOINT=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[0].OutputValue')

# remove quotes
API_ENDPOINT=$(sed -e 's/^"//' -e 's/"$//' <<< $API_ENDPOINT)

echo "Test in browser: $API_ENDPOINT"


```

#### This is what it outputs when it is done

```
./deploy.sh okta914 okta914
A newer version of the AWS SAM CLI is available!
Your version:   0.2.11
Latest version: 0.3.0
See https://github.com/awslabs/aws-sam-local for upgrade instructions

Uploading to 5392c0189bd17e63977147a23dc64381  334 / 334.0  (100.00%)
Successfully packaged artifacts and wrote output template to file output.yaml.
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file /private/tmp/sam4/Serverless-Hello-World/hello-world/output.yaml --stack-name <YOUR STACK NAME>
A newer version of the AWS SAM CLI is available!
Your version:   0.2.11
Latest version: 0.3.0
See https://github.com/awslabs/aws-sam-local for upgrade instructions

Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - okta914
Test in browser: https://jdi7dp6d.execute-api.us-east-1.amazonaws.com/prod/ 
```