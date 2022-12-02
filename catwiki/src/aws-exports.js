const exports = {
	aws_project_region: process.env.REACT_APP_REGION,
	aws_cognito_identity_pool_id: process.env.REACT_APP_IDENTITY_POOL_ID,
	aws_cognito_region: process.env.REACT_APP_REGION,
	aws_user_pools_id: process.env.REACT_APP_USER_POOL_ID,
	aws_user_pools_web_client_id: process.env.REACT_APP_WEB_CLIENT_ID,
	oauth: {},
	aws_cognito_username_attributes: ['EMAIL'],
	aws_cognito_social_providers: [],
	aws_cognito_signup_attributes: ['EMAIL'],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: ['SMS'],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 8,
		passwordPolicyCharacters: [],
	},
	aws_cognito_verification_mechanisms: ['EMAIL'],
	aws_user_files_s3_bucket: process.env.REACT_APP_S3_BUCKET,
	aws_user_files_s3_bucket_region: process.env.REACT_APP_REGION,
	aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing: true,
	aws_dynamodb_all_tables_region: process.env.REACT_APP_REGION,
	aws_dynamodb_table_schemas: [
		{
			tableName: REACT_APP_TOPSEARCHEDBREEDS_TABLE_NAME,
			region: process.env.REACT_APP_REGION,
		},
		{
			tableName: REACT_APP_SEARCHTABLE_TABLE_NAME,
			region: process.env.REACT_APP_REGION,
		},
	],
	aws_cloud_logic_custom: [
		{
			name: process.env.REACT_APP_API_NAME,
			endpoint:
				'https://zzqfpojfl7.execute-api.us-east-1.amazonaws.com/dev',
			region: process.env.REACT_APP_REGION,
		},
	],
};

export default exports;
