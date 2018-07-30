# Promises

## Simple example:

``` 
new Promise ( (resolve)=>{
    console.log("hi")
    resolve ( "done");
}).then ( function( result) {
    console.log(result)
}).then ( function() {
    console.log("totally done")
})
```

## better example:

``` 
var firstMethod = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('first method completed');
         resolve({data: '123'});
      }, 2000);
   });
   return promise;
};
 
 
var secondMethod = function(someStuff) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('second method completed');
         resolve({newData: someStuff.data + ' some more data'});
      }, 2000);
   });
   return promise;
};
 
var thirdMethod = function(someStuff) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('third method completed');
         resolve({result: someStuff.newData});
      }, 3000);
   });
   return promise;
};
 
firstMethod()
   .then(secondMethod)
   .then(thirdMethod);
 ```

## I struggled with Promises, but I use this for a reference when I forget how things work.

It runs test1, then runs test2 after.  

```
<html>
<script>
    function test1() {
        return new Promise ( (resolve)=> {
            resolve("hi1");
        });
    }

    function test2(data) {
        return new Promise ( (resolve)=> {
            resolve(data+"2");
        });
    }

    test1 ().then( (output)=> {
        test2(output).then ( (output2)=> {
            console.log(output2)
        })
    })

</script>
</html>
```
