'use strict';

const generatePolicy = function(principalId, effect, resource) {
    const authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};

exports.authorizer = (event, context, callback) => {

    console.log("Hit Authorizer")


    //Toggle the callback for Opposite day !
    callback(null, generatePolicy('user123', 'Deny', event.methodArn));
    // callback(null, generatePolicy('user123', 'Allow', event.methodArn));

}; 
