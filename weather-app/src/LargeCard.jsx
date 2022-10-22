import { useEffect, useState } from 'react';
import Background from './assets/Cloud-background.png';
import { loadImageForWeather } from './imageLoader';
import './LargeCard.css';
import Temperature from './Temperature';
import { getWeekday, getMonth } from './utils';

function SearchButton({ children }) {
	return <div className='__searchButton'>{children}</div>;
}

function LargeCard({
	location,
	temperature,
	unit,
	weather,
	onSearchButtonClick,
}) {
	const [weatherImg, setWeatherImg] = useState('clear');
	useEffect(() => {
		setWeatherImg(loadImageForWeather(weather));
	}, [weather]);
	const today = new Date();
	return (
		<div className='largeCard'>
			<div className='largeCard__header'>
				<SearchButton>Search for places</SearchButton>
				<div
					className='__yourLocation__button'
					onClick={onSearchButtonClick}
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
