import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Breed, { loader as BreedLoader } from './Breed';
import BreedList, { loader as BreedListLoader } from './BreedList';
import Home, { loader as HomeLoader } from './home/Home';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: HomeLoader,
			},
			{
				path: '/breed/:breedId',
				element: <Breed />,
				loader: BreedLoader,
			},
			{
				path: '/breedList',
				element: <BreedList />,
				loader: BreedListLoader,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
