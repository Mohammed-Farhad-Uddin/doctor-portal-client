import React, { useState } from 'react';
import Footers from '../../Home/Footers/Footers';
import NavbarTop from '../../Home/Navbar/NavbarTop';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date().toDateString());
    const handleDateChange=(date)=>{///mod-55 v-1
        console.log(date)
        setSelectedDate(date.toDateString())
    }

    
    return (
        <div className="overflow-hidden">
            <NavbarTop></NavbarTop>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footers></Footers>
        </div>
    );
};

export default Appointment;