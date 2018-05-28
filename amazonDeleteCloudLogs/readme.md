## Delete all Cloud Logs

This is super helpful when you are debugging.

```
aws logs describe-log-groups --query 'logGroups[*].logGroupName' --output table | awk '{print $2}' | grep -v ^$ | while read x; do aws logs delete-log-group --log-group-name $x; done
```

