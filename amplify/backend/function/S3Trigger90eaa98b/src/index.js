var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});

exports.handler = function(event, context) {
    var file_path = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    var gallery = file_path.split("/")[0];

    var params = {
        TableName: 'dynamodc6a8540-dev',
        Item: {
            gallery: gallery,
            file_path: file_path
        }
    };

    dynamo.put(params, context.done);
};
