### Delete all S3 Buckets

*Use at your own Risk*, this has saved me a lot of time during testing. Clear out your S3 Buckets.

```
aws s3 ls | cut -d" " -f 3 | xargs -I{} aws s3 rb s3://{} --force
```

