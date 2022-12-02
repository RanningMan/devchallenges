import './Home.css';
import Mainlayout from '../MainLayout';
import HeroComponent, { loader } from './HeroComponent';
import BlogComponent from './BlogComponent';

function Home() {
	return (
		<Mainlayout upperRender={HeroComponent} lowerRender={BlogComponent} />
	);
}

export { loader };

export default Home;
