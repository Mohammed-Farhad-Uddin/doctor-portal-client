import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking,date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className='col-md-4 col-sm-6 mb-5'>
            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title text-brand'> {booking.subject} </h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Space Available</p>
                    <button onClick={openModal} className='btn btn-brand text-uppercase submit-btn'>Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} bookingSpace={booking.totalSpace} bookingSub={booking.subject} date={date} ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;