import './App.css';
import Navigation from './Navigation';
import heroImage from './assets/heroImage.jpg';

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
		name: 'our works',
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
					</section>
					<section className='email'>
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
          <div className='cardGroup'>
            <div className='card'>
              <div className='card__icon card__icon-blue'>
                <i class="material-symbols-outlined">edit</i>
              </div>
              <h3 className='card__header'>UI/UX Design</h3>
              <p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
              <button >Get Started</button>
            </div>
          </div>
          <div className='cardGroup'>
            <div className='card'>
              <div className='card__icon card__icon-green'>
                <i class="material-symbols-outlined">code</i>
              </div>
              <h3 className='card__header'>Front End</h3>
              <p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
              <button >Get Started</button>
            </div>
          </div>
          <div className='cardGroup'>
            <div className='card'>
              <div className='card__icon card__icon-red'>
                <i class="material-symbols-outlined">edit</i>
              </div>
              <h3 className='card__header'>Back End</h3>
              <p className='card__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
              <button >Get Started</button>
            </div>
          </div>
        </article>
				<article id='works'></article>
				<article id='clients'></article>
				<article id='contacts'></article>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
