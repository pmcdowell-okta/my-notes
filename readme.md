# My Notes

I had a bunch of notes I was keeping in Google Keep, that no one else could see or use, so I decided to put many of them up on GitHub.com so maybe other could find them useful.

[starterHTML](./starterHTML) <br/>
When starting with HTML from Scratch, this what what I use,
it has a simple style sheet and **Jquery**
ready to run.

[Login Widget on JsFiddle](./loginWidgetJsfiddle) <br/>
I experiemented with successfully running the Okta Login Widget on JSFiddle, works great ! and perfect for training.

[Login Widget with CORS on PHP Server](./loginWidgetCorsOnPhp) <br/>
**CORS** configuration can be confusing when you first start, this is about as basic
of an example as I could create to show how to send a Bearer Token to a Server
via CORS.

[Javascript Promises](./javascriptPromises) <br/>
**Promises** Promises were a bit tricky for me, I used this over and over again until 
I felt comfortable with it. It also uses the ES5/6 **Fat Arrow** to abbreviate the functions.

### Okta

[Custom Login page with SPA](./oktaMultipleLoginPage) <br/>
Working with Okta On Pre

[Add Key to Okta On Premise Agent/JRE](./oktaKeystore) <br/>
Working with Okta On Premise Agent, and using HTTP(s), this step is required.

### AWS SAM (Server Application Model)

##### Generate test events from SAM:
`sam local generate-event help` *Lists all options*

