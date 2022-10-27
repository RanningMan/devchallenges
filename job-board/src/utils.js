let inMemoryFetchResults = {};
let cacheJobs = undefined;
const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

export const loadFromLocalStorage = () => {
	if (localStorage.getItem('jobs')) {
		cacheJobs = JSON.parse(localStorage.getItem('jobs'));
	}
    if(!cacheJobs) {
        cacheJobs = {};
    }
};

export const fetchJobs = async (q, location, start) => {
	const key = `${q}#${location}#${start}`;
	if (inMemoryFetchResults[key]) {
		return inMemoryFetchResults[key];
	}
    if(!cacheJobs) {
        loadFromLocalStorage();
    }
	const response = await fetch(
		`${cors_api_url}serpapi.com/search.json?` +
		// 'http://localhost:3000/mock.json?' +
			new URLSearchParams({
				engine: 'google_jobs',
				q: q === '' ? location : q,
				location: location,
				hl: 'en',
				api_key: process.env.REACT_APP_SERP_API_KEY,
				start: start,
			})
	);
	const jobs = (await response.json()).jobs_results;
	jobs.forEach((job) => {
		if (!cacheJobs[job.job_id]) {
			cacheJobs[job.job_id] = job;
		}
	});
	let res = { jobs, location, start };
	inMemoryFetchResults[key] = res;
	localStorage.setItem('jobs', JSON.stringify(cacheJobs));
	return res;
};

export const fetchJobDetail = (jobId) => {
    if(!cacheJobs) {
        loadFromLocalStorage();
    }
	return cacheJobs[jobId];
};
