import { Link, redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import './Login.css';
import LoginSignUp from './LogInSignUpHoc';

async function login(username, password) {
	try {
		return await Auth.signIn(username, password);
	} catch (error) {
		console.log('error loging in', error);
		throw error;
	}
}

export const action = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
	try {
		const user = await login(email, password);
		console.log(user);
		return redirect('/');
	} catch (error) {
		alert(error);
	}
};

function Login() {
	const header = <h2>Login</h2>;
	const footer = (
		<div>
			Don't have an account yet? <Link to='/signup'>Register</Link>
		</div>
	);
	return (
		<LoginSignUp
			header={header}
			footer={footer}
			buttonText='Login'
			action='/login'
		/>
	);
}

export default Login;
