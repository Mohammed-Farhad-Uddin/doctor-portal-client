import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'


// const InfoCard = ({info}) => {
const InfoCard = (props) => {
    const { title, description, icon, background } = props.info;

    return (
        <div className='col-md-4 mb-2 col-sm-12 info-card text-white'>
            {/* mod-54--vid-4 */}
            <div className={`d-flex info-container info-${background} justify-content-center`}>
                <div className='me-3'>
                    <FontAwesomeIcon className='font-icon' icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;