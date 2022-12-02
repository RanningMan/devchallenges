import { useLoaderData } from 'react-router';
import './BreedList.css';
import Mainlayout from './MainLayout';

export function loader() {
	return JSON.parse(localStorage.getItem('topSearch'));
}

function BreedListInner() {
	const breedsList = useLoaderData();
	return (
		<div className='breedList'>
			<h1>Top 10 most searched breeders</h1>
			{breedsList.map((breed, idx) => (
				<div key={breed.breedName} className='breedList__item'>
					<img
						className='breedList__item__img'
						src={breed.imageUrl}
						alt={breed.breedName}
					/>
					<div className='breedList__item__content'>
						<h2 className='breedList__item__name'>
							{idx + 1}. {breed.breedName}
						</h2>
						<p className='breedList__item__description'>
							{breed.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

function BreedList() {
	return <Mainlayout upperRender={BreedListInner} />;
}

export default BreedList;
