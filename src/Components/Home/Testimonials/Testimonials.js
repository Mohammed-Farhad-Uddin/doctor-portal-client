import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png'
import Testimonial from '../Testimonial';

const Testimonials = () => {
    const testimonialData=[
                {
                    name:' Mohammed Farhad',
                    img: people1,
                    from:'Chittagong'

                },
                {
                    name:'Tansha',
                    img: people2,
                    from:'Chittagong'

                },
                {
                    name:'Nur Begum',
                    img: people3,
                    from:'Chittagong'

                }

    ];



    return (
        <section className='mt-5 p-5'>
            <div className='container'>
                <div className='row px-5 mx-3'>
                    <div className='col-md-6 '>
                        <h5 style={{color:'#1cc7c1'}}>Testimonial</h5>
                        <h1>What's Our Patients <br/> Says</h1>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
                <div style={{padding:'0px 70px'}} className='row my-5'>
                    {
                        testimonialData.map((testInfo,index)=><Testimonial testInfo={testInfo} key={index}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;