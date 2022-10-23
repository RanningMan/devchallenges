import { useEffect, useState, useRef } from 'react';
import Background from './assets/Cloud-background.png';
import { loadImageForWeather } from './imageLoader';
import './LargeCard.css';
import Temperature from './Temperature';
import { getWeekday, getMonth } from './utils';

function SearchButton({ children, onClick }) {
	return (
		<div className='__searchButton' onClick={onClick}>
			{children}
		</div>
	);
}

function SearchPanel({ onCrossClick, resetLocation }) {
	const [cityList, setCityLList] = useState([]);
	const searchContentRef = useRef('');

	const onSearchContentChange = (e) => {
		searchContentRef.current = e.target.value;
	};

	const onSearchButtonClick = async () => {
		const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchContentRef.current}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
		const resposne = await fetch(url);
		const resposneJson = await resposne.json();
		setCityLList(
			resposneJson.map((city) => {
				return {
					name: city.name,
					lat: city.lat,
					lon: city.lon,
					country: city.country,
					state: city.state,
				};
			})
		);
	};

	return (
		<div className='largeCard searchPanel'>
			<div className='largeCard__cross' onClick={onCrossClick}>
				X
			</div>
			<div className='searchPanel__searchLine'>
				<span className='material-symbols-outlined searchPanel__icon'>
					search
				</span>
				<input
					className='searchPanel__input'
					type='text'
					placeholder='search location'
					onChange={onSearchContentChange}
				/>
				<button
					className='searchPanel__button'
					onClick={onSearchButtonClick}
				>
					Search
				</button>
			</div>
			<ul className='searchPanel__resultList'>
				{cityList.map((city) => (
					<li
						className='searchPanel__resultList__result'
						key={city.name}
						onClick={() => resetLocation(city.lat, city.lon)}
					>
						{city.name}, {city.state}, {city.country}
					</li>
				))}
			</ul>
		</div>
	);
}

function LargeCard({
	location,
	currentLoc,
	temperature,
	unit,
	weather,
	updateLocation,
}) {
	const today = new Date();
	const [panel, setPanel] = useState(false);
	const [weatherImg, setWeatherImg] = useState('clear');

	useEffect(() => {
		setWeatherImg(loadImageForWeather(weather));
	}, [weather]);

	const resetLocation = (lat, lon) => {
		setPanel(false);
		updateLocation([lat, lon]);
	};

	return panel ? (
		<SearchPanel
			onCrossClick={() => setPanel(false)}
			resetLocation={resetLocation}
		/>
	) : (
		<div className='largeCard'>
			<div className='largeCard__header'>
				<SearchButton onClick={() => setPanel(true)}>
					Search for places
				</SearchButton>
				<div
					className='__yourLocation__button'
					onClick={() => resetLocation(...currentLoc)}
				>
					<span className='material-symbols-outlined icon'>
						my_location
					</span>
				</div>
			</div>
			<div className='largeCard__image'>
				<div className='largeCard__backgroundImg'>
					<img src={Background} alt='background' />
				</div>
				<div className='largeCard__foregroundImg'>
					<img src={weatherImg} alt={weather} />
				</div>
			</div>
			<div className='largeCard__content'>
				<Temperature unit={unit} size='lg'>
					{temperature}
				</Temperature>
				<div className='__climate'>{weather}</div>
				<div className='__date'>
					Today<span className='dot'></span>
					<span>{getWeekday(today.getDay())}</span>,
					<span>
						{today.getDate()} {getMonth(today.getMonth())}
					</span>
				</div>
				<div className='__location'>
					<span className='material-symbols-outlined icon'>
						location_on
					</span>
					{location}
				</div>
			</div>
		</div>
	);
}

export default LargeCard;
