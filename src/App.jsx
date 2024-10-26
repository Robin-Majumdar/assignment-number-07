import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';


function App() {
  const [coins, setCoins] = useState(0);

  const addCoins = () => {
    setCoins(coins + 500000);
  };

  return (
    <>
      <header>
        <Navbar coins={coins} />
        <Banner addCoins={addCoins} />
      </header>
      <main>

        <section>
          <Blogs></Blogs>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
};

export default App;
