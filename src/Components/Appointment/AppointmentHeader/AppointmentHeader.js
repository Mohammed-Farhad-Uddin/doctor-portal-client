import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const AppointmentHeader = ({handleDateChange}) => {
    // const [value, handleDateChange] = useState(new Date());//mod-55 v-1


    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>
            <div className='col-md-4 col-sm-12 offset-md-1 offset-sm-1 my-5'>
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />

            </div>
            <div className='col-md-6 col-sm-12 my-5'>
                <img src={chair} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default AppointmentHeader;