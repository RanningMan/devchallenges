/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_SEARCHTABLE_ARN
	STORAGE_SEARCHTABLE_NAME
	STORAGE_SEARCHTABLE_STREAMARN
	STORAGE_TOPSEARCHEDBREEDS_ARN
	STORAGE_TOPSEARCHEDBREEDS_NAME
	STORAGE_TOPSEARCHEDBREEDS_STREAMARN
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require('aws-sdk');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('https');

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = 'searchTable';
if (process.env.ENV && process.env.ENV !== 'NONE') {
	tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = 'searchId';
const partitionKeyType = 'S';
const path = '/breed';
const UNAUTH = 'UNAUTH';

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path, function (req, res) {
	let breedId = req.params.id;
	var options = {
		method: 'GET',
		hostname: 'api.thecatapi.com',
		port: null,
		path: `/v1/images/search?breed_id=${breedId}&limit=8`,
		headers: {
			'x-api-key': process.env.CatApiKey,
		},
	};
	var httpreq = http.request(options, (httpres) => {
		var chunks = [];

		httpres.on('data', (chunk) => chunks.push(chunk));

		httpres.on('end', () => {
			var body = Buffer.concat(chunks);
			res.json(body.toString());
		});
	});

	httpreq.write();

	httpreq.end();
});

app.post(path, function (req, res) {
	if (userIdPresent) {
		req.body['userId'] =
			req.apiGateway.event.requestContext.identity.cognitoIdentityId ||
			UNAUTH;
	}

	let putItemParams = {
		TableName: process.env.STORAGE_SEARCHTABLE_NAME,
		Item: req.body,
	};
	dynamodb.put(putItemParams, (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.json({ error: err, url: req.url, body: req.body });
		} else {
			res.json({
				success: 'post call succeed!',
				url: req.url,
				data: data,
			});
		}
	});
});

app.listen(3000, function () {
	console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
