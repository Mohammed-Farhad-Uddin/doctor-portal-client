import React from 'react';

const Testimonial = ({ testInfo }) => {
    return (
        <div className='col-md-4 sm-12 mb-5'>
            <div style={{boxShadow:'1px 1px 3px gray',padding:'30px'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentident alias facere debitis placeat perferendis inventore deserunt rerum voluptatem?</p>
                <div className='d-flex'>
                    <div className='me-3 align-self-center'>
                        <img style={{ height: '50px' }} src={testInfo.img} alt="image" />
                    </div>
                    <div className='align-self-center'>
                        <h5>{testInfo.name}</h5>
                        <p className='text-secondary'>{testInfo.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;