### Misc other commands I use when working with Lambdas

list functions:
`aws lambda list-functions`

list functions, just names:
`aws lambda list-functions | grep -i functionName`

delete functions:
`aws lambda delete-function --function-name TryCallBack`
