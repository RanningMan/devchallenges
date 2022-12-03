import { useEffect, useState } from 'react';

import './SearchBar.css';

function DropDown({ prefix, isModal, onItemClick }) {
	const [breeds, setBreeds] = useState([]);
	useEffect(() => {
		const allBreeds = JSON.parse(localStorage.getItem('allBreeds'));
		const matchedWords = allBreeds.filter((breed) =>
			breed.name.startsWith(prefix)
		);
		setBreeds(matchedWords);
	}, [prefix]);
	return (
		<div className={isModal ? 'dropdown-modal' : 'dropdown'}>
			{breeds.map((breed) => (
				<div
					key={breed.id}
					className='dropdown__item'
					onClick={() => onItemClick(breed.id)}
				>
					{breed.name}
				</div>
			))}
		</div>
	);
}

function SearchBarInner({ isMobileStyle, onClick, onDropDownItemClick }) {
	const [prefix, setPrefix] = useState();
	useEffect(() => {
		const onClick = () => {
			setPrefix(null);
		};
		window.addEventListener('click', onClick);
		return () => {
			window.removeEventListener('click', onClick);
		};
	}, []);
	return (
		<div className='searchBarWrapper'>
			<div className={isMobileStyle ? 'modal__searchBar' : 'searchBar'}>
				<input
					type='text'
					placeholder='Search'
					onClick={onClick}
					onChange={(e) => {
						setTimeout(() => {
							setPrefix(e.target.value);
						}, 1000);
					}}
					autoFocus
				/>
				<span className='material-symbols-outlined searchBar__icon'>
					search
				</span>
			</div>
			{prefix && (
				<DropDown
					prefix={prefix}
					isModal={isMobileStyle}
					onItemClick={onDropDownItemClick}
				></DropDown>
			)}
		</div>
	);
}

function MobileSearchModal({ closeModal, onDropDownItemClick }) {
	return (
		<div className='modalWrapper' onClick={closeModal}>
			<div className='modal'>
				<div className='modal__header' onClick={closeModal}>
					X
				</div>
				<SearchBarInner
					isMobileStyle={true}
					onClick={(e) => e.stopPropagation()}
					onDropDownItemClick={onDropDownItemClick}
				/>
			</div>
		</div>
	);
}

function SearchBar({ onDropDownItemClick }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const onResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		<>
			<SearchBarInner
				isMobileStyle={false}
				onClick={() => isMobile && setIsModalOpen(true)}
				onDropDownItemClick={onDropDownItemClick}
			/>
			{isModalOpen && (
				<MobileSearchModal
					closeModal={() => setIsModalOpen(false)}
					onDropDownItemClick={onDropDownItemClick}
				/>
			)}
		</>
	);
}

export default SearchBar;
