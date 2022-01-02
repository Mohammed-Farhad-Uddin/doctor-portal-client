import React from 'react';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
    const servicesData = [
        {
            name: 'Flouride Treatment',
            img: flouride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <section>
            <div style={{marginTop:'200px'}} className='text-center'>
                <h5 style={{ color: '#1cc7c1' }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 m-5 pt-5 mt-sm-5'>
                    {
                        servicesData.map((service, index) => <ServiceDetails service={service} key={index}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;