### Deploying Applications using AWS **Launch Stack**

This concept seemed like Black Magic to me at first.

Once I started to get a handle on SAM Serverless Yaml
files, this started to make sense.

I'll add more notes, but basically you need to create an
yaml file (like I did in the project). I just copied the
sample code from Amazon.

You'll need to put that yaml file on S3, if you are new
to AWS, use this command to create an S3 Bucket.

`aws s3 mb s3://launchstack123`

Then copy the launchstack.yaml file to that **S3** Bucket

`aws s3 cp ./launchstack.yaml s3://launchstack123`

Now, you will need to make that public if you want others
to do that, I won't go through those steps, but just go to
AWS **S3**, and make it public from the GUI.

Then you warp it up with a long URL

```
https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=myteststack&templateURL=PUT_THE_LINK_TO_YOUR_S3_BUCKET_AND_FILE_HRE
```

Mine looked like this when I was all done:

https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=myteststack&templateURL=https://s3.amazonaws.com/launchstack123/launchstack.yaml

#### Getting Fancy

If you got this far, why not go all the way.. Create a pretty link to 
that URL.. This the code you would put in a MarkDown file if you want
a nice graphic to show up that says click to launch.

```
[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=myteststack&templateURL=https://awscomputeblogimages.s3-us-west-2.amazonaws.com/samfarm-website.yaml) 
```

#### It will look like this Now !

*----- SAMPLE -----*

[<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=myteststack&templateURL=https://awscomputeblogimages.s3-us-west-2.amazonaws.com/samfarm-website.yaml)

*----- SAMPLE -----*

Hope this helps someone