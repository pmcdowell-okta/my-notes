### Common Commands you should know when working with S3

#### Make bucket
`aws s3 mb s3://123demo123`

#### List buckets
`aws s3 ls`

#### Copy files
`aws s3 cp . s3://bucketname`

#### Delete S3 Bucket
`aws s3 rb "s3://authorizer8-dev-serverlessdeploymentbucket-16pc0b9h3515g" --force`

#### S3 Sync
`aws s3 sync . s3://my-bucket/path`

#### Delete multiple buckets
`for kk in $(aws s3 ls | grep -i golang | cut -f3 -d ' '); do $(aws s3 rb s3://$kk --force)  ;done`
