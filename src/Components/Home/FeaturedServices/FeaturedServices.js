import React from 'react';
import treatment from '../../../images/treatment.png';



const FeaturedServices = () => {
    return (
        <section className='my-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 col-sm-12'>
                        <img src={treatment} className='img-fluid mb-4 m-md-0' alt="treatment" />
                    </div>
                    <div className='col-md-7 col-sm-12 align-self-center'>
                        <h2>Exception Dental <br/> Care, on Your Terms</h2>
                        <p className='text-secondary'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, tempore? Totam provident, officiis at natus quaerat facilis velit asperiores, sed numquam, tempora sunt sint assumenda consequatur autem impedit ullam recusandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo eaque maiores officia impedit omnis amet atque aut. Ullam nesciunt ipsa laudantium voluptatem iste eligendi quas enim tempora quaerat distinctio.</p>
                        <button className='btn btn-primary mt-auto'> Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;