/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_TOPSEARCHEDBREEDS_ARN
	STORAGE_TOPSEARCHEDBREEDS_NAME
	STORAGE_TOPSEARCHEDBREEDS_STREAMARN
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.TABLE_REGION });
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function processSingleEvent(record) {
	console.log('eventID: ' + record.eventID);
	console.log('eventName: ' + record.eventName);
	console.log('DynamoDB Record: %j', record.dynamodb);
	if (record.eventName === 'INSERT') {
		let breedId = record.dynamodb['NewImage']['breedId']['S'];
		const updateItemParams = {
			TableName: process.env.STORAGE_TOPSEARCHEDBREEDS_NAME,
			Key: {
				searchId: breedId,
			},
			ExpressionAttributeNames: {
				'#cnt': 'count',
			},
			ExpressionAttributeValues: {
				':inc': 1,
			},
			UpdateExpression: 'add #cnt :inc',
		};
		await dynamodb.update(updateItemParams).promise();
	}
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	try {
		for await (const record of event.Records) {
			await processSingleEvent(record);
		}
		return { body: 'successfully updated item!' };
	} catch (err) {
		return { error: err };
	}
};
