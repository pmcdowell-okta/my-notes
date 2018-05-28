# Promises

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
