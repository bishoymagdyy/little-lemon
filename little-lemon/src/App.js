import Header from './components/header';
import Nav from './components/nav';
import About from './components/about';
import Footer from './components/footer';
import Home from './home';
import './App.css';
import './style.css'
import '@fontsource/markazi-text/400.css'; // Regular weight
import '@fontsource/markazi-text/700.css'; // Bold weight
import '@fontsource/karla'
import { Routes, Route } from 'react-router-dom';
import Specials from './components/specials';


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
          <Route path="/" element={<Home/>} />
          <Route path="/components/specials" element={<Specials />} />
          <Route path="/components/about" element={<About/>} />
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
