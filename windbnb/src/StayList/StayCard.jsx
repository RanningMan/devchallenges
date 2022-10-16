import './StayCard.css';

function StayCard({ stay }) {
	return (
		<div className='stayCard'>
			<div className='stayCard__image'>
				<img src={stay.photo} alt={stay.title} />
			</div>
			<div className='stayCard__details'>
				{stay.superHost && (
					<span className='stayCard__details__superhost'>
						super host
					</span>
				)}
				<span>{stay.type}</span>
				{stay.beds && <span>{stay.beds} beds</span>}
				<span className='stayCard__rating'>
					<span className='material-symbols-outlined'>star</span>
					{parseInt(stay.rating).toFixed(2)}
				</span>
			</div>
			<div className='stayCard__title'>{stay.title}</div>
		</div>
	);
}

export default StayCard;
