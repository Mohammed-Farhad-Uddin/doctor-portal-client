import React from 'react';
import Footer from './Footer';
import './Footer.css';



const Footers = () => {
    const footerInfo = [
        {
            title: ' ',
            one: 'check up',
            two: 'check up',
            three: 'check up',
            four: 'check up',
            five: '',
            six: '',
            seven: ''
        },
        {
            title: 'Services',
            one: 'check up',
            two: 'check up',
            three: 'check up',
            four: 'check up',
            five: 'check up',
            six: 'check up',
            seven: 'check up',
        },
        {
            title: 'Oral Health',
            one: 'check up',
            two: 'check up',
            three: 'check up',
            four: 'check up',
            five: 'check up',
            six: 'check up',
            seven: 'check up',
        }
    ]
    return (
        <footer>
            <div className='container'>
                <div className='row footer p-5'>
                    {
                        footerInfo.map((finfo, index) => <Footer finfo={finfo} key={index}></Footer>)
                    }
                    <div className='col-md-3 col-sm-6'>
                        <div>
                            <h5 style={{ color: '#1cc7c1' }}>Our Address</h5>
                            <address>Chittagong, Bangladesh-90909</address>

                        </div>
                    </div>
                </div>
                <p className='text-center'>Copyright {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footers;