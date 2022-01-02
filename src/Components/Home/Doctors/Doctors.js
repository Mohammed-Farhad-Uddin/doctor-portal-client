import React, { useState, useEffect, useContext } from 'react';
import doctor from '../../../images/doctor-small.png'
import Doctor from './Doctor';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { UserSignInContext } from '../../../App';

const Doctors = () => {
    const [loginUser, setLoginUser] = useContext(UserSignInContext)
    // const doctorsData = [
    //     {
    //         name: 'dr eang',
    //         phone: '338038204823',
    //         img: doctor,
    //         icon:faPhone
    //     },
    //     {
    //         name: 'dr eang',
    //         phone: '338038204823',
    //         img: doctor,
    //         icon:faPhone
    //     },
    //     {
    //         name: 'dr eang',
    //         phone: '338038204823',
    //         img: doctor,
    //         icon:faPhone
    //     }
    // ]
    const [doctorsData, setDoctorsData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allDoctors`, {
            headers: {
                'Content-Type': 'Application/json',
                // authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, "doctors");
                setDoctorsData(data)
            })
    }, [doctorsData])//jkn doctorData chnage hobe abr useEffect call hobe.jkn addAdoctor a data insert hobe

    return (
        <section>
            <div className='container'>
                <div className='text-center my-4'>
                    <div style={{ marginBottom: '120px' }}>
                        <h5 style={{ color: '#1cc7c1' }}>Our Doctors</h5>
                    </div>
                   
                            <div className='row'>
                                {
                                    doctorsData.map((doctordata, index) => <Doctor doctordata={doctordata} key={index}></Doctor>)
                                }
                            </div>  
                </div>
            </div>

        </section>
    );
};

export default Doctors;