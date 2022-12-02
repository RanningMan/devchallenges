import { Outlet, useNavigate } from 'react-router';
import './App.css';
import Logo from './assets/CatwikiLogo.svg';
import WhiteLogo from './assets/CatwikiLogo-white.svg';

function App() {
	const navigate = useNavigate();
	return (
		<div className='App'>
			<header>
				<img src={Logo} alt='cat wiki' onClick={() => navigate('/')} />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<img src={WhiteLogo} alt='cat wiki' />
				<span>
					@ created by{' '}
					<a href='https://github.com/RanningMan'>RanningMan</a>
				</span>
			</footer>
		</div>
	);
}

export default App;
