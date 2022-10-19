import { useEffect, useState, useRef } from 'react';
import './App.css';

function OneQuote({ children }) {
	return <p className='quote'>{children}</p>;
}

function RandomQuote({ quote, author, genre, setAuthorPage }) {
	return (
		<>
			<OneQuote>{quote}</OneQuote>
			<button className='randomQuote__button' onClick={setAuthorPage}>
				<div className='randomQuote__button__content'>
					<div className='randomQuote__button__author'>{author}</div>
					<div className='randomQuote__button__genre'>{genre}</div>
				</div>
				<span className='material-symbols-outlined randomQuote__button__arrow'>
					trending_flat
				</span>
			</button>
		</>
	);
}

function QuoteList({ author, quoteList }) {
	return (
		<div>
			<div className='quoteList__author'>{author}</div>
			{quoteList.map((quote) => (
				<OneQuote key={quote.id}>{quote.text}</OneQuote>
			))}
		</div>
	);
}

function Loading() {
	return <div className='loading'></div>;
}

function App() {
	const [appState, setAppState] = useState('random_quote');
	const [author, setAuthor] = useState(null);
	const [quote, setQuote] = useState('');
	const [genre, setGenre] = useState('');
	const [quoteList, setQuoteList] = useState([]);
	const firstTimeRenderRef = useRef(false);
	const getRandomQuote = async () => {
		try {
			const response = await (
				await fetch(
					'https://quote-garden.herokuapp.com/api/v3/quotes/random'
				)
			).json();
			const data = response.data[0];
			setAuthor(data.quoteAuthor);
			setQuote(data.quoteText);
			setGenre(data.quoteGenre);
		} catch (error) {
			throw Error(error.message);
		}
	};
	const getQuoteFromOneAuthor = async (author) => {
		try {
			const response = await (
				await fetch(
					`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
				)
			).json();
			setQuoteList(
				response.data.map((d) => {
					return { id: d._id, text: d.quoteText };
				})
			);
		} catch (error) {
			throw Error('Something went wrong');
		}
	};
	useEffect(() => {
		if (!firstTimeRenderRef.current) {
			getRandomQuote();
			firstTimeRenderRef.current = true;
		}
	}, []);
	return (
		<div className='app'>
			<header>
				<button
					className='app__header__button'
					onClick={() => {
						setAppState('loading');
						getRandomQuote().then(() =>
							setAppState('random_quote')
						);
					}}
				>
					<p>random</p>
					<span className='material-symbols-outlined'>cycle</span>
				</button>
			</header>
			<main>
				{appState === 'quote_list' ? (
					<QuoteList author={author} quoteList={quoteList} />
				) : appState === 'loading' ? (
					<Loading />
				) : (
					<RandomQuote
						quote={quote}
						author={author}
						genre={genre}
						setAuthorPage={() => {
							setAppState('loading');
							getQuoteFromOneAuthor(author).then(() =>
								setAppState('quote_list')
							);
						}}
					/>
				)}
			</main>
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