[AWS Sample Templates](https://s3.amazonaws.com/cloudformation-examples-us-east-1/AWSCloudFormation-samples.zip) <br/>
Lots of Sample Templates, you'll need them as a reference

[Getting going with SAM](./awsSam) <br/>
Example I used to get me started with AWS SAM

[More Simple Examples of using SAM / Cloudformation](./awsSam2) <br/>
SAM takes a while to understand, still learning, refined what I was workign with.

[Okta Guest Account  SAM / Cloudformation](./awsSamOktaGuest) <br/>
Creates a Lambda and API Gateway to log a user in as a Guest

[AWS ApiGateway, Anything goes Authorizer](./awsAnythingGoesAuthorizer) <br/>
A Authorizer for Allowing/Denying Anything, for test

[AWS SAM/Cloudformation for Okta Rental Backend](./awsSamOktaRental) <br/>
Example of how to use SAM/Cloudformation to deploy API Gateway on Amazon AWS **Will Add Authorizer soon**

[AWS SAM/Cloudformation for Okta Rental Backend w/ Authorizer](./awsOktaRentalWithAuthorizer) <br/>
Combining the above two examples, API Gateway w/ an Authorizer

[AWS LaunchStack and Share!](./awsLaunchStack) <br/>
Now get **Fancy** create a new **[LaunchStack]** Button on your code, and share your code

[Run Lambda Function in Cloudformation Template](./awsCloudformationRunLambda) <br/>
Run a Lambda Function from your SAM Cloudformation Teamplate **(Hard to figure out)**

[Capture output from Custom Resource](./awsCustomResourceOutput) <br/>
Capture the output from a Custom Resource (lambda in this case)

[Create Lambda with Role (YAML)](./awsCloudformationInlineLambdaWithRole) <br/>
Create an in-line Lambda function, and configure Role

[Custom Resource Orchestration](./awsCloudformationCustomResourceOrchestration) <br/>
Run Custom Resource, then take output and pass to another Custom Resource

[Create S3 Bucket with URL for Okta Org](./awsCloudformationMakeBucket) <br/>
Create S3 Bucket, make Okta login widget page

### node.js

[Random Code Snippets](./nodeRandomSnippets) <br/>
Random Code snippets I use when I forget stuff

[How I test my package with Docker](https://github.com/pmcdowell-okta/Dockerized-AWSCLI) <br/>
This is how I use Docker to test github releases

[Recursively install packages](https://github.com/emgeee/recursive-install#readme) <br/>
When I have multiple directories of package (like Lambdas) I use npm-recursive-install
### Angular

[Angular Notes](./angularNotes) <br/>
Getting started with Angular 5-ish. Notes to get me going

### Amazon basics

Switch User Profile AWS CLI: `export AWS_PROFILE=user`

### Amazon Lambda

[Testing lambdas locally with lambda-local](./awsLambdaTest) <br/>
How to test your lambda function locally

[Amazon Upload Basic Lambda](./amazonLambdaUpload) <br/>
Upload a basic Lambda Function using AWS CLI.

[Amazon Misc Commands](./amazonLambdaMisc) <br/>
Delete, list, and Mass Delete Lambda Functions

[Stock Lambda Function](./awsLambdaStock) <br/>
The Standard Lambda Function in AWS.. Sometimes I need to look it up.

### Amazon Cloud Watch

[Delete All Cloudwatch Logs](./amazonDeleteCloudLogs) <br/>
I use this often, even setup an Alias for it in Bash

### Amazon Lambda Edge Functions
[Set Cookie on Amazon Lambda Edge](./lambdaEdgeSetCookie) <br/>
Set a Cookie on Lambda Edge.. In this case I was working to exchange a cookie for a JWT. 

[Lambda Edge Static Web Page](./lambdaEdgeStaticWebpage) <br/>
Render a Static Web Page on Lambda Edge (ideally you would use an S3 Bucket, but this will get you started)

### Amazon S3

[Common S3 Commands you should know](./amazonS3CommonCommands) <br/>
Common Commands you should know. *But often forget*

[Delete all S3 Buckets](./amazonDeleteS3Buckets) <br/>
*Use at your own Risk*, but I used this often for testing

[Delete Buckets with Versioning](./awsS3DeleteBucketsWithVersioning) <br/>
It's a pain deleting buckets with Versioning, this helped me.

### PHP

[PHP Jwt Decode](./phpDecodeJwt) <br/>
Decode JWT in php, this does not include verification code

### Docker

##### Basics 

**Build Docker Image** `docker build -t pmcdowell/deletemeanytimne .` <br/>
**Push to DockerHub** `docker push pmcdowell/deletemeanytimne` <br/>
**Docker Rename** `docker rename my_container my_new_container` <br/>
**Docker force Delete Image** `docker rmi a693c8a85fa7 -f` <br/>
**Quick, run a PHP Server** `docker run -p 8000:80 -it -v "$PWD":/var/www/html php:7.0-apache /bin/bash -c "service apache2 start; bash"` <br/>
<br/>

[Docker Snapshot](./dockerSnapshot) <br/>
Simple instructions to take a snapshot in Docker

[Docker Nginx Hacking Proxy](./dockerNginxHacking) <br/>
Simple Reverse Proxy with Nginx using Docker

[Okta Agent Dockerfile](./oktaServer) <br/>
This is a Centos Docker Image I used to run Okta LDAP and On-Premise Agent

### GIT

[Basic .gitignore file](./gitignore) <br/>
This is the basic file I use for Git to ignore my .idea and other files.

### Security Stuff

[Generate Self Signed Certificates](./securityCertificatesCreate) <br/>
Script to make certificates

### Bash Shell

Do a infinite For/Loop : `while true ; do echo "do this"; done

Make symbolic Link : `ln -s /Users/mickeymouse/Box\ Sync/c-\=Code\=-/ code
`

Reverse looking previous coommands: `[CTRL-r]` *MacOS* *(Thanks Joël for this trick)* <br/>
Goto Beginning of Line: `[CTRL-a]` *MacOS*
`
### Intellij / JetBrains

**Increase Selected Text** `[OPPTOIN] + [UP ARROW]  <br/>
**Surround code With** `[OPPTOIN] + [COMMAND] + t ` <br/>
**Join lines** `[CTRL] + [SHIFT] +j` <br/>
**Select words w/ keyboard** `[Shift]+[Option] (left/right) arrow` <br/>
**Vertical Selection CMD.exe style**  `[Option] , drag cursor` <br/>
**Multi Cursor**  `[Option] + [Shift] , Click Away` <br/>
