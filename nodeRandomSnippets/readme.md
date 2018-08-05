### My Random Node Snippets

*Doubt many will find this useful except for me*

##### Readfile
`fs.readFile("fragment.html", function(err, fragment) {`
 
##### search replace string all occurances
`var temp = fragmentOriginal.replace(/{{tag}}/g, val.title)`

##### for loop object elements
``` 
for (var key in requestObj.requestAttributes) {
    if (requestObj.requestAttributes.hasOwnProperty(key)) {
        var val = requestObj.requestAttributes[key];
        // console.log(JSON.stringify(val));
        requestObj.html +="<p>"+val.title+"<p/><br>"
    }
}
```

##### Quick web server
``` 
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    if (req.url == "/") { //do it
    }
})
```

##### Environment variables (*put your keys in here*)
``` 
process.env.oktaOrg
```

##### Promises func (*this is how I make all my functions*)
``` 
$FUNCTIONNAME$ = function ( requestObj ) {
    return new Promise ( (resolve, reject)=> {

        resolve ( requestObj)
    })
}
```

#### Readfile
```
fs.readFile('./saml.txt', function read(err, data) {
    if (err) {
        throw err;
    }
}
```

#### Base64 Decode
``` 
        let buff = new Buffer(body, 'base64'); //base 64decode
```

####

#### Url Decode 
``` 
var decode = require('urldecode')

body = decode(body) //url decode
```

