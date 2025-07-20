import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { submitAPI } from '../App';
import { useNavigate } from 'react-router-dom';

const BookingForm =({availableTimes = [], dispatch = () => {}, submitForm}) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [occasion , setOccasion] = useState('');
    const [date , setDate] = useState('');
    const [time , setTime] = useState('');
    const [guest , setGuest] = useState(1);
    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (fields) => {
        const errors = {};
        if (!fields.name) {
            errors.name = 'Please enter a name';
        } else if (fields.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
        }
        if (!fields.date) errors.date = 'Please select a date';
        if (!fields.time) errors.time = 'Please select a time';
        if (!fields.guest || fields.guest < 1) errors.guest = 'At least 1 guest required';
        if (!fields.occasion) errors.occasion = 'Please select an occasion';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate({ name, date, time, guest, occasion });
        setError(errors);
        setTouched({
            name: true,
            date: true,
            time: true,
            guest: true,
            occasion: true,
        });
        if (Object.keys(errors).length > 0) return;
        const success = submitAPI({name,date,time,guest,occasion});
        if (success){
            submitForm({ name, date, time, guest, occasion });
            setName("");
            setGuest(1);
            setTime("");
            setOccasion("");
            setDate("");
            setError({});
            setTouched({});
            navigate('/components/confirmBooking');
        }
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        setError((prev) => ({ ...prev, ...validate({ name, date, time, guest, occasion }) }));
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setTime('');
        dispatch({type: 'UPDATE_TIMES', date: selectedDate + 'T00:00' });
    };

    return(
        <form className='form' onSubmit={handleSubmit}>
            <fieldset>
                <div className='forms'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => handleBlur('name')} />
                    {touched.name && error.name && <div className="error-message" style={{color:'red', fontSize:'0.9em'}}>{error.name}</div>}
                </div>
                <div className='forms'>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={handleDateChange} onBlur={() => handleBlur('date')} />
                    {touched.date && error.date && <div className="error-message" style={{color:'red', fontSize:'0.9em'}}>{error.date}</div>}
                </div>
                <div className='forms'>
                    <label htmlFor="time">Time:</label>
                    <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={() => handleBlur('time')}>
                        <option value="">Select Time</option>
                        {availableTimes.map( time => (
                            <option key={time}>{time}</option>
                        ))}
                    </select>
                    {touched.time && error.time && <div className="error-message" style={{color:'red', fontSize:'0.9em'}}>{error.time}</div>}
                </div>
                <div className='forms'>
                    <label htmlFor="guest">Number of guests:</label>
                    <input className='guestt' type="number" id="guest" name="guest" value={guest} onChange={(e) => setGuest(e.target.value)} onBlur={() => handleBlur('guest')} placeholder="0" min={1} maxLength={10}/>
                    {touched.guest && error.guest && <div className="error-message" style={{color:'red', fontSize:'0.9em'}}>{error.guest}</div>}
                </div>
                <div className='forms'>
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} onBlur={() => handleBlur('occasion')}>
                        <option value="">Select Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    {touched.occasion && error.occasion && <div className="error-message" style={{color:'red', fontSize:'0.9em'}}>{error.occasion}</div>}
                </div>
                <div>
                    <button className='submit-btn' aria-label="On Click" type="submit" value={"Make Your Reservation"}>Submit</button>
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