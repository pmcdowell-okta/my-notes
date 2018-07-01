#!/bin/bash

S3_BUCKET=$1
STACK_NAME=$2
TEMPLATE_FILE=$3

#rm output.yaml
#aws cloudformation delete-stack --stack-name swagger03


USE_MSG="Usage: deploy.sh S3_BUCKET STACK_NAME YOURSAMTEMPLATE.YAML"

if [ -z "$S3_BUCKET" ]; then
  echo "Missing S3_BUCKET and STACK_NAME, if you forgot how to create a S3 bucket, here is the command:"
  echo "aws s3 mb s3://YOURBUCKETNAME"
  echo $USE_MSG
  exit 1
fi

if [ -z "$STACK_NAME" ]; then
  echo "Missing STACK_NAME, this is needed to name your cloudformation stack"
  echo $USE_MSG
  exit 1
fi

if [ -z "$TEMPLATE_FILE" ]; then
  echo "Missing TEMPLATE_FILE, we need your SAM Template file"
  echo $USE_MSG
  exit 1
fi

# upload to S3
sam package  --template-file $TEMPLATE_FILE --s3-bucket $S3_BUCKET  --output-template-file output.yaml

# deploy to cloud formation
sam deploy --template-file output.yaml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM

# get API endpoint
API_ENDPOINT=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[0].OutputValue')

# remove quotes
API_ENDPOINT=$(sed -e 's/^"//' -e 's/"$//' <<< $API_ENDPOINT)

rm output.yaml

echo ""
echo "Test in browser: $API_ENDPOINT"

echo "Vehicles API"
echo "Test in browser: $API_ENDPOINT""vehicles"

echo "Bookings API"
echo "Test in browser: $API_ENDPOINT""bookings"


echo ""
echo "To Delete the Stack use this command"
echo "aws cloudformation delete-stack --stack-name $STACK_NAME"




