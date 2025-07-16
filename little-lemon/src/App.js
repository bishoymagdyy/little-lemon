import Header from './header';
import Nav from './nav';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App" >
      <header className='navbar'>
        <Header />
        <Nav />
      </header>
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
