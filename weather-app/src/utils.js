export const WeatherEnum = {
	Thunderstorm: 'thunderstorm',
	Drizzle: 'drizzle',
	Rain: 'rain',
	Snow: 'snow',
	Atmosphere: 'atmosphere',
	Sunny: 'sunny',
	Clouds: 'clouds',
};

export const getTodaysWeather = (weatherId) => {
	let todaysweather = null;
	if (weatherId > 800) {
		todaysweather = WeatherEnum.Clouds;
	} else if (weatherId === 800) {
		todaysweather = WeatherEnum.Sunny;
	} else if (weatherId >= 700) {
		todaysweather = WeatherEnum.Atmosphere;
	} else if (weatherId >= 600) {
		todaysweather = WeatherEnum.Snow;
	} else if (weatherId >= 500) {
		todaysweather = WeatherEnum.Rain;
	} else if (weatherId === 300) {
		todaysweather = WeatherEnum.Drizzle;
	} else if (weatherId >= 200) {
		todaysweather = WeatherEnum.Thunderstorm;
	} else {
		todaysweather = WeatherEnum.Sunny;
	}
	return todaysweather;
};

export const getCurrentWeather = (weather) => {
	return {
		temp: weather.main.temp,
		weather: getTodaysWeather(weather.weather[0].id),
		pressure: weather.main.pressure,
		humidity: weather.main.humidity,
		visibility: weather.visibility,
		windSpeed: weather.wind.speed,
		windDirection: weather.wind.deg,
	};
};

export const getWeatherNext5Days = (lists) => {
    let res = new Map();
    for(let list of lists) {
        let localTime = new Date(`${list.dt_txt} UTC`);
        let date = localTime.getDate();
        if(date === new Date().getDate()) {
            continue;
        }
        let temp = list.main.temp;
        let weatherId = getTodaysWeather(list.weather[0].id);
        if(res.has(date)) {
            let cur = res.get(date);
            cur.min = Math.min(cur.min, temp);
            cur.max = Math.max(cur.max, temp);
            res.set(date, cur);
        } else {
            res.set(date, {min: temp, max: temp, id: weatherId, localTime: localTime});
        }
    }
    return [...res.values()];
}

export const getWeekday = (day) => {
    switch (day) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        default:
            throw Error('Invalid week day');
    }
};

export const getMonth = (month) => {
    switch (month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
        default:
            throw Error('Invalid month');
    }
};

export const getMilesFromMeter = (meter) => {
    return (meter * 0.00062).toFixed(2);
}

export const getMphFromMeterPerSecond = (meter) => {
    return Math.floor(meter * 2.2);
}

export const getWindDirectionFromDegree = (degree) => {
    if(degree === 0) {
        return 'N';
    } else if(degree < 90) {
        return 'NE';
    } else if(degree === 90) {
        return 'E';
    } else if(degree < 180) {
        return 'SE';
    } else if(degree === 180) {
        return 'S';
    } else if(degree < 270) {
        return 'SW';
    } else if(degree === 270) {
        return 'W';
    } else if(degree < 360) {
        return 'NW';
    } else if(degree === 360) {
        return 'N';
    } else {
        throw Error('Invalid wind degree');
    }
}

export const convertCtoF = (c) => {
    return c * 1.8 + 32;
}

export const convertFtoC = (f) => {
    return (f - 32) / 1.8;
}