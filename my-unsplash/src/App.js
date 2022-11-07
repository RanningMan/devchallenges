import { useEffect, useState } from 'react';
import './App.css';
import logo from './my_unsplash_logo.svg';

function Modal({
	headerText,
	submitButton,
	deleteButton,
	onCancelClick,
	onSubmitClick,
	onDeleteClick,
	children,
}) {
	return (
		<div className='modalWrapper'>
			<div className='modal'>
				<div className='modal__header'>{headerText}</div>
				<div className='modal__content'>{children}</div>
				<div className='modal__footer'>
					<button
						className='button button-cancel'
						onClick={onCancelClick}
					>
						Cancel
					</button>
					{submitButton && (
						<button
							className='button button-submit'
							onClick={onSubmitClick}
						>
							Submit
						</button>
					)}
					{deleteButton && (
						<button
							className='button button-delete'
							onClick={onDeleteClick}
						>
							Delete
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

function App() {
	const [addPhotoModalOpen, setAddPhotoModalOpen] = useState(false);
	const [deletePhotoModalOpen, setDeletePhotoModalOpen] = useState(false);
	const [hoveredImage, setHoveredImage] = useState('');
	const [images, setImages] = useState([
		{ id: 'logo#id', label: 'logo', url: logo, password: 'password' },
	]);
	const [firstColumn, setFirstColumn] = useState([]);
	const [secondColumn, setSecondColumn] = useState([]);
	const [thirdColumn, setThirdColumn] = useState([]);

	useEffect(() => {
		let localFirstColumn = [];
		let localSecondColumn = [];
		let localThirdColumn = [];
		images.forEach((image, idx) => {
			if (idx % 3 === 0) {
				localFirstColumn.push(image);
			} else if (idx % 3 === 1) {
				localSecondColumn.push(image);
			} else {
				localThirdColumn.push(image);
			}
		});
		setFirstColumn(localFirstColumn);
		setSecondColumn(localSecondColumn);
		setThirdColumn(localThirdColumn);
	}, [images]);

	const AddPhotoModal = (
		<Modal
			headerText='Add a new photo'
			submitButton
			onCancelClick={() => setAddPhotoModalOpen(false)}
		>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='photo_label'>
					Label
				</label>
				<input
					className='inputBlock__input'
					tpye='text'
					id='photo_label'
				/>
			</div>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='photo_url'>
					Photo URL
				</label>
				<input
					className='inputBlock__input'
					tpye='text'
					id='photo_url'
				/>
			</div>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='password'>
					Password
				</label>
				<input
					className='inputBlock__input'
					tpye='password'
					id='photo_password'
				/>
			</div>
		</Modal>
	);

	const DeletePhotoModal = (
		<Modal
			headerText='Are you sure'
			submitButton
			onCancelClick={() => setDeletePhotoModalOpen(false)}
		>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='password'>
					Password
				</label>
				<input
					className='inputBlock__input'
					tpye='password'
					id='photo_password'
				/>
			</div>
		</Modal>
	);

	return (
		<div className='App'>
			<header>
				<div className='logo'>
					<img src={logo} alt='my unsplash' />
				</div>
				<div className='searchBar'>
					<span className='material-symbols-outlined icon'>
						search
					</span>
					<input type='text' placeholder='search by name' />
				</div>
				<button
					className='button'
					onClick={() => setAddPhotoModalOpen((prev) => !prev)}
				>
					Add a photo
				</button>
			</header>
			<main>
				{[firstColumn, secondColumn, thirdColumn].map((imageList) => (
					<div className='column'>
						{imageList.map((image) => {
							let isHovered = hoveredImage === image?.id;
							return (
								<div
									className={`image${
										isHovered ? ' image-hover' : ''
									}`}
									onMouseEnter={() =>
										setHoveredImage(image?.id)
									}
									onMouseLeave={() => {
										setHoveredImage('');
									}}
								>
									{isHovered && (
										<>
											<button
												className='image__deleteButton'
												onClick={() =>
													setDeletePhotoModalOpen(
														true
													)
												}
											>
												delete
											</button>
											<div className='image__label'>
												{image.label}
											</div>
										</>
									)}
									<img src={image.url} alt={image.label} />
								</div>
							);
						})}
					</div>
				))}
			</main>
			{addPhotoModalOpen && AddPhotoModal}
			{deletePhotoModalOpen && DeletePhotoModal}
		</div>
	);
}

export default App;
