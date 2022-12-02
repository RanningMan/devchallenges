import { useLoaderData } from 'react-router';
import './Breed.css';
import Mainlayout from './MainLayout';

export async function loader({ params }) {
	const breed = params.breedId;
	const imagesResp = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breed}`,
		{
			headers: {
				'x-api-key': process.env.REACT_APP_XAPIKEY,
			},
		}
	);
	const images = await imagesResp.json();
	const breedDetail = JSON.parse(localStorage.getItem('allBreeds')).filter(
		(cur) => cur.id === breed
	);
	return {
		...breedDetail[0],
		images,
	};
}

function Level({ number }) {
	return (
		<>
			{new Array(number).fill(0).map((_, idx) => (
				<span
					key={idx}
					className='level__block level__block-dark'
				></span>
			))}
			{new Array(Math.max(0, 5 - number)).fill(0).map((_, idx) => (
				<span
					key={idx}
					className='level__block level__block-light'
				></span>
			))}
		</>
	);
}

function BreedInfo({ breed }) {
	return (
		<div className='breedInfo'>
			<img
				className='breedInfo__image'
				src={breed.image.url}
				alt={breed.name}
			/>
			<div className='breedInfo__details'>
				<h3>{breed.name}</h3>
				<p>{breed.description}</p>
				<p className='breedInfo__details-content'>
					<b>Temperament: </b> {breed.temperament}
				</p>
				<p className='breedInfo__details-content'>
					<b>Origin: </b>
					{breed.origin}
				</p>
				<p className='breedInfo__details-content'>
					<b>Life Span: </b>
					{breed.life_span} years
				</p>
				<p className='breedInfo__details-level'>
					<b>Adaptability:</b>
					<Level number={breed.adaptability} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Affection level:</b>
					<Level number={breed.affection_level} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Child Friendly:</b>
					<Level number={breed.child_friendly} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Grooming:</b>
					<Level number={breed.grooming} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Intelligence:</b>
					<Level number={breed.intelligence} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Health issues:</b>
					<Level number={breed.health_issues} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Social needs:</b>
					<Level number={breed.social_needs} />
				</p>
				<p className='breedInfo__details-level'>
					<b>Stranger Friendly:</b>
					<Level number={breed.stranger_friendly} />
				</p>
			</div>
		</div>
	);
}

function BreedImages({ images }) {
	return (
		<div className='breedImage'>
			<h3>More Photos</h3>
			<div className='breedImage__imageList'>
				{images.map((image) => (
					<img
						key={image.url}
						className='breedImage__image'
						src={image.url}
						alt='other'
					/>
				))}
			</div>
		</div>
	);
}

function Breed() {
	const breed = useLoaderData();
	return (
		<Mainlayout
			upperRender={() => <BreedInfo breed={breed} />}
			lowerRender={() => <BreedImages images={breed.images} />}
		/>
	);
}

export default Breed;
