import React from 'react';
import people1 from '../../../images/people-1.png'
import Blog from './Blog';

const Blogs = () => {
    const blogsData = [
        {
            name: 'Dr. Farhad',
            img: people1,
            title: 'The tooth cancer is taking a challenge',
            date: '26 Dec 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quam! Voluptas perferendis perspiciatis accusamus quaerat.'
        },
        {
            name: 'Dr. Tansha',
            img: people1,
            title: 'The tooth cancer is taking a challenge',
            date: '26 Dec 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quam! Voluptas perferendis perspiciatis accusamus quaerat.'
        },
        {
            name: 'Dr. Eifa',
            img: people1,
            title: 'The tooth cancer is taking a challenge',
            date: '26 Dec 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quam! Voluptas perferendis perspiciatis accusamus quaerat.'
        }
    ]

    return (
        <section>
            <div className='container'>
                <div className='text-center my-5'>
                    <h5 style={{ color: '#1cc7c1' }}>Our Blog</h5>
                    <h1>Form Our Blog News</h1>
                </div>
                <div style={{ padding: '0px 70px' }} className='row my-5'>
                    {
                        blogsData.map((blogdata, index) => <Blog blogdata={blogdata} key={index}></Blog>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Blogs;