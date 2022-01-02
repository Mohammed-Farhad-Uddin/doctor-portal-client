import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderStyle.css'
import { UserSignInContext } from '../../../App';

const containerStyle={
    backgroundColor:'#F4FDFB',
    height:'100vh'
}

const Dashboard = () => {
    const [loginUser, setLoginUser]=useContext(UserSignInContext)//mod-55.5 vid-2
    const [selectedDate,setSelectedDate]=useState(new Date().toDateString());
    const [appointments,setAppointments]=useState([])
    const handleDateChange=(date)=>{///mod-55 v-1/7
        // console.log(date)
        setSelectedDate(date.toDateString());
//         ai kane useEffect na korai ajker date e click na korle aj ker info gula show hocce na. 
//         fetch(`http://localhost:5000/appointmentByDate`,{//get method e query (?date=${selectedDate} diyeo kora jaito)
//             method: 'POST',
//             body: JSON.stringify({date}),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//         .then(res=>res.json())
//         .then(result=>{
//             setAppointments(result)
//             // console.log(result)
//         });
    }

    useEffect(()=>{
    //mod-55 vid-8 // ai kane useEffect na korai ajker date er info gula page e dukle show hobe
        fetch(`http://localhost:5000/appointmentByDate`,{//get method e query (?date=${selectedDate} diyeo kora jaito)
            method: 'POST',
            body: JSON.stringify({selectedDate, email:loginUser.email}),//mod-55 vid-8
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(res=>res.json())
        .then(result=>{
            setAppointments(result)
            // console.log(result)
        });
    },[selectedDate])

    return (
        <section>
            <div style={containerStyle} className='row container-fluid'>
                <div className='col-md-2 col-sm-6'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-4 col-sm-6'>
                <h2>Appointments</h2>
                <Calendar className='ms-5 my-5 p-5 calenderStyle'
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div style={{backgroundColor:'white'}} className='col-md-6 col-sm-12 my-5 p-5'>
                    <div className='row justify-content-between'>
                    <span className='col-6' style={{color:'#1cc7c1'}}>Appointments</span>
                    <span className='col-6 text-end text-secondary '> {selectedDate} </span>
                    </div>
                   <div className='my-5'>
                   <AppointmentByDate appointments={appointments}></AppointmentByDate>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;