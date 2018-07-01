### AWS SAM/Cloudformation backend for Okta Rental (With Authorizer example) !

This is the same example as the previous OktaRental example,
with the addition of an Authorizer. It took me a while to get it
working, maybe it will help someone else.

Create an **S3 Bucket** the command is: `aws s3 mb s3://oktarental123`

#### To deploy to this:

`./deploy.sh oktarental123 oktarental123 template.yaml`

#### Results:
``` 
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file /Users/patrickmcdowell/Box Sync/c-=Code=-/cloudformationOktaRental/output.yaml --stack-name <YOUR STACK NAME>
Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - oktarental123

Test in browser: https://bedfy62k98.execute-api.us-east-1.amazonaws.com/dev/
Vehicles API
Test in browser: https://bedfy62k98.execute-api.us-east-1.amazonaws.com/dev/vehicles
Bookings API
Test in browser: https://bedfy62k98.execute-api.us-east-1.amazonaws.com/dev/bookings

To Delete the Stack use this command
aws cloudformation delete-stack --stack-name oktarental123
```

#### Test:

You will need to include an Authorization Header in this one for it to work.


``` 
curl -H "Authorization:Bearer 34223" https://bedfy62k98.execute-api.us-east-1.amazonaws.com/dev/vehicles

{"inventory":[{"id":"112345","make":"Jeep","model":"Wrangler","class":"Offroad","desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, 4x4, Removable Top, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Mirrors,............. 
```

#### Delete your stack when you are done

You can do this from the AWS Console, or issue the command provided by the deploy.sh script.

`aws cloudformation delete-stack --stack-name oktarental123
`


