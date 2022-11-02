import './App.css';
import DnD from './image.svg';

function App() {
	return (
		<div className='app'>
			<header className='header'>Upload your image</header>
			<div className='subtitle'>File should be Jpeg, png, ...</div>
			<div className='dragAndDropBox'>
				<input type='file' id='dragAndDrop' />
				<label htmlFor='dragAndDrop' className='dragAndDropBackground'>
					<img src={DnD} alt='drag and drop' />
					<p>Drag & Drop your image here</p>
				</label>
			</div>
			<div className='linebreaker'>Or</div>
			<div className='uploadButton'>
				<input type='file' id='file' />
				<label for='file'>Choose a file</label>
			</div>
		</div>
	);
}

export default App;
