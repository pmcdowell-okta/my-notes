## This is what you want to run if you want to accept CORS from any location on a PHP Server

```
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Max-Age: 604800');

//print_r ($_SERVER);

//echo $_SERVER["HTTP_AUTHORIZATION"]; die();

$token =  getBearerToken();

if ( $token==null) {
    echo "No or Bad Bearer Token Provided";
} else {
    echo "token is good, result is: ".$token;
}

function getBearerToken() {
    $headers = $_SERVER["HTTP_AUTHORIZATION"];
    // HEADER: Get the access token from the header
    if (!empty($headers)) {
        if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
            return $matches[1];
        }
    }
    return null;
}
?>

```
## This is what you want to run on your Javascript if you want to pass a Bearer Token

```


$.ajax({
    url: 'http://localhost',
    headers: {
        'Authorization': `Bearer efefefefefefef`,
    },
    method: 'POST',
    data: "",
    success: function(data){
      console.log('succes: '+data);
    }
  });

/*  $.post( "http://localhost", 
           
           function( data ) {
          console.log ( data )
        }); */

// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", function(){
  banner.addClass("alt")
})



```
