exports.handler = (event, context, callback) => {
    // TODO implement
	
var response = {
        statusCode: 200,
        body: JSON.stringify("Cool you got response"),
	"isBase64Encoded": false
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
};

