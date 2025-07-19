import React from "react";
import { FaCheckCircle } from 'react-icons/fa';



function ConfirmBooking() {
    return (
        <div className="confirm-booking">
            <div className="confirm-logo">
                <FaCheckCircle size={64} />
            </div>
            <h1>
                Booking Confirmed!
            </h1>
            <h3>
                Your reservation has been successfully submitted
            </h3>
        </div>
    );
}


export default ConfirmBooking;