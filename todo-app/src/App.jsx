import './App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const PageEnum = {
	ALL: 'all',
	ACTIVE: 'Active',
	COMPLETED: 'Completed',
};

function AllOrActivePage({ data, addItem, completeItem, undoItem }) {
	const [inputValue, setInputValue] = useState('');
	const onInputClick = () => {
		addItem(inputValue);
		setInputValue('');
	};
	const onCheckboxClick = (item) => {
		if (item.state === 'active') {
			completeItem(item);
		} else {
			undoItem(item);
		}
	};
	return (
		<div>
			<div className='allOrActive__add'>
				<input
					className='allOrActive__add__inputBox'
					type='text'
					placeholder='add details'
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					value={inputValue}
				></input>
				<button
					className='allOrActive__add__button'
					onClick={onInputClick}
				>
					Add
				</button>
			</div>
			<ul className='itemList'>
				{data.map((item) => (
					<li
						className='item'
						key={item.id}
						onClick={() => onCheckboxClick(item)}
					>
						<input
							className='item__checkbox'
							type='checkbox'
							checked={item.state !== 'active'}
							readOnly
						/>
						<p
							className={
								item.state === 'active'
									? 'item__content'
									: 'item__content-cross'
							}
						>
							{item.name}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

function CompletedPage({ data, undoItem, deleteItem }) {
	const onDeleteAllClick = () => {
		for (let item of data) {
			deleteItem(item);
		}
	};
	return (
		<div>
			<ul className='itemList'>
				{data.map((item) => (
					<li
						key={item.id}
						className='item'
						onClick={() => undoItem(item)}
					>
						<input
							className='item__checkbox'
							type='checkbox'
							checked
							readOnly
						></input>
						<p className='item__content-cross'>{item.name}</p>
						<span
							className='material-symbols-outlined item__deleteIcon'
							onClick={(e) => {
								e.stopPropagation();
								deleteItem(item);
							}}
						>
							delete
						</span>
					</li>
				))}
			</ul>
			<button
				className='complete__deleteAllButton'
				onClick={onDeleteAllClick}
			>
				<span className='material-symbols-outlined item__deleteIcon'>
					delete
				</span>
				delete all
			</button>
		</div>
	);
}

function App() {
	const [page, setPage] = useState(PageEnum.ALL);
	const [tasks, setTasks] = useState([]);
	const firstRender = useRef(true);
	const addItem = (item) => {
		setTasks((prev) => [
			...prev,
			{ id: Date.now(), name: item, state: 'active' },
		]);
	};
	const completeItem = (item) => {
		setTasks((prev) => {
			let res = [...prev];
			let idx = prev.findIndex((value) => item.id === value.id);
			if (idx >= 0) {
				res[idx].state = 'completed';
				return res;
			}
			return prev;
		});
	};
	const undoItem = (item) => {
		setTasks((prev) => {
			let res = [...prev];
			let idx = prev.findIndex((value) => item.id === value.id);
			if (idx >= 0) {
				res[idx].state = 'active';
				return res;
			}
			return prev;
		});
	};
	const deleteItem = (item) => {
		setTasks((prev) => {
			let res = [...prev];
			let idx = prev.findIndex((value) => item.id === value.id);
			if (idx >= 0) {
				res.splice(idx, 1);
				return res;
			}
			return prev;
		});
	};
	useEffect(() => {
		if (!firstRender.current) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
			firstRender.current = false;
		}
	}, [tasks, setTasks]);
	return (
		<div className='app'>
			<header className='app__header'>
				<h1>#todo</h1>
			</header>
			<main className='app__main'>
				<ul className='app__main__tabs'>
					<li
						className={
							page === PageEnum.ALL
								? 'app__main__tab app__main__tab-selected'
								: 'app__main__tab'
						}
						onClick={() => setPage(PageEnum.ALL)}
					>
						All
					</li>
					<li
						className={
							page === PageEnum.ACTIVE
								? 'app__main__tab app__main__tab-selected'
								: 'app__main__tab'
						}
						onClick={() => setPage(PageEnum.ACTIVE)}
					>
						Active
					</li>
					<li
						className={
							page === PageEnum.COMPLETED
								? 'app__main__tab app__main__tab-selected'
								: 'app__main__tab'
						}
						onClick={() => setPage(PageEnum.COMPLETED)}
					>
						Completed
					</li>
				</ul>
				<div>
					{page === PageEnum.COMPLETED ? (
						<CompletedPage
							data={[
								...tasks.filter(
									(item) => item.state === 'completed'
								),
							]}
							undoItem={undoItem}
							deleteItem={deleteItem}
						/>
					) : page === PageEnum.ALL ? (
						<AllOrActivePage
							data={[...tasks]}
							addItem={addItem}
							completeItem={completeItem}
							undoItem={undoItem}
						/>
					) : (
						<AllOrActivePage
							data={[
								...tasks.filter(
									(item) => item.state === 'active'
								),
							]}
							addItem={addItem}
							completeItem={completeItem}
						/>
					)}
				</div>
			</main>
			<footer className='app__footer'>
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
