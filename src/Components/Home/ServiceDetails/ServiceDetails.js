import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 sm-12 text-center'>
            <img style={{height:'50px'}} src={service.img} alt="image" />
            <h5 className='my-3'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nemo.</p>
        </div>
    );
};

export default ServiceDetails;