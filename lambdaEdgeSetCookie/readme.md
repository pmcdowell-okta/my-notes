I did some interesting work with Lambda Edge, in this case I used
the lambda Edge to determine if a User has a cookie, if they 
did not, it set the cookie to a JWT. I'll likely put more examples
up, but thought this might help someone.



```
'use strict';

let content = `
<\!DOCTYPE html>
<title>12</title>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Simple Lambda@Edge Static Content Response</title>
  </head>
  <body>
    <p>Hello from Lambda@Edge!</p>
  </body>
</html>
`;

exports.handler = (event, context, callback) => {
    /*
     * Generate HTTP OK response using 200 status code with HTML body.
     */

    // console.log(event)

    const request = event.Records[0].cf.request;
    const headers = request.headers;
    var resultr = ""

    console.log ("in lambda");

    if (headers.cookie) {
        console.log("in 30")

        for (let i = 0; i < headers.cookie.length; i++) {
            if (headers.cookie[i].value.indexOf("jwt") >= 0) {
                console.log('on line 26');
                resultr="You have a cookie on line 26"
                break;
            } else {
                console.log("Not on line 26, on line 29")
            }
        }
    } else {
        resultr="You have No cookie, I gave you one"

        console.log("No Cookie :")

    }


     
    const response = {
        status: '200',
        statusDescription: 'OK',
        headers: {
            'cache-control': [{
                key: 'Cache-Control',
                value: 'max-age=100'
            }],
            'content-type': [{
                key: 'Content-Type',
                value: 'text/html'
            }],
            'content-encoding': [{
                key: 'Content-Encoding',
                value: 'UTF-8'
            }],
             'set-cookie': [{
                    key: 'Set-Cookie',
                    value: `jwt=eyJraWQiOiJkZFBVRER5VXBIMk41d0dTWHZucVFaeS1PbVRGU1Z1NVBZYW5zanBzb0FzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MjM5MTMyNTgsImV4cCI6MTUyMzkxNjg1OCwianRpIjoiSUQuMW1Od0xSbEQ4X2ZsLUFfMHN4QzdIZTVIdVU4Zm0xQU1DR0dsU2ZjelltTSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUyMzkxMzI1MywiYXRfaGFzaCI6IllPX0J1MWMxRGxkbEdieHJWdHZSZkEifQ.MfkLPHevfEaLjM1FZh6vIFcBVuUFx0PqTxSia0X54OQhaJdvu0OOT8YtLrqUcqIlywwcYKtKRP5XBLSFAuphWbAJGvf1wPK_kJBRYTINi4264Ta1EtNC9BM_lcUitWTV0yNNDGNbpCOYBlO-LqOJB4VLOmXswbo6QGj36TujgChRZclG5w25s2SCj6si_TsgvDKsQX0k-eaAgziBSu0APRyVwEl0xiGukfNYD1bdVTjz0Q_UykX2fnzI6Y_Tw__A5_e-ZPy4bgH0tigFYut9yJP-Yf4aomY7xS95Y_89bDQStHtJGxLMFrWL6fq4wrwufOOe_rg9dok8kVUTUUDgjQ; Path=/`
                }],
        },
        body: resultr,
    };
    callback(null, response);
};

```

