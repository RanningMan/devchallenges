import { useEffect, useState } from 'react';
import './App.css';
import './Temperature.css';
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
	convertCtoF,
	convertFtoC,
} from './utils';

function App() {
	const [location, setLocation] = useState([]);
	const [city, setCity] = useState('Beijing');
	const [currentWeather, setCurrentWeather] = useState(null);
	const [next5Weathers, setNext5Weathers] = useState([]);
	const [unit, setUnit] = useState('f');
	const [currentLoc, setCurrentLoc] = useState([]);

	useEffect(() => {
		const getCurrentLocation = navigator.geolocation.getCurrentPosition(
			(coordinate) => {
				setLocation([
					coordinate.coords.latitude,
					coordinate.coords.longitude,
				]);
				setCurrentLoc([
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
		const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
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

	const switchUnit = () => {
		let temp = currentWeather.temp;
		if (unit === 'c') {
			temp = convertCtoF(currentWeather.temp);
			setUnit('f');
		} else {
			temp = convertFtoC(currentWeather.temp);
			setUnit('c');
		}
		setCurrentWeather({
			...currentWeather,
			temp,
		});
	};

	return (
		currentWeather && (
			<div className='App'>
				<LargeCard
					location={city}
					currentLoc={currentLoc}
					temperature={parseInt(currentWeather.temp)}
					unit={unit}
					weather={currentWeather.weather}
					updateLocation={setLocation}
				/>
				<div className='App__middleSmallCards'>
					<div className='App__unitSwitcher'>
						<button
							className={`__temperature-sm celsius App__unitSwitcher__button ${
								unit === 'c'
									? 'unit-selected'
									: 'unit-unselected'
							}`}
							onClick={switchUnit}
						></button>
						<button
							className={`__temperature-sm fahrenheit App__unitSwitcher__button ${
								unit === 'f'
									? 'unit-selected'
									: 'unit-unselected'
							}`}
							onClick={switchUnit}
						></button>
					</div>
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
