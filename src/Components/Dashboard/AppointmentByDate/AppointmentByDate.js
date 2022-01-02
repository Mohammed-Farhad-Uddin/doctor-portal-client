import React from 'react';

const AppointmentByDate = ({ appointments }) => {
    // console.log(appointments)
    return (
        <>
            {
                appointments.length ?
                    <div>
                        <table className="table my-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((info,index)=><tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{info.name}</td>
                                    <td>{info.email}</td>
                                    <td>7.00 pm</td>
                                    <td><button className='btn btn-secondary'>Not Visited</button></td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div>
                        <h6 style={{ marginTop: '90px' }} classNameName='text-center'>No Appointments for this Date</h6>
                    </div>
            }
        </>
    );
};

export default AppointmentByDate;