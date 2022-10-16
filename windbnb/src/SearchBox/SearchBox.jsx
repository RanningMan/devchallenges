import { useEffect, useState } from 'react';
import './SearchBox.css';
import { useFetchStayList } from '../utils';

function CollapsedSearchBox({ setExpand, location, guest }) {
	return (
		<div className='searchBox-collapse' onClick={() => setExpand(true)}>
			<div className='searchBox__location-collapse'>
				{location || `Search Location`}
			</div>
			<div className='searchBox__guest-collapse'>
				{guest > 0 ? `${guest} guests` : `Add Guests`}
			</div>
			<div className='searchBox__search-collapse'>
				<span className='searchBox__searchIcon-red material-symbols-outlined'>
					search
				</span>
			</div>
		</div>
	);
}

function LocationDropdown({ stayList, setLocation }) {
	return (
		<ul className='searchBox__optionsList-stayList'>
			{[
				...new Set(
					stayList.map((stay) => `${stay.city}, ${stay.country}`)
				),
			]
				.slice(0, 5)
				.map((stay) => (
					<li
						className='searchBox__optionsList-stayItem'
						key={stay}
						onClick={() => setLocation(stay)}
					>
						<span className='material-symbols-outlined'>
							location_on
						</span>
						{stay}
					</li>
				))}
		</ul>
	);
}

function NumberAdder({ title, subtitle, number, updateNumber }) {
	const [localNumber, setLocalNumber] = useState(number);
	const onMinusClick = () => {
		let prev = localNumber;
		setLocalNumber(prev - 1);
		updateNumber(prev - 1);
	};
	const onPlusClick = () => {
		let prev = localNumber;
		setLocalNumber(prev + 1);
		updateNumber(prev + 1);
	};
	return (
		<div className='searchBox__guestDropdown__addNumber'>
			<div className='searchBox__guestDropdown__addNumber__title'>
				{title}
			</div>
			<div className='searchBox__guestDropdown__addNumber__subtitle'>
				{subtitle}
			</div>
			<div className='searchBox__guestDropdown__addNumber__buttons'>
				<button onClick={onMinusClick}>-</button>
				<span>{localNumber}</span>
				<button onClick={onPlusClick}>+</button>
			</div>
		</div>
	);
}

function GuestDropdown({ setGuest }) {
	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);
	const updateAdults = (newAdults) => {
		let prevChilren = children;
		setAdults(newAdults);
		setGuest(newAdults + prevChilren);
	};
	const updateChildren = (newChildren) => {
		let prevAdults = adults;
		setChildren(newChildren);
		setGuest(prevAdults + newChildren);
	};
	return (
		<div className='searchBox__guestDropdown'>
			<NumberAdder
				title={'Adults'}
				subtitle={'Ages 13 or above'}
				number={0}
				updateNumber={updateAdults}
			/>
			<NumberAdder
				title={'Children'}
				subtitle={'Ages 2 - 12'}
				number={0}
				updateNumber={updateChildren}
			/>
		</div>
	);
}

function ExpandSearchBox({
	setExpand,
	setCity,
	setCountry,
	setGuestNumber,
	location,
	guest,
	setLocation,
	setGuest,
}) {
	const [focusComponent, setFocusComponent] = useState('');
	const stayList = useLocation(location);
	const search = () => {
		setExpand(false);
		setCity(location.split(',')[0].trim());
		setCountry(location.split(',')[1].trim());
		setGuestNumber(guest);
	};
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
	useEffect(() => {
		const onResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
	const Mobile = (
		<div className='searchBox-expand'>
			<div className='searchBox__header-expand'>
				<p>Edit your search</p>
				<div
					className='searchBox__cross'
					onClick={() => setExpand(false)}
				>
					X
				</div>
			</div>
			<div className='searchBox__input'>
				<div className='searchBox__location-expand'>
					<label>Location</label>
					<input
						id='location'
						type='text'
						placeholder='Add location'
						onFocus={() => setFocusComponent('location')}
						onChange={(e) => setLocation(e.target.value)}
						value={location}
					></input>
				</div>
				<div className='searchBox__guest-expand'>
					<label>guests</label>
					<input
						id='guest'
						type='text'
						placeholder='Add guests'
						onFocus={() => setFocusComponent('guest')}
						onChange={(e) => setGuest(parseInt(e.target.value))}
						value={`${guest} guests`}
					></input>
				</div>
				<div className='searchBox__optionsList'>
					{focusComponent !== 'guest' ? (
						<LocationDropdown
							stayList={stayList}
							setLocation={setLocation}
						/>
					) : (
						<GuestDropdown setGuest={setGuest} />
					)}
				</div>
			</div>
			<div className='searchBox__search-expand' onClick={search}>
				<span className='searchBox__searchIcon-white material-symbols-outlined'>
					search
				</span>
				Search
			</div>
		</div>
	);

	const Desktop = (
		<div className='searchBox-expand'>
			<div className='searchBox__input'>
				<div className='searchBox__location-expand'>
					<label>Location</label>
					<input
						id='location'
						type='text'
						placeholder='Add location'
						onFocus={() => setFocusComponent('location')}
						onChange={(e) => setLocation(e.target.value)}
						value={location}
					></input>
				</div>
				<div className='searchBox__guest-expand'>
					<label>guests</label>
					<input
						id='guest'
						type='text'
						placeholder='Add guests'
						onFocus={() => setFocusComponent('guest')}
						onChange={(e) => setGuest(parseInt(e.target.value))}
						value={`${guest} guests`}
					></input>
				</div>
				<div className='searchBox__search-desktop'>
					<div className='searchBox__search-expand' onClick={search}>
						<span className='searchBox__searchIcon-white material-symbols-outlined'>
							search
						</span>
						Search
					</div>
				</div>
			</div>
			<div className='searchBox__dropdown'>
				<div
					className={
						focusComponent === 'location'
							? `searchBox__optionsList`
							: `searchBox__optionsList-hide`
					}
				>
					<LocationDropdown
						stayList={stayList}
						setLocation={setLocation}
					/>
				</div>
				<div
					className={
						focusComponent === 'guest'
							? `searchBox__optionsList`
							: `searchBox__optionsList-hide`
					}
				>
					<GuestDropdown setGuest={setGuest} />
				</div>
			</div>
		</div>
	);

	return (
		<div className='searchBox'>
			{isDesktop ? Desktop : Mobile}
			<div className='overlay' onClick={() => setExpand(false)}></div>
		</div>
	);
}

function SearchBox({ setCity, setCountry, setGuestNumber }) {
	const [expand, setExpand] = useState(false);
	const [location, setLocation] = useState('');
	const [guest, setGuest] = useState(0);
	return expand ? (
		<ExpandSearchBox
			setExpand={setExpand}
			setCity={setCity}
			setCountry={setCountry}
			setGuestNumber={setGuestNumber}
			location={location}
			guest={guest}
			setLocation={setLocation}
			setGuest={setGuest}
		/>
	) : (
		<CollapsedSearchBox
			setExpand={setExpand}
			location={location}
			guest={guest}
		/>
	);
}

function useLocation(location) {
	let [, country] = location.split(',').map((str) => str.trim(' '));
	return useFetchStayList(country);
}

export default SearchBox;
