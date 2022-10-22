import './SmallCard.css';
import { loadImageForWeather } from './imageLoader';
import Temperature from './Temperature';

export default function SmallCard({ title, content, high, low, unit }) {
	return (
		<div className='smallCard'>
			<div className='smallCard__header'>{title}</div>
			<div className='smallCard__content'>
				<img src={loadImageForWeather(content)} alt={content} />
			</div>
			<div className='smallCard__footer'>
				<Temperature unit={unit} size='sm'>
					{high}
				</Temperature>
				<Temperature unit={unit} size='sm'>
					{low}
				</Temperature>
			</div>
		</div>
	);
}
