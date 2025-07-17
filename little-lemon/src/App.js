import Header from './header';
import Nav from './nav';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';
import './App.css';
import './style.css'
import '@fontsource/markazi-text/400.css'; // Regular weight
import '@fontsource/markazi-text/700.css'; // Bold weight
import '@fontsource/karla'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* Header/Nav appears on all pages */}
      <header className="navbar">
        <Header />
        <Nav /> {/* Your nav links should use <Link> components */}
      </header>

      {/* Main content that changes per route */}
      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials />
              <Testimonials />
              <About />
            </>
          } />
        </Routes>
      </main>

      {/* Footer appears on all pages */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
