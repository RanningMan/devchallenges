import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Profile />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
