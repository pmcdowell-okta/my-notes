### Upload Lambda function to AWS

Assuming you have the CLI installed and setup:

```
aws lambda create-function \
--region us-east-1 \
--function-name deletemeNOW \
--zip-file fileb://./file.zip \
--runtime go1.x \
--tracing-config Mode=Active \
--role arn:aws:iam::761861444952:role/wef_lambda_function \
--handler index

NODE Version

aws lambda create-function --region us-east-1 --function-name deletemeNOW --zip-file fileb://./file.zip --runtime nodejs4.3 --tracing-config Mode=Active --role arn:aws:iam::761861444952:role/wef_lambda_function --handler index.handler
```

