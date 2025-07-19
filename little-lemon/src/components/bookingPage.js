import { useEffect } from 'react';
import BookingForm from './bookingForm';

const BookingPage = ({ availableTimes = [], dispatch = () => {} }) => {
    const submitForm = (formData) => {
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    useEffect(() => {
        console.log('Available times updated:', availableTimes);
    }, [availableTimes]);

    return (
        <section className="booking-page">
            <h2>Book a Table</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </section>
    );
};

export default BookingPage;