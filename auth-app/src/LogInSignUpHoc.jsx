import { Form } from 'react-router-dom';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

import './LogInSignUpHoc.css';
import Logo from './assets/devchallenges.svg';
import Google from './assets/Google.svg';
import Facebook from './assets/Facebook.svg';
import Twitter from './assets/Twitter.svg';
import Github from './assets/Github.svg';

function LoginSignUp({ header, buttonText, action, footer }) {
	return (
		<div className='loginsignup'>
			<Form className='loginsignup__form' method='post' action={action}>
				<img src={Logo} alt='dev challenge' />
				{header}
				<div className='loginsignup__form__input'>
					<span className='material-symbols-outlined'>mail</span>
					<input type='text' name='email' placeholder='Email' />
				</div>
				<div className='loginsignup__form__input'>
					<span className='material-symbols-outlined'>lock</span>
					<input
						type='password'
						name='password'
						placeholder='Password'
					/>
				</div>
				<button className='loginsignup__form__button' type='submit'>
					{buttonText}
				</button>
			</Form>
			<div className='loginsignup__form__splitline'>
				or continue with these social profile
			</div>
			<div className='loginsignup__form__logoList'>
				<img src={Google} alt='login with google' />
				<img
					src={Facebook}
					alt='login with Facebook'
					onClick={() =>
						Auth.federatedSignIn({
							provider: CognitoHostedUIIdentityProvider.Facebook,
						})
					}
				/>
				<img src={Twitter} alt='login with Twitter' />
				<img src={Github} alt='login with github' />
			</div>
			{footer}
		</div>
	);
}

export default LoginSignUp;
