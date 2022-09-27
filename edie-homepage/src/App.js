import './App.css';
import Navigation from './Navigation';
import heroImage from './assets/heroImage.jpg';
import smarthome from './assets/smarthome.jpg';
import onboard from './assets/onboard.png';
import booking from './assets/booking.png';
import juiceProduct from './assets/juice-product.png';
import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.png';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';

const links = [
	{
		name: 'home',
		href: '#home',
	},
	{
		name: 'services',
		href: '#services',
	},
	{
		name: 'works',
		href: '#works',
	},
	{
		name: 'clients',
		href: '#clients',
	},
	{
		name: 'contacts',
		href: '#contacts',
	},
];

function App() {
	return (
		<div className='App'>
			<header>
				<div className='logo'>Edie</div>
				<Navigation className='nav' links={links}></Navigation>
			</header>
			<main>
				<article id='home'>
					<section className='ourjob'>
						<p>Unhappy with your website?</p>
						<h1>We create beautiful and fast web services</h1>
					</section>
					<section className='heroImage'>
						<img src={heroImage} alt='home' />
					</section>
					<section className='story'>
						<h1>Story, emotion and purpose</h1>
						<p>
							We help transform your ideas into real world
							applications that will outperform your toughest
							competition and help you achieve your strategic
							goals in short period of time.
						</p>
						<div className='email__label'>
							Want us to contact you?
						</div>
						<div className='email__input'>
							<input type='text' placeholder='Email' />
							<button>Join</button>
						</div>
					</section>
				</article>
				<article id='services'>
					<section><h2>We offer high demand servies</h2></section>
					<section className='cardGroup'>
						<div className='card'>
							<div className='card__icon card__icon-blue'>
								<i className="material-symbols-outlined">edit</i>
							</div>
							<h3 className='card__header'>UI/UX Design</h3>
							<p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
							<button >Get Started</button>
						</div>
						<div className='card'>
							<div className='card__icon card__icon-green'>
								<i className="material-symbols-outlined">code</i>
							</div>
							<h3 className='card__header'>Front End</h3>
							<p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
							<button >Get Started</button>
						</div>
						<div className='card'>
							<div className='card__icon card__icon-red'>
								<i className="material-symbols-outlined">edit</i>
							</div>
							<h3 className='card__header'>Back End</h3>
							<p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
							<button >Get Started</button>
						</div>
					</section>
				</article>
				<article id='works'>
					<section><h2>Good design means good business</h2></section>
					<div className='work'>
						<div className='work__card'>
							<img className='work__card__img' src={smarthome} alt='smarthome'/>
							<div className='work__card__type'>Full stack application</div>
							<h4 className='work__card__name'>Smart home dashboard</h4>
						</div>
						<div className='work__card'>
							<img className='work__card__img' src={onboard} alt='onboard application'/>
							<div className='work__card__type'>UX/UI design</div>
							<h4 className='work__card__name'>Onboard application</h4>
						</div>
						<div className='work__card'>
							<img className='work__card__img' src={booking} alt='booking system'/>
							<div className='work__card__type'>Mobile application</div>
							<h4 className='work__card__name'>booking system</h4>
						</div>
						<div className='work__card'>
							<img className='work__card__img' src={juiceProduct} alt='juice product'/>
							<div className='work__card__type'>Front End application</div>
							<h4 className='work__card__name'>Juice product homepage</h4>
							<div className='work__seeMore'>see more</div>
						</div>
					</div>
				</article>
				<article id='clients'>
					<section className='clients__team'>
						<div className='clients__teamIntro'>
							<div className='clients__teamIntro__meet'>Meet the team</div>
							<h3 className='clients__teamIntro__header'>We are chilled and a laidback team</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						<div className='clients__photoGroup'>
							<img src={person3} alt='team member3' />
							<img src={person1} alt='team member1' />
							<img src={person2} alt='team member2' />
						</div>
					</section>
					<section className='clients__clients'>
						<div className='clients__feedback'>
							<h4>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</h4>
						</div>
						<div className='clients__tag'>
							<img src={person4} alt='custoer' className='clients__img'/>
							<div className='clients__title'>
								<h3 className='clients__title__name'>Carlos Tran</h3>
								<h4 className='clients__title__company'>The Decorate Gatsby</h4>
							</div>
						</div>
					</section>
				</article>
				<article id='contacts'>
					<div  className='contacts__nav'>
						<Navigation forceVertical ignoreMobile links={links}/>
					</div>
					<div className='contacts__social__media'>
						<h1 className='contacts__social__media__name'>Edie</h1>
						<img className='contacts__social__media__tag' src={instagram} alt='instagram' />
						<img className='contacts__social__media__tag' src={linkedin} alt='linkedin' />
						<img className='contacts__social__media__tag' src={twitter} alt='twitter' />
					</div>
					<div className='email-light'>
						<div className='email__label-light'>
							Want us to contact you?
						</div>
						<div className='email__input'>
							<input type='text' placeholder='Email' />
							<button>Join</button>
						</div>
					</div>
				</article>
			</main>
			<footer><p>created by Ran Xia - devChallenges.io</p></footer>
		</div>
	);
}

export default App;
