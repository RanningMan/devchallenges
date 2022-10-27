import './JobCard.css';

function JobCard({ icon, companyName, jobTitle, jobType, location, postTime }) {
	return (
		<div className='jobCard'>
			<img className='jobCard__icon' src={icon} alt={companyName} />
			<div className='jobCard__jobDetails'>
				<div className='jobCard__jobDetails__companyName'>
					{companyName}
				</div>
				<div className='jobCard__jobDetails__jobTitle'>{jobTitle}</div>
				<div className='jobCard__jobDetails__footer'>
					<div className='jobCard__jobDetails__jobType'>
						{jobType}
					</div>
					<div className='jobCard__jobDetails__locationPostTime'>
						<div className='jobCard__jobDetails__location'>
							<span className='material-symbols-outlined'>
								public
							</span>
							{location}
						</div>
						<div className='jobCard__jobDetails__postTime'>
							<span className='material-symbols-outlined'>
								timer
							</span>
							{postTime}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobCard;
