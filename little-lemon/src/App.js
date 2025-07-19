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
import {Routes, Route, useNavigate} from 'react-router-dom';
import Specials from './components/specials';
import BookingPage from './components/bookingPage';
import ConfirmBooking from './components/confirmBooking';


             //browser was blocking running the script on the index page so I added it here.

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
      const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        let result = [];
        let random = seededRandom(seed);

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    export const submitAPI = function(formData) {
        return true;
    };



// Initialize available times
const initializeTimes = () => {
  return fetchAPI(new Date());
};



// Reducer function to update available times
const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const date = new Date(action.date);
    console.log("Processing date:", date, "Day:", date.getDate());
    const times = fetchAPI(date)
    console.log("Generated times:", times);
    return times;
  }
  return state;
};






function App() {


  const[availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);

const navigate = useNavigate();
function submitForm(formData){
  if (submitAPI(formData)){
    navigate('/components/confirmBooking')
  }
}


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
              element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}
            />
            <Route path="/components/confirmBooking" element={<ConfirmBooking/>}/>
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

