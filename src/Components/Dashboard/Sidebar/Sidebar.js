import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faBars, faUserMd, faUserFriends, faCalendarCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserSignInContext } from '../../../App';

const Sidebar = () => {
    const [loginUser, setLoginUser] = useContext(UserSignInContext)
    const [isDoctor, setIsDoctor] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/isDoctor`, {
            method: 'POST',
            body: JSON.stringify({ email: loginUser.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => setIsDoctor(result))
    }, [])


    return (
        <div className=' sidebar d-flex flex-column justify-content-between '>

            <ul className="mt-5">
                <li className='list'><Link to='/dashboard/appointment'> <FontAwesomeIcon icon={faBars} /> Dashboard</Link></li>
                <li className='list'><Link to='/dashboard/appointment'> <FontAwesomeIcon icon={faCalendarCheck} /> Appointment</Link></li>
                {/* {
                    isDoctor && */}
                    
                    <div>
                        <li className='list'><Link to='/dashboard/patients'> <FontAwesomeIcon icon={faUserFriends} /> Patients</Link></li>
                        <li className='list'><Link to='/dashboard/prescription'> <FontAwesomeIcon icon={faFileMedical} /> Prescription</Link></li>
                        <li className='list'><Link to='/dashboard/addDoctor'> <FontAwesomeIcon icon={faUserMd} /> Add doctor</Link></li>
                    </div>
                {/* } */}
            </ul>

            <div className='mb-1 ms-3 logOut'>
                <Link to='/'> <p> <FontAwesomeIcon icon={faSignOutAlt} /> Log Out</p></Link>
            </div>
        </div>
    );
};

export default Sidebar;