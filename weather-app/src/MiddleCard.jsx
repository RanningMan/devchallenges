import './MiddleCard.css';

export default function MiddleCard({ title, content, unit, footer }) {
	return (
		<div className='middleCard'>
			<div className='middleCard__header'>{title}</div>
			<div className='middleCard__content'>
				<span>{content}</span>
				<span>{unit}</span>
			</div>
			{footer && <div className='middleCard__footer'>{footer()}</div>}
		</div>
	);
}
