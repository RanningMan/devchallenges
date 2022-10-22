import { useEffect, useState } from 'react';
import './App.css';
import LargeCard from './LargeCard';
import MiddleCard from './MiddleCard';
import ProgressBar from './ProgressBar';
import SmallCard from './SmallCard';
import {
	getCurrentWeather,
	getWeatherNext5Days,
	getWeekday,
	getMonth,
	getMilesFromMeter,
	getMphFromMeterPerSecond,
	getWindDirectionFromDegree,
} from './utils';

function App() {
	const [location, setLocation] = useState([]);
	const [city, setCity] = useState('Beijing');
	const [currentWeather, setCurrentWeather] = useState(null);
	const [next5Weathers, setNext5Weathers] = useState([]);
	const [unit, setUnit] = useState('f');

	useEffect(() => {
		const getCurrentLocation = navigator.geolocation.getCurrentPosition(
			(coordinate) => {
				setLocation([
					coordinate.coords.latitude,
					coordinate.coords.longitude,
				]);
			}
		);
		window.addEventListener('load', getCurrentLocation);
		return () => {
			window.removeEventListener('load', getCurrentLocation);
		};
	}, []);

	useEffect(() => {
		const [lat, lon] = location;
		const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2a37090230976e883348b3004b90ee0b`;
		const fetchCity = async (url) => {
			try {
				const response = await fetch(url);
				const responseJson = await response.json();
				const lists = responseJson.list;
				setCurrentWeather(getCurrentWeather(lists[0]));
				setNext5Weathers(getWeatherNext5Days(lists));
				setCity(responseJson.city.name);
			} catch (error) {
				console.log(error.message);
			}
		};
		if (lat !== undefined && lon !== undefined) {
			fetchCity(url);
		}
	}, [location]);

	const windDirection = () => {
		return (
			<div className='__direction'>
				<span className='__directionIcon'>
					<span
						className='material-symbols-outlined'
						style={{ rotate: `${currentWeather.windDirection}deg` }}
					>
						navigation
					</span>
				</span>
				{getWindDirectionFromDegree(currentWeather.windDirection)}
			</div>
		);
	};

	const percentageBar = () => {
		return <ProgressBar progress={currentWeather.humidity} />;
	};

	return (
		currentWeather && (
			<div className='App'>
				<LargeCard
					location={city}
					temperature={parseInt(currentWeather.temp)}
					unit={unit}
					weather={currentWeather.weather}
				/>
				<div className='App__middleSmallCards'>
					<div className='App__fiveDaysPredict'>
						{next5Weathers.map(({ max, min, id, localTime }) => {
							return (
								<SmallCard
									key={localTime}
									title={
										localTime.getDate() ===
										new Date().getDate() + 1
											? 'Tomorrow'
											: `${getWeekday(
													localTime.getDay()
											  )}, ${localTime.getDate()} ${getMonth(
													localTime.getMonth()
											  )}`
									}
									content={id}
									high={parseInt(max)}
									low={parseInt(min)}
									unit={unit}
								/>
							);
						})}
					</div>
					<div className='App__todayDetail'>
						<div className='App__todayDetails__header'>
							Today's Highlights
						</div>
						<div className='App__todayDetail__content'>
							<MiddleCard
								title={'Wind status'}
								content={getMphFromMeterPerSecond(
									currentWeather.windSpeed
								)}
								unit={'mph'}
								footer={windDirection}
							/>
							<MiddleCard
								title={'Humidity'}
								content={currentWeather.humidity}
								unit={'%'}
								footer={percentageBar}
							/>
							<MiddleCard
								title={'Visibility'}
								content={getMilesFromMeter(
									currentWeather.visibility
								)}
								unit={'miles'}
							/>
							<MiddleCard
								title={'Air Pressue'}
								content={currentWeather.pressure}
								unit={'mb'}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
}

export default App;
