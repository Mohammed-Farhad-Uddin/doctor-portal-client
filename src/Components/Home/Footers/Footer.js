import React from 'react';

const Footer = ({finfo}) => {
    return (
        <div className='col-md-3 col-sm-6'>
            <div>
                <h5 style={{color:'#1cc7c1'}}>{finfo.title}</h5>
                <p>{finfo.one}</p>
                <p>{finfo.two}</p>
                <p>{finfo.three}</p>
                <p>{finfo.four}</p>
                <p>{finfo.five}</p>
                <p>{finfo.six}</p>
                <p>{finfo.seven}</p>
            </div>
        </div>
    );
};

export default Footer;