import './MainLayout.css';

function Mainlayout({ upperRender, lowerRender }) {
	return (
		<div className='App__layout'>
			<div className='App__layout__upper'>{upperRender()}</div>
			{lowerRender && (
				<div className='App__layout__bottom'>{lowerRender()}</div>
			)}
		</div>
	);
}

export default Mainlayout;
