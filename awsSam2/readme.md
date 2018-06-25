## SAM / Cloudformation

It takes a while to get a feel for working with SAM. This is another
example of a simple Lambda function sitting behind an API Gateway.

I tried to make a simple deployment script based on work done Chenr2, and others to make it easier to understand.

Hopefully it will help others, and I hope to add an Authorizer to this simple example.

### To Deploy do this

`./deploy.sh YOURS3BUCKETNAME YOURSTACKNAME template.yaml`

##### If you forget how to create an S3 bucket do this:
`aws s3 mb s3://YOURBUCKETNAME`

If everything works as it should, you will see a response like this:

```
Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - chenr2r2

Test in browser: https://zv27pqu5x9.execute-api.us-east-1.amazonaws.com/dev/

To Delete the Stack use this command
aws cloudformation delete-stack --stack-name YOURSTACKNAME 
```
### Test

You can test with curl like this `curl https://zv27pqu5x9.execute-api.us-east-1.amazonaws.com/dev/test`

the response should look like this:
```
"Cool you got response" 
```

The Lambda function, is pretty much a stock Lambda function for the API Gateway

``` 
exports.handler = (event, context, callback) => {
    // TODO implement
	
var response = {
        statusCode: 200,
        body: JSON.stringify("Cool you got response"),
	"isBase64Encoded": false
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
};


```