import { useLoaderData, useNavigate } from 'react-router';

import './HeroComponent.css';
import WhiteLogo from '../assets/CatwikiLogo-white.svg';
import SearchBar from './SearchBar';
import { API } from 'aws-amplify';

const apiName = 'topSearchedBreeds';

export async function loader() {
	const getAllBreeds = async () => {
		const res = await API.get(apiName, '/breedsList', {});
		localStorage.setItem('allBreeds', JSON.stringify(res));
		return res;
	};
	let allBreeds = localStorage.getItem('allBreeds');
	if (!allBreeds) {
		allBreeds = await getAllBreeds();
	} else {
		allBreeds = JSON.parse(allBreeds);
	}
	const topSearch = await API.get(apiName, '/topSearch', {});
	const topSearchedDetails = allBreeds
		.filter((breed) => topSearch.includes(breed.id))
		.map((breed) => {
			return {
				searchId: breed.id,
				imageUrl: breed.image.url,
				breedName: breed.name,
				description: breed.description,
			};
		});
	localStorage.setItem('topSearch', JSON.stringify(topSearchedDetails));
	return topSearchedDetails.slice(0, 4);
}

function HeroComponent() {
	const topSearched = useLoaderData();
	const navigate = useNavigate();

	const onSearch = async (breedId) => {
		await API.post(apiName, `/breed?id=${breedId}`, {
			body: {
				searchId: Date.now().toString(),
				breedId: breedId,
			},
		});
		navigate(`/breed/${breedId}`);
	};

	return (
		<div className='hero'>
			<div className='heroBackground'>
				<div className='heroBackground__content'>
					<div className='heroBackground__content__header'>
						<img src={WhiteLogo} alt='cat wiki' />
					</div>
					<div className='heroBackground__content__subtitle'>
						Get to know more about your cat breed
					</div>
					<SearchBar onDropDownItemClick={onSearch} />
				</div>
			</div>
			<div className='mostSearchedBreeds'>
				<div className='mostSearchedBreeds__title'>
					Most Searched Breeds
				</div>
				<div className='mostSearchedBreeds__headerLine'>
					<div className='mostSearchedBreeds__headerLine__header'>
						66+ breeds for you to discover
					</div>
					<div
						className='mostSearchedBreeds__headerLine__seeMore'
						onClick={() => {
							return navigate('/breedList');
						}}
					>
						see more
					</div>
				</div>
				<div className='mostSearchedBreeds__content'>
					{topSearched.map((item) => (
						<div
							className='mostSearchedBreeds__content__img'
							key={item.searchId}
							onClick={() => onSearch(item.searchId)}
						>
							<img src={item.imageUrl} alt={item.breedName} />
							<div className='mostSearchedBreeds__content__img__name'>
								{item.breedName}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HeroComponent;
