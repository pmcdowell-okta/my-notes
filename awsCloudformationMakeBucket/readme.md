### Cloudformation template that creates S3 Bucket with login widget

This project creates an S3 Bucket, then puts the HTML for an
Okta Login widget on it. And when deleted, removes everything.

#### To run it from the command line

`./deploy.sh oktacoder77 makebucket24 template.yml --parameter-overrides  oktaOrg=companyx.okta.com bucketname=saturday8834`

#### To Delete the Stack
`aws cloudformation delete-stack --stack-name makebucket23`