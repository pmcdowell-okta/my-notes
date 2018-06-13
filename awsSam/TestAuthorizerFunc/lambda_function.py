def generate_policy(principal_id, effect=None, resource=None):
    auth_response = {
        'principalId': principal_id
    }

    if effect and resource:
        auth_response['policyDocument'] = {
            'Version': '2012-10-17',
            'Statement': [
                {
                    'Action': 'execute-api:Invoke',
                    'Effect': effect,
                    'Resource': resource
                }
            ]
        }

    return auth_response




def lambda_handler(event, context):
    token = event['authorizationToken']
    method_arn = event['methodArn']
    print(f"Client token: {token}")
    print(f"Method ARN: {method_arn}")

    if token == 'Bearer a.b.c':
        return generate_policy(token, 'Allow', method_arn)
    else:
        raise Exception('Unauthorized')
