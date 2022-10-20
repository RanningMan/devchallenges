import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Adventure from './assets/adventure.svg';
import Winner from './assets/winners.svg';

const fetchCountryContent = async () => {
	if (localStorage.getItem('all_country')) {
		return JSON.parse(localStorage.getItem('all_country'));
	}
	try {
		const response = await fetch('https://restcountries.com/v3.1/all');
		const countryInfo = await response.json();
		const nameCapitalFlag = countryInfo
			.filter(
				(country) =>
					country.name &&
					country.capital &&
					country.capital.length > 0 &&
					country.flags &&
					country.flags.svg
			)
			.map((country) => {
				const name = country.name.common;
				const capital = country.capital[0];
				const flag = country.flags.svg;
				return { name, capital, flag };
			});
		localStorage.setItem('all_country', JSON.stringify(nameCapitalFlag));
		return nameCapitalFlag;
	} catch (error) {
		throw error;
	}
};

function Result({ correctAnswer, onClick }) {
	return (
		<div className='result'>
			<div className='result__box__logo'>
				<img src={Winner} alt='winner' />
			</div>
			<h1 className='result__box__title'>Results</h1>
			<div className='result__box__content'>
				You got{' '}
				<span className='result__box__content__correctAnswer'>
					{correctAnswer}
				</span>{' '}
				correct answers
			</div>
			<button className='result__box__content__button' onClick={onClick}>
				Try again
			</button>
		</div>
	);
}

function Question({
	isPictureQuestion,
	question,
	options,
	selectedOption,
	onOptionClick,
	onNextClick,
}) {
	const getOptionStyle = (option) => {
		if (selectedOption === null) {
			return 'app__box__content__option';
		}
		if (selectedOption === option) {
			if (option[1]) {
				return 'app__box__content__option app__box__content__option-correct';
			} else {
				return 'app__box__content__option app__box__content__option-wrong';
			}
		} else {
			if (option[1]) {
				return 'app__box__content__option app__box__content__option-correct';
			} else {
				return 'app__box__content__option';
			}
		}
	};

	return (
		<div className='app__box__content'>
			{isPictureQuestion && (
				<img
					className='app__box__content__flag'
					src={isPictureQuestion}
					alt='flag'
				/>
			)}
			<h2 className='app__box__content__question'>{question}</h2>
			<div className='app__box__content__options'>
				{options.map((option, idx) => {
					return (
						<div
							className={getOptionStyle(option)}
							key={idx}
							onClick={() => onOptionClick(option)}
						>
							<span className='app__box__content__option__letter'>
								{String.fromCharCode('A'.charCodeAt(0) + idx)}
							</span>
							<p className='app__box__content__option__text'>
								{option[0]}
							</p>
						</div>
					);
				})}
			</div>
			{selectedOption && (
				<div className='app__box__content__next'>
					<button
						className='app__box__content__next__button'
						onClick={onNextClick}
					>
						Next
					</button>
				</div>
			)}
			<div className='app__box__logo'>
				<img src={Adventure} alt='country quiz'></img>
			</div>
		</div>
	);
}

function App() {
	const [question, setQuestion] = useState('');
	const [options, setOptions] = useState([]);
	const [countryInfo, setCountryInfo] = useState([]);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [wrong, setWrong] = useState(false);
	const [isPictureQuestion, setIsPictureQuestion] = useState(null);
	const [selectedOption, setSelectedOption] = useState(null);
	const [currentPage, setCurrentPage] = useState('question');

	useEffect(() => {
		const fetchCountryInfo = async () => {
			const countryInfo = await fetchCountryContent();
			setCountryInfo(countryInfo);
		};
		fetchCountryInfo();
	}, []);

	const generateQuestion = useCallback(() => {
		if (countryInfo.length > 0) {
			let randomCountry = Math.floor(Math.random() * countryInfo.length);
			let randomPosition = Math.floor(Math.random() * 4);
			let randomOptions = new Array(4).fill(0).map((_, idx) => {
				if (idx === randomPosition) {
					return [countryInfo[randomCountry].name, true];
				} else {
					return [
						countryInfo[
							(randomCountry + (idx + 1) * 30) %
								countryInfo.length
						].name,
						false,
					];
				}
			});
			let isCapitalQuestion = Math.random() > 0.5;
			if (isCapitalQuestion) {
				setQuestion(
					`${countryInfo[randomCountry].capital} is the capital of`
				);
				setIsPictureQuestion(null);
			} else {
				setQuestion(`Which Country does this flag belong to?`);
				setIsPictureQuestion(countryInfo[randomCountry].flag);
			}
			setOptions(randomOptions);
			setSelectedOption(null);
		}
	}, [countryInfo]);

	useEffect(() => {
		generateQuestion();
	}, [countryInfo, generateQuestion]);

	const onOptionClick = (option) => {
		if (option[1]) {
			setCorrectAnswer((prev) => prev + 1);
		} else {
			setWrong(true);
		}
		setSelectedOption(option);
	};

	const onNextClick = () => {
		if (wrong) {
			setCurrentPage('result');
		} else {
			generateQuestion();
		}
	};

	const onTryAgainClick = () => {
		generateQuestion();
		setCurrentPage('question');
		setWrong(false);
		setCorrectAnswer(0);
		setSelectedOption(null);
	};

	return (
		<div className='app'>
			<div className='app__box'>
				<h1 className='app__box__title'>country quiz</h1>
				{currentPage === 'question' ? (
					<Question
						isPictureQuestion={isPictureQuestion}
						question={question}
						options={options}
						selectedOption={selectedOption}
						onOptionClick={onOptionClick}
						onNextClick={onNextClick}
					/>
				) : (
					<Result
						correctAnswer={correctAnswer}
						onClick={onTryAgainClick}
					/>
				)}
			</div>
			<footer>
				<p>
					created by{' '}
					<a href='https://github.com/RanningMan'>RanningMan</a> -
					devChallenge.io
				</p>
			</footer>
		</div>
	);
}

export default App;
