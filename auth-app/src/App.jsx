import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Login, { action as loginAction } from './Login';
import Profile from './Profile';
import SignUp, { action as signUpAction } from './SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Profile />,
	},
	{
		path: '/login',
		element: <Login />,
		action: loginAction,
	},
	{
		path: '/signup',
		element: <SignUp />,
		action: signUpAction,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
