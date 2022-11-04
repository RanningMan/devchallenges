import { useState } from 'react';
import './App.css';
import DnD from './image.svg';

const AppState = {
	UPLOAD: 'upload',
	UPLOADING: 'uploading',
	UPLOADED: 'uploaded',
};

function UploadContent({ onFileDrop, onFileDragOver, onFileSelected }) {
	return (
		<>
			<header className='header'>Upload your image</header>
			<div className='subtitle'>File should be Jpeg, png, ...</div>
			<div
				className='dragAndDropBox'
				onDrop={onFileDrop}
				onDragOver={onFileDragOver}
			>
				<input
					type='file'
					id='dragAndDrop'
					accept='image/png, image/jpeg'
					onChange={onFileSelected}
					className='hidden'
				/>
				<label htmlFor='dragAndDrop' className='dragAndDropBackground'>
					<img src={DnD} alt='drag and drop' />
					<p>Drag & Drop your image here</p>
				</label>
			</div>
			<div className='linebreaker'>Or</div>
			<div className='button'>
				<input
					type='file'
					id='file'
					accept='image/png, image/jpeg'
					onChange={onFileSelected}
					className='hidden'
				/>
				<label htmlFor='file'>Choose a file</label>
			</div>
		</>
	);
}

function Uploading() {
	return (
		<div>
			<h2 className='header'>Uploading...</h2>
			<div className='emptyBar'>
				<hr className='blueBar' />
			</div>
		</div>
	);
}

function Uploaded({ imageToUpload, uploadedUrl }) {
	const onCopy = () => {
		navigator.clipboard.writeText(uploadedUrl).then(() => {
			window.confirm('Copied!');
		});
	};
	return (
		<>
			<div className='checkmark'>
				<span className='material-symbols-outlined check'>done</span>
			</div>
			<header className='header'>Uploaded Successfully!</header>
			<div className='dragAndDropBox'>
				<div className='dragAndDropBackground'>
					<img src={imageToUpload} alt='uploaded successfully' />
				</div>
			</div>
			<div className='imageUrl'>
				<input type='text' readOnly value={uploadedUrl} />
				<button className='button copyButton' onClick={onCopy}>
					CopyLink
				</button>
			</div>
		</>
	);
}

const getFileToUploadOnDrop = (dropEvent) => {
	if (dropEvent.dataTransfer.items) {
		if (dropEvent.dataTransfer.items.length > 1) {
			throw Error('Does not support uploading multiple images');
		}
		const item = dropEvent.dataTransfer.items[0];
		if (item.kind === 'file') {
			return item.getAsFile();
		}
	} else {
		if (dropEvent.dataTransfer.files.length > 1) {
			throw Error('Does not support uploading multiple images');
		}
		return dropEvent.dataTransfer.files[0];
	}
	return null;
};

const wait = (seconds = 3000) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, seconds)
	);
};

const uploadFile = async (file) => {
	alert(file.name);
	await wait();
	return Promise.resolve({ url: 'https://image.com', image: file });
};

function App() {
	const [appState, setAppState] = useState(AppState.UPLOAD);
	const [imageToUpload, setImageToUpload] = useState('');
	const [uploadedUrl, setUploadedUrl] = useState('');

	const onFileDragOver = (e) => {
		e.preventDefault();
	};

	const uploadImage = async (fileToUpload) => {
		if (fileToUpload) {
			setAppState(AppState.UPLOADING);
			const { url, image } = await uploadFile(fileToUpload);
			setUploadedUrl(url);
			setImageToUpload(image);
			setAppState(AppState.UPLOADED);
		}
	};

	const onImageDrop = async (e) => {
		e.preventDefault();
		try {
			const fileToUpload = getFileToUploadOnDrop(e);
			await uploadImage(fileToUpload);
		} catch (error) {
			console.log(error.message);
		}
	};

	const onImageSelected = async (e) => {
		const files = e.target.files;
		if (files.length > 1) {
			console.log('Does not support uploading multiple images');
		} else {
			const fileToUpload = files[0];
			await uploadImage(fileToUpload);
		}
	};

	let content = null;
	if (appState === AppState.UPLOAD) {
		content = (
			<UploadContent
				onFileDragOver={onFileDragOver}
				onFileDrop={onImageDrop}
				onFileSelected={onImageSelected}
			/>
		);
	} else if (appState === AppState.UPLOADING) {
		content = <Uploading />;
	} else if (appState === AppState.UPLOADED) {
		content = (
			<Uploaded imageToUpload={imageToUpload} uploadedUrl={uploadedUrl} />
		);
	}
	return <div className='app'>{content}</div>;
}

export default App;
