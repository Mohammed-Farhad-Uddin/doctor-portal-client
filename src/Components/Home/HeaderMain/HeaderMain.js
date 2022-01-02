import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className='col-md-4 col-sm-12 offset-md-1 offset-sm-1'>
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus quos quaerat perspiciatis culpa animi molestias iste cumque accusamus. Dolorum.</p>
                <Link to='/appointment'><button className='btn btn-primary'>GET APPOINTMENT</button></Link>
            </div>
            <div className='col-md-6 col-sm-12'>
                    <img src={chair} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default HeaderMain;