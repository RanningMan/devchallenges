import Clear from './assets/Clear.png';
import Hail from './assets/Hail.png';
import HeavyCloud from './assets/HeavyCloud.png';
import HeavyRain from './assets/HeavyRain.png';
import LightRain from './assets/LightRain.png';
import Snow from './assets/Snow.png';
import Thunderstorm from './assets/Thunderstorm.png';
import { WeatherEnum } from './utils';

export function loadImageForWeather(weather) {
    switch(weather) {
        case WeatherEnum.Clouds:
            return HeavyCloud;
        case WeatherEnum.Sunny:
            return Clear;
        case WeatherEnum.Atmosphere:
            return Hail;
        case WeatherEnum.Snow:
            return Snow;
        case WeatherEnum.Rain:
            return HeavyRain;
        case WeatherEnum.Drizzle:
            return LightRain;
        case WeatherEnum.Thunderstorm:
            return Thunderstorm;
        default:
            return Clear;
    }
}