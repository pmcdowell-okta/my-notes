# My Notes

I had a bunch of notes I was keeping in Google Keep, what no one else could see or use, so I decided to put many of them up on GitHub.com so maybe other could find them useful.

[starterHTML](./starterHTML) <br/>
When starting with HTML from Scratch, this what what I use,
it has a simple style sheet and Jquery
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

### Amazon basics

Switch User Profile AWS CLI: `export AWS_PROFILE=user`

### Amazon Lambda

[Amazon Upload Basic Lambda](./amazonLambdaUpload) <br/>
Upload a basic Lambda Function using AWS CLI.

[Amazon Misc Commands](./amazonLambdaMisc) <br/>
Delete, list, and Mass Delete Lambda Functions

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

### PHP

[PHP Jwt Decode](./phpDecodeJwt) <br/>
Decode JWT in php, this does not include verification code

### Docker

[Okta Agent Dockerfile](./oktaServer) <br/>
This is a Centos Docker Image I used to run Okta LDAP and On-Premise Agent

### Bash Shell

Do an For Loop : `for kk in `ls` ; do echo "Your Command" ; done
`
