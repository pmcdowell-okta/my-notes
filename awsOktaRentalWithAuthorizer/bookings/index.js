exports.handler = (event, context, callback) => {
	
var bookings= {
    "vehicle_id":"733-23-13",
    "estimated_cost":"$ 120.00 USD",
    "confirmation_code":"HEUWIDWHDJIWY"
}

var response = {
        statusCode: 200,
        body: JSON.stringify(bookings),
	    "isBase64Encoded": false
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
};

