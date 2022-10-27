import { useLoaderData, Link } from 'react-router-dom';
import './JobDescription.css';
import './App.css';
import './JobCard.css';
import { fetchJobDetail } from './utils';

export async function loader({ params }) {
	return fetchJobDetail(params.jobId);
}

function JobDescription() {
	const job = useLoaderData();
	const jobTitle = job.title;
	const jobType = job.extensions.includes('Full-time')
		? 'FullTime'
		: 'PartTime';
	const postTime = job.detected_extensions?.posted_at;
	const thumbnail = job.thumbnail;
	const companyName = job.company_name;
	const location = job.location;
	const description = job.description;
	return (
		<div className='App jobDescription'>
			<header className='App__header'>
				<b>Google</b> Jobs
			</header>
			<main>
				<div className='App__params'>
					<Link
						to={'/'}
						// relative='path'
						className='__reactRouterLink jobDescription__backButton'
					>
						<span className='material-symbols-outlined __backIcon'>
							keyboard_backspace
						</span>
						<span>Back to search</span>
					</Link>
					<div>
						<div className='jobDescription__howToApply__header'>
							How to apply
						</div>
						<div className='jobDescription__howToApply__content'>
							{job.via}
						</div>
					</div>
				</div>
				<div className='jobDescription__content'>
					<div>
						<span>
							<h2>{jobTitle}</h2>
						</span>
						<span className='jobDescription__content__jobType'>
							{jobType}
						</span>
					</div>
					<div className='jobDescription__content__postTime'>
						<span className='material-symbols-outlined'>timer</span>
						{postTime}
					</div>
					<div className='jobDescription__content__companyInfo'>
						<img
							className='jobDescription__content__companyInfo__icon'
							src={thumbnail}
							alt={companyName}
						/>
						<div>
							<div className='jobDescription__content__companyInfo__companyName'>
								{companyName}
							</div>
							<div className='jobDescription__content__companyInfo__location'>
								<span className='material-symbols-outlined'>
									public
								</span>
								{location}
							</div>
						</div>
					</div>
					<div>
						<p>{description}</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default JobDescription;
