import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';


const BusinessInfo = () => {

    const infosData=[
        {
            title:'Opening Hours',
            description:'We are open 7 days 24 hours',
            icon:faClock,
            background:'primary'
        },
        {
            title:'Visit Our Location',
            description:'Chittagong, Bangladesh-404040',
            icon:faMapMarked,
            background:'dark'
        },
        {
            title:'Contact now',
            description:'0101010101010',
            icon:faPhone,
            background:'primary'
        }
    ];



    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
            {
                infosData.map((info,index)=><InfoCard info={info} key={index}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;