import Crow from './Scarecrow.png';
import './App.css';

function App() {
  return (
    <div class='app'>
      <header>
        404 not found
      </header>
      <main class='main'>
        <div class='left'>
          <img src={Crow} alt='404'/>
        </div>
        <div class='right'>
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <button>Back to homepage</button>
        </div>
      </main>
      <footer><p>created by Ran Xia - devChallenges.io</p></footer>
    </div>
  );
}

export default App;
