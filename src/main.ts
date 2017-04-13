import {Callback, Handler} from '@types/aws-lambda';

const lambdaFunction: Handler = (event, context, callback: Callback) => {
    let s: string = context.awsRequestId;
    return callback(null, s);   // return request id
    //return callback(null, `key1: ${event.key1}`);  // Echo back the value in the property key1
};

export { lambdaFunction as handler };
