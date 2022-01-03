import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section style={{ marginTop: '150px' }} className='make-appointment'>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-5 col-sm-12 d-none d-md-block '>
                        <img src={doctor} className='img-fluid' alt="doctor" />
                    </div>
                    <div className='col-md-7 col-sm-12 py-5 mt-5'>
                        <h5 style={{ color: '#1cc7c1' }}>Appointment</h5>
                        <h1 className='text-white'>Make An Appointment <br /> Today </h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iste.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, debitis.</p>
                        <button class="btn btn-primary" type="button" >Learn more</button>               
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;