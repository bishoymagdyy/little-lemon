import Header from './components/header';
import React, {useReducer} from 'react';
import Nav from './components/nav';
import About from './components/about';
import Footer from './components/footer';
import Home from './home';
import './App.css';
import './style.css'
import '@fontsource/markazi-text/400.css';
import '@fontsource/markazi-text/700.css';
import '@fontsource/karla'
import { Routes, Route } from 'react-router-dom';
import Specials from './components/specials';
import BookingPage from './components/bookingPage';


// Initialize available times
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};



// Reducer function to update available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of date
      // Later you can implement date-based filtering here
      return initializeTimes();
    default:
      return state;
  }
};





function App() {


  const[availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);



  return (
    <div className="App">
      <React.Fragment>
        <header className="navbar">
          <Header />
          <Nav />
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route
              path="/components/bookingPage"
              element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}
            />
            <Route path="/components/specials" element={<Specials />} />
            <Route path="/components/about" element={<About/>} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    </div>
  );
}

export { initializeTimes, updateTimes };
export default App;
