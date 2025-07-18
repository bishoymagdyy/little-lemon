import React, { useState } from 'react'; // Required for hooks

import PropTypes from 'prop-types';



const BookingForm =({availableTimes = [], dispatch = () => {}, submitForm}) => {


    const [name, setName] = useState('')
    const [occasion , setOccasion] = useState('');
    const [date , setDate] = useState('');
    const [time , setTime] = useState('');
    const [guest , setGuest] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({name, date, time, guest, occasion});
    };

    const handleChange=(e)=>{
        setDate(e.target.value);
        dispatch({type: 'UPDATE_TIMES', date: e.target.value});
    };


    return(
        <form className='form' onSubmit={handleSubmit}>
            <fieldset>
                <div className='forms'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"  value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='forms'>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={handleChange}  required />
                </div>
                <div className='forms'>
                    <label htmlFor="time">Time:</label>
                    <select type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="">Select Time</option>
                        {availableTimes.map( time => (
                            <option key={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className='forms'>
                    <label htmlFor="guest">Number of guests:</label>
                    <input className='guestt' type="number" id="guest" name="guest" value={guest} onChange={(e) => setGuest(e.target.value)} required placeholder="0" min={1} maxLength={10}/>
                </div>
                <div className='forms'>
                    <label htmlFor="occasion">Occasion:</label>
                    <select type="text" id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div>
                    <button className='submit-btn'  disabled={!name} aria-label="On Click" type={"submit"} value={"Make Your Reservation"}>
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
    );
};



BookingForm.propTypes = {
    availableTimes: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired
};


export default BookingForm;