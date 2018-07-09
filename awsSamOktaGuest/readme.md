## SAM / Cloudformation (Okta Guest)

Create a guest account that people can use to log into Okta,
just send them to the URL created by the deployment script,
and the user will be logged in.

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
'use strict'

var http = require("https");

var username = "xxx"
var password = "xxx"
var oktaOrg = "companyx.okta.com"

exports.handler = (event, context, callback) => {

    getToken().then(function(token) {

        var response = {
            statusCode: 307,
            headers: {
                "Location": "https://"+oktaOrg+"/login/sessionCookieRedirect?token=" + token +"&redirectUrl=https://"+oktaOrg
            },
            body: null
        };
        callback(null, response);

    })
};

function getToken() {

    return new Promise((resolve, reject) => {


        var options = {
            "method": "POST",
            "hostname": oktaOrg,
            "port": null,
            "path": "/api/v1/authn",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "d35c74e1-471b-ef66-5cee-077c6b4bfbf9"
            }
        };

    var req = http.request(options, function(res) {
        var chunks = [];

        res.on("data", function(chunk) {
            chunks.push(chunk);
        });

        res.on("end", function() {
            var body = Buffer.concat(chunks);
            body = JSON.parse(body.toString())
            resolve(body.sessionToken);
        });
    });

    req.write(JSON.stringify({
        username: username,
        password: password,
        options: {
            multiOptionalFactorEnroll: true,
            warnBeforePasswordExpired: true
        }
    }));
    req.end();
})
}

```
