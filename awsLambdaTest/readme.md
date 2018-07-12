### Testing Lambdas locally

#### Uploading and testing lambdas is a pain.

I am using lambda-local https://www.npmjs.com/package/lambda-local

They have examples on their website, but here is a basic one that works,
it is based on the stock lambda that Amazon Creates for you

`lambda-local -l index.js -h handler -e event.json`

when it's done, if you copy my source, you will see this:

```
info: START RequestId: 9f9f5113-b335-d115-4aa8-06e08ab63e89
info: End - Message
info: ------
info: Hello from Lambda
info: ------
info: Lambda successfully executed in 7ms. 
```
