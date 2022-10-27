import { useRef, useState, useCallback } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './App.css';
import JobCard from './JobCard';
import { fetchJobs } from './utils';

function RadioLine({ label, selectedRadio, onRadioSelected }) {
	return (
		<div
			className='App__params__location__defaultOption'
			onClick={() => onRadioSelected(label)}
		>
			<input type='radio' checked={selectedRadio === label} readOnly />
			<label>{label}</label>
		</div>
	);
}

function Loading() {
	return <div className='loading'></div>;
}

export async function loader() {
	const coordinate = await new Promise((resolve) => {
		navigator.geolocation.getCurrentPosition(async (coordinate) => {
			resolve(coordinate);
		});
	});
	const response = await fetch(
		`http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinate.coords.latitude}&lon=${coordinate.coords.longitude}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
	);
	const responseJson = await response.json();
	const location = responseJson[0].name;
	return await fetchJobs('', location, 0);
}

function App() {
	const {
		jobs: initialJobList,
		location: initialLocation,
		start,
	} = useLoaderData();
	const [jobList, setJobList] = useState(initialJobList);
	const [selectedRadio, setSelectedRadio] = useState('');
	const [fulltimeOnly, setFulltimeOnly] = useState(false);
	const qRef = useRef('');
	const [location, setLocation] = useState(initialLocation);
	const [currentPage, setCurrentPage] = useState(start + 1);
	const [loading, setLoading] = useState(false);

	const fetchJobList = useCallback(
		async (passedInCurrentPage) => {
			setLoading(true);
			const { jobs } = await fetchJobs(
				qRef.current,
				location,
				passedInCurrentPage
					? 10 * (passedInCurrentPage - 1)
					: 10 * (currentPage - 1)
			);
			setJobList(jobs);
			setLoading(false);
		},
		[location, currentPage]
	);

	const onSearchClick = () => {
		fetchJobList();
	};

	const onRadioSelected = (label) => {
		setSelectedRadio(label);
		setLocation(label);
		setCurrentPage(1);
	};

	const onPageClick = (currentPage) => {
		if (currentPage > 0) {
			setCurrentPage(currentPage);
			fetchJobList(currentPage);
		}
	};

	return (
		<div className='App'>
			<header className='App__header'>
				<b>Google</b> Jobs
			</header>
			<div className='App__searchBox'>
				<div className='App__searchBox__wrapper'>
					<span className='material-symbols-outlined App__Icon'>
						work
					</span>
					<input
						className='App__searchBox__input'
						type='text'
						placeholder='Title, companies, expertise or benefits'
						onChange={(e) => (qRef.current = e.target.value)}
					/>
					<button
						className='App__searchBox__button'
						onClick={onSearchClick}
					>
						Search
					</button>
				</div>
			</div>
			<main>
				<div className='App__params'>
					<div className='App__params__jobType'>
						<input
							type='checkbox'
							onClick={() => setFulltimeOnly((prev) => !prev)}
						/>
						<label>Full time</label>
					</div>
					<div className='App__params__location'>
						<div className='App__params__location__header'>
							Location
						</div>
						<div className='App__params__location__inputWrapper'>
							<span className='material-symbols-outlined App__Icon'>
								public
							</span>
							<input
								className='App__params__location__input'
								type='text'
								placeholder='City, state, zip code or country'
								onChange={(e) => {
									setLocation(e.target.value);
									setSelectedRadio('');
								}}
								value={location}
							/>
						</div>
						<div className='App__params__location__defaultWrapper'>
							<RadioLine
								label='London'
								onRadioSelected={onRadioSelected}
								selectedRadio={selectedRadio}
							/>
							<RadioLine
								label='Amsterdam'
								onRadioSelected={onRadioSelected}
								selectedRadio={selectedRadio}
							/>
							<RadioLine
								label='New York'
								onRadioSelected={onRadioSelected}
								selectedRadio={selectedRadio}
							/>
							<RadioLine
								label='Berlin'
								onRadioSelected={onRadioSelected}
								selectedRadio={selectedRadio}
							/>
						</div>
					</div>
				</div>
				{loading ? (
					<div className='App__loading'>
						<Loading />
					</div>
				) : (
					<div className='App__jobList'>
						{jobList
							.filter((job) => {
								if (fulltimeOnly) {
									return job.extensions.includes('Full-time');
								} else {
									return true;
								}
							})
							.map((job) => (
								<Link
									key={job.job_id}
									to={`job/${encodeURIComponent(job.job_id)}`}
									className='__reactRouterLink'
								>
									<JobCard
										companyName={job.company_name}
										icon={job.thumbnail}
										jobTitle={job.title}
										jobType={
											job.extensions.includes('Full-time')
												? 'FullTime'
												: 'PartTime'
										}
										location={job.location}
										postTime={
											job.detected_extensions?.posted_at
										}
									/>
								</Link>
							))}
						<div className='App__jobList__page'>
							<div
								className='App__jobList__pageButton'
								onClick={() => onPageClick(currentPage - 1)}
							>
								{'<'}
							</div>
							{new Array(4).fill(0).map((_, idx) => {
								if (currentPage === 1 && idx === 0) {
									return null;
								}
								if (currentPage > 1 && idx === 3) {
									return null;
								}
								return (
									<div
										key={idx}
										className={`App__jobList__pageButton ${
											idx === 1
												? 'App__jobList__pageButton-selected'
												: ''
										}`}
										onClick={() =>
											onPageClick(currentPage - 1 + idx)
										}
									>
										{currentPage - 1 + idx}
									</div>
								);
							})}
							<div className='App__jobList__pageDot'>...</div>
							<div
								className={`App__jobList__pageButton`}
								onClick={() => onPageClick(currentPage + 9)}
							>
								{currentPage + 9}
							</div>
							<div
								className='App__jobList__pageButton'
								onClick={() => onPageClick(currentPage + 1)}
							>
								{'>'}
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
