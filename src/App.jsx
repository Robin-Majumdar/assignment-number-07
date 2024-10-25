import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
    const [coins, setCoins] = useState(0);

    const addCoins = () => {
        setCoins(coins + 500000);
    };

  return (
    <>
      <header>
      <Navbar coins={coins} />
      <Banner addCoins={addCoins}/>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
};

export default App;
