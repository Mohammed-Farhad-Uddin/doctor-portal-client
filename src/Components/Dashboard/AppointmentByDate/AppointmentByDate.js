import React, { useContext } from 'react';
import { UserSignInContext } from '../../../App';

const AppointmentByDate = ({ appointments }) => {
    const [loginUser,setLoginUser]=useContext(UserSignInContext)
    // console.log(appointments)
    const handleStatusChange=(id)=>{
        const change='Visited';
        document.getElementById("demoBtn").innerHTML = change;
        // console.log(id);
        fetch(`http://localhost:5000/changeStatus/${id}`,{
            method:"PATCH",
            body: JSON.stringify({change, email:loginUser.email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                }
        })
        .then(res=>res.json())
        .then(statusInfo=> {
            if(statusInfo){
                alert('Status changed')
            }
            else(
               alert('You can not change status')
            )
        })
    }


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
                                    <td><button onClick={()=>handleStatusChange(`${info._id}`)} id='demoBtn' className='btn btn-secondary'>{info.status}</button></td>
                                    {/* `${info._id}` ai rkm na dile oi backend e _id:Object(45874hehf74) ei rkm undefine asbe tai bracket bitore ("35436hdd8") cotation pawar jnno oi ta korte hoi  */}
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