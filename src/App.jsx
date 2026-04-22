import { useState, useEffect } from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Brand from './sections/Brand';
import Footer from './components/Footer';
import Shop from './sections/Shop';
import Promotion from './sections/Promotion';
import Community from './sections/Community';
import TopBanner from './components/TopBanner';
import FixedTopBtn from './components/FixedTopBtn';

function App() {
  const [topBanner, setTopBanner] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
      // console.log(scrollTop)
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  const upTopBanner = () => {
    setTopBanner('up');
  };

  return (
    <div className={`app-container ${topBanner} ${isScrolled ? 'scrolled' : ''} `}>
      <FixedTopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header />
      <main>
        <section id="brand" className='section'>
          <Brand />
        </section>
        <section id="shop" className='section'>
          <Shop />
        </section>
        <section id="promotion" className='section'>
          <Promotion />
        </section>
        <section id="community" className='section'>
          <Community />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
