'use strict'

var http = require("https");

var username = "xxx"
var password = "xxx"
var oktaOrg = "companyx.okta.com"

exports.handler = (event, context, callback) => {

    getToken().then(function(token) {

        var response = {
            statusCode: 307,
            headers: {
                "Location": "https://"+oktaOrg+"/login/sessionCookieRedirect?token=" + token +"&redirectUrl=https://"+oktaOrg
            },
            body: null
        };
        callback(null, response);

    })
};

function getToken() {

    return new Promise((resolve, reject) => {


        var options = {
            "method": "POST",
            "hostname": oktaOrg,
            "port": null,
            "path": "/api/v1/authn",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "d35c74e1-471b-ef66-5cee-077c6b4bfbf9"
            }
        };

    var req = http.request(options, function(res) {
        var chunks = [];

        res.on("data", function(chunk) {
            chunks.push(chunk);
        });

        res.on("end", function() {
            var body = Buffer.concat(chunks);
            body = JSON.parse(body.toString())
            resolve(body.sessionToken);
        });
    });

    req.write(JSON.stringify({
        username: username,
        password: password,
        options: {
            multiOptionalFactorEnroll: true,
            warnBeforePasswordExpired: true
        }
    }));
    req.end();
})
}


