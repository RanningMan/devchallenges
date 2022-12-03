import './Home.css';
import Mainlayout from '../MainLayout';
import HeroComponent, { loader } from './HeroComponent';
import BlogComponent from './BlogComponent';

function Home() {
	return (
		<div className='home'>
			<Mainlayout
				upperRender={HeroComponent}
				lowerRender={BlogComponent}
			/>
		</div>
	);
}

export { loader };

export default Home;
