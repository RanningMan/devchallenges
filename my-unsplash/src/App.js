import { useEffect, useRef, useState } from 'react';
import './App.css';
import logo from './my_unsplash_logo.svg';
import { API } from 'aws-amplify';

const apiName = 'unsplash';
const path = '/images';

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

function AddPhotoModal({ onCancel, setImages }) {
	const labelRef = useRef('');
	const urlRef = useRef('');
	const passwordRef = useRef('');

	const addPhoto = () => {
		const newImage = {
			id: Date.now().toString(),
			uploadTime: Date.now(),
			label: labelRef.current,
			url: urlRef.current,
			password: passwordRef.current,
		};
		const postData = async () => {
			const myInit = {
				body: newImage,
			};

			return await API.post(apiName, path, myInit);
		};
		postData().then(() => {
			onCancel();
			setImages((prev) => {
				return [newImage, ...prev];
			});
		});
	};

	return (
		<Modal
			headerText='Add a new photo'
			submitButton
			onCancelClick={onCancel}
			onSubmitClick={addPhoto}
		>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='photo_label'>
					Label
				</label>
				<input
					className='inputBlock__input'
					tpye='text'
					id='photo_label'
					onChange={(e) => {
						labelRef.current = e.target.value;
					}}
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
					onChange={(e) => {
						urlRef.current = e.target.value;
					}}
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
					onChange={(e) => {
						passwordRef.current = e.target.value;
					}}
				/>
			</div>
		</Modal>
	);
}

function DeletePhotoModal({ onCancel, imageToDelete, setImages }) {
	const passwordRef = useRef('');
	const deletePhoto = async () => {
		const deleteData = async () => {
			return await API.del(
				apiName,
				`${path}/object/${imageToDelete.id}/${imageToDelete.uploadTime}`,
				{}
			);
		};
		if (imageToDelete.password === passwordRef.current) {
			deleteData().then(() => {
				setImages((prev) => {
					return prev.filter(
						(image) => image.id !== imageToDelete.id
					);
				});
				onCancel();
			});
		} else {
			alert('Wrong password!');
		}
	};
	return (
		<Modal
			headerText='Are you sure'
			deleteButton
			onDeleteClick={deletePhoto}
			onCancelClick={onCancel}
		>
			<div className='inputBlock'>
				<label className='inputBlock__header' htmlFor='password'>
					Password
				</label>
				<input
					className='inputBlock__input'
					tpye='password'
					id='photo_password'
					onChange={(e) => (passwordRef.current = e.target.value)}
				/>
			</div>
		</Modal>
	);
}

function App() {
	const [addPhotoModalOpen, setAddPhotoModalOpen] = useState(false);
	const [deletePhotoModalOpen, setDeletePhotoModalOpen] = useState(false);
	const [hoveredImage, setHoveredImage] = useState('');
	const [imageToDelete, setImageToDelete] = useState('');
	const [images, setImages] = useState([]);
	const [firstColumn, setFirstColumn] = useState([]);
	const [secondColumn, setSecondColumn] = useState([]);
	const [thirdColumn, setThirdColumn] = useState([]);
	const keywordRef = useRef('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await API.get(apiName, path, {});
			setImages(response);
		};
		fetchData();
	}, []);

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

	const fetchDataWithKeyword = async (keyword) => {
		const response = await API.get(apiName, path, {
			body: keyword,
		});
		setImages(response);
	};

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
					<input
						type='text'
						placeholder='search by name'
						onChange={(e) => (keywordRef.current = e.target.value)}
						onKeyDown={(e) => {
							if (e.code === 'Enter') {
								fetchDataWithKeyword(keywordRef.current);
							}
						}}
					/>
				</div>
				<button
					className='button'
					onClick={() => setAddPhotoModalOpen((prev) => !prev)}
				>
					Add a photo
				</button>
			</header>
			<main>
				{[firstColumn, secondColumn, thirdColumn].map(
					(imageList, idx) => (
						<div className='column' key={idx}>
							{imageList.map((image) => {
								let isHovered = hoveredImage === image?.id;
								return (
									<div
										key={image.id}
										className='image'
										onMouseEnter={() =>
											setHoveredImage(image?.id)
										}
										onMouseLeave={() => {
											setHoveredImage('');
										}}
									>
										<img
											src={image.url}
											alt={image.label}
										/>
										{isHovered && (
											<div className='image-hover'>
												<button
													className='image__deleteButton'
													onClick={() => {
														setDeletePhotoModalOpen(
															true
														);
														setImageToDelete(image);
													}}
												>
													delete
												</button>
												<div className='image__label'>
													{image.label}
												</div>
											</div>
										)}
									</div>
								);
							})}
						</div>
					)
				)}
			</main>
			{addPhotoModalOpen && (
				<AddPhotoModal
					onCancel={() => setAddPhotoModalOpen(false)}
					setImages={setImages}
				/>
			)}
			{deletePhotoModalOpen && (
				<DeletePhotoModal
					onCancel={() => setDeletePhotoModalOpen(false)}
					imageToDelete={imageToDelete}
					setImages={setImages}
				/>
			)}
		</div>
	);
}

export default App;
