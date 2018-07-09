### Deleting buckets with Versioning is a HASTLE..

This script worked for me.. Thx who ever posted in 

```
import boto3

BUCKET = 'elasticbeanstalk-us-west-2-761861444952'

s3 = boto3.resource('s3')
bucket = s3.Bucket(BUCKET)
bucket.object_versions.delete()
```


