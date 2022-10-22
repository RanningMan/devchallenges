import './Temperature.css';
const Temperature = ({ unit, children, size }) => (
	<div
		className={`__temperature-${size} ${
			unit === 'c' ? 'celsius' : 'fahrenheit'
		}`}
	>
		{children}
	</div>
);

export default Temperature;
