import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ date }) => {
    const bookingData = [
        {
            _id: '61c9b2e6f663b3a50c765962',
            id: '1',
            subject: 'Teeth Orthodontics',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        },
        {
            _id: '61c9b2e6f663b3a50c765952',
            id: '2',
            subject: 'Dentist',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        },
        {
            _id: '61c9b2e6f663b3a50c765942',
            id: '3',
            subject: 'Mouth Wash',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        },
        {
            _id: '61c9b2e6f663b3a50c765932',
            id: '4',
            subject: 'Teeth Wash',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        },
        {
            _id: '61c9b2e6f663b3a50c765922',
            id: '5',
            subject: 'Dentist three',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        },
        {
            _id: '61c9b2e6f663b3a50c765912',
            id: '6',
            subject: 'Mmsmsmsmsmsm',
            visitingHour: '8.00 am - 9.00 am',
            totalSpace: '10'
        }
    ]
    return (
        <div>
            <h1 className='text-center text-brand mb-5'>Available Appointment on {date}</h1>
            <div className='row'>
                {
                    bookingData.map((booking, index) => <BookingCard booking={booking} date={date} key={index}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookAppointment;