import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctordata }) => {
    return (
        <div className='col-md-4 col-sm-12 my-4'>
            <div className='text-center'>
                {/* {//mod-55.5 vid-4
                    doctordata.imageInfo ? //how to diplay image from server.here it is...
                    <img  src={`data:image/png;base64,${doctordata.imageInfo.img}`} style={{height:'300px',width:'250px'}} /> :
                    //how to display from local host.here it is..
                    <img className='img-fluid' style={{height:'300px',width:'250px'}} src={`http://localhost:5000/${doctordata.img}`} alt="doctor" />
                } */}
                {
                    doctordata.imageInfo && <img src={`data:image/jpeg;base64,${doctordata.imageInfo.img}`} style={{ height: '300px', width: '250px' }} />
                }

                <h6 className='mt-3 mb-2'>{doctordata.name}</h6>
                <div className='d-flex justify-content-center'>
                    <div>
                        <FontAwesomeIcon style={{ height: '20px' }} className='font-icon' icon={faPhone} />
                    </div>
                    <div>
                        <p>+909090909090</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;