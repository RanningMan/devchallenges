import './BlogComponent.css';
import Img1 from '../assets/image1.png';
import Img2 from '../assets/image2.png';
import Img3 from '../assets/image3.png';

export default function BlogComponent() {
	return (
		<div className='blog'>
			<div className='blog__content'>
				<h1 className='blog__content__header'>
					Why should you have a cat?
				</h1>
				<p>
					Having a cat around you can actually trigger the release of
					calming chemicals in your body which lower your stress and
					anxiety leves
				</p>
				<a
					className='blog__content__link'
					href='https://mailchi.mp/wayofcats/vaultconsultationinprogress?mepr-unauth-page=67030&redirect_to=%2Fblog%2F'
				>
					READ MORE
				</a>
			</div>
			<div className='blog__images'>
				<img className='blog__image-1' src={Img1} alt='cat1' />
				<img className='blog__image-2' src={Img2} alt='cat2' />
				<img className='blog__image-3' src={Img3} alt='cat3' />
			</div>
		</div>
	);
}
