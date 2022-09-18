import Navigation from './Navigation';
import './App.css';
import design from './photo1.png';
import NameTag from './NameTag';

function App() {
  return (
    <div className="App">
      <header>
        <button>This Interior</button>
        <Navigation></Navigation>
      </header>
      <main>
        <div className='intro'>
          <h1 className='intro-header'>Modern interior</h1>
          <p className='intro-content'>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
          <a href='/' className='read-more'>Read more</a>
        </div>
        <div className='picture'>
          <img src={design} alt='this design' />
          <NameTag></NameTag>
        </div>
      </main>
      <footer>
        <p>created by Ran Xia - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
