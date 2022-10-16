import { useFetchStayList } from '../utils';
import './StayList.css';
import StayCard from './StayCard';

function StayList({ city, country, guestNumber }) {
	const stayList = useFetchStayList(country, city, guestNumber);
	return (
		<div className='stayList'>
			<div className='stayList__intro'>
				<span>
					Stays in {city}, {country}
				</span>
				<span>{stayList.length}+ stays</span>
			</div>
			<div className='stayList__stays'>
				{stayList.map((stay) => (
					<div key={stay.title} className='stayList__stayCard'>
						<StayCard stay={stay} />
					</div>
				))}
			</div>
		</div>
	);
}

export default StayList;
