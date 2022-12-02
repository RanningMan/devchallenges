/*
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

AWS.config.update({ region: process.env.REACT_APP_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = 'topsearchedbreeds';
if (process.env.ENV && process.env.ENV !== 'NONE') {
	tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = 'searchId';
const partitionKeyType = 'S';
const path = '/topSearch';
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

// convert url string param to expected Type
const convertUrlType = (param, type) => {
	switch (type) {
		case 'N':
			return Number.parseInt(param);
		default:
			return param;
	}
};

const sortFunc = (d1, d2) => {
	if (d1.count && d2.count) {
		return d2.count - d1.count;
	}
	return -1;
};

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path, function (req, res) {
	const params = {};
	if (userIdPresent && req.apiGateway) {
		params[partitionKeyName] =
			req.apiGateway.event.requestContext.identity.cognitoIdentityId ||
			UNAUTH;
	} else {
		params[partitionKeyName] = req.params[partitionKeyName];
		try {
			params[partitionKeyName] = convertUrlType(
				req.params[partitionKeyName],
				partitionKeyType
			);
		} catch (err) {
			res.statusCode = 500;
			res.json({ error: 'Wrong column type ' + err });
		}
	}

	let getItemParams = {
		TableName: tableName,
	};

	dynamodb.scan(getItemParams, (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.json({ error: 'Could not load items: ' + err.message });
		} else {
			if (data.Items) {
				res.json(
					data.Items.sort(sortFunc)
						.map(({ searchId }) => searchId)
						.slice(0, 10)
				);
			} else {
				res.json(
					data
						.sort(sortFunc)
						.map(({ searchId }) => searchId)
						.slice(0, 10)
				);
			}
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
