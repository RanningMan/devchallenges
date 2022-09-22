import './App.css';
import Info from './Info';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Checkout</h1>
      </header>
      <main>
        <Info />
        <div className='payment'></div>
      </main>
      <footer>
        <p>created by Ran Xia - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
