import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
	Auth: {
		identityPoolId: process.env.REACT_APP_identityPoolId,
		region: process.env.REACT_APP_region,
		userPoolId: process.env.REACT_APP_userPoolId,
		mandatorySignIn: false,
		userPoolWebClientId: process.env.REACT_APP_userPoolWebClientId,
	},
	Storage: {
		bucket: process.env.REACT_APP_bucket_name,
		region: process.env.REACT_APP_region,
		identityPoolId: process.env.REACT_APP_identityPoolId,
	},
});

Auth.configure({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
