import { Link, redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import './Login.css';
import LoginSignUp from './LogInSignUpHoc';

async function signUp(username, email, password) {
	try {
		const { user } = await Auth.signUp({
			username,
			password,
			attributes: {
				email, // optional
			},
		});
		console.log(user);
		return user;
	} catch (error) {
		console.log('error signing up:', error);
		throw error;
	}
}

export const action = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
	try {
		await signUp(email, email, password);
		return redirect('/');
	} catch (error) {
		alert(error);
	}
};

function SignUp() {
	const header = (
		<div>
			<h2>Join thousands of learners from around the world </h2>
			<p>
				Master web development by making real-life projects. There are
				multiple paths for you to choose
			</p>
		</div>
	);
	const footer = (
		<div>
			Already a member? <Link to='/login'>Login</Link>
		</div>
	);
	return (
		<LoginSignUp
			header={header}
			footer={footer}
			buttonText='start coding now'
			action='/signup'
		/>
	);
}

export default SignUp;
