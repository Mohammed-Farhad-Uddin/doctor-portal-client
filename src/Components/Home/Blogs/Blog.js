import React from 'react';

const Blog = ({blogdata}) => {
    return (
        <div className='col-md-4 col-sm-12 mb-5'>
           <div  style={{boxShadow:'1px 1px 3px gray',padding:'30px'}}>
           <div  className='d-flex align-self-center'>
                <div className='mx-2'>
                    <img className='img-fluid' src={blogdata.img} alt="" />
                </div>
                <div className='pt-3'>
                        <h5>{blogdata.name}</h5>
                        <p className='text-secondary'>{blogdata.date}</p>
                </div>
            </div>
            <div>
                <h4>{blogdata.title}</h4>
                <p className='text-secondary'>{blogdata.description}</p>
            </div>
           </div>
        </div>
    );
};

export default Blog;