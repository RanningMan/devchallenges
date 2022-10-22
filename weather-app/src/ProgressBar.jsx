import './ProgressBar.css';

export default function ProgressBar({ progress }) {
	return (
		<div className='progressBar'>
			<div className='progressBar__marks'>
				<span>0</span>
				<span>50</span>
				<span>100</span>
			</div>
			<div className='progressBar__bar'>
				<span style={{ width: `${progress}%` }}></span>
			</div>
			<div className='progressBar__unit'>%</div>
		</div>
	);
}
