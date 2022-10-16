import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import StayList from './StayList/StayList';

function App() {
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [guestNumber, setGuestNumber] = useState(0);
	return (
		<div className='app'>
			<header className='app__header'>
				<img src={logo} alt='windbnb' />
				<SearchBox
					setCity={setCity}
					setCountry={setCountry}
					setGuestNumber={setGuestNumber}
				/>
			</header>
			<main className='app__stayList'>
				<StayList
					city={city}
					country={country}
					guestNumber={guestNumber}
				/>
			</main>
			<footer className='app__footer'>
				<p>
					created by{' '}
					<a href='https://github.com/RanningMan'>RanningMan</a> -
					devChallenge.io
				</p>
			</footer>
		</div>
	);
}

export default App;
