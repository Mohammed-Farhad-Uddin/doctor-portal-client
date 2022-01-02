import React, { useContext, useEffect, useState } from 'react';
import { UserSignInContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Patients.css'

const Patients = () => {
    const [loginUser, setLoginUser]=useContext(UserSignInContext)
    const [patients, setPatients] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/patients',{
            method:'POST',
            body: JSON.stringify({email:loginUser.email}),
            headers:{
                'Content-Type':'Application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPatients(data)
            })
    }, [patients])
    return (
        <div className='overflow-hidden'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-10'>
                    <h3>Patients</h3>
                    <h2>Only doctor can access this data</h2>
                    <table className="table my-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Number</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map((info, index) => <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{info.name}</td>
                                    <td>{info.email}</td>
                                    <td>{info.gender}</td>
                                    <td>{info.age}</td>
                                    <td>{info.weight}</td>
                                    <td>{info.phone}</td>
                                    <td>{info.address}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Patients;