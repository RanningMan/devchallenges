import './App.css';
import Info from './Info';
import Payment from './Payment';
import PaymentContextProvider from './PaymentContext';
import Bag from './photo1.png';
import Shoe from './photo2.png';

const itemData = [
  {
    id: '0',
    name: "Vomtage Backbag",
    photo: Bag,
    currentPrice: 54.99,
    previousPrice: 94.99,
    count: 1
  },
  {
    id: '1',
    name: "Levi Shoes",
    photo: Shoe,
    currentPrice: 74.99,
    previousPrice: 124.99,
    count: 1
  }
]

const App = () => {
  
  return (
    <div className="App">
      <header>
        <h1>Checkout</h1>
      </header>
      <PaymentContextProvider value={itemData}>
        <main>
          <Info />
          <Payment />
        </main>
      </PaymentContextProvider>
      <footer>
        <p>created by Ran Xia - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
