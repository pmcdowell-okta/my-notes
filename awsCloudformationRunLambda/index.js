var response = require('cfn-response');

exports.handler = (event, context, callback) => {
    // TODO implement

    console.log("runOnceRan!");
    
    //callback(null, 'Hello from Lambda');
    
    response.send(event, context, response.SUCCESS, {"1":"2"});
};

