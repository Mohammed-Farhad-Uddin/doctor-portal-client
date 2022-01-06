import React, { useContext, useRef } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';
import { UserSignInContext } from '../../../App';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, bookingSub, bookingSpace, date }) => {
    const [loginUser, setLoginUser] = useContext(UserSignInContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        data.status = 'Not Visited'
        data.services = bookingSub;
        data.appointmentDate = date;
        data.createAppointmentDate = new Date();
        // data.appointmentDate=date.toDateString();//string a convert kora hocce
        // data.createAppointmentData=new Date().toDateString();

        fetch(`http://localhost:5000/addAppointment`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    //totalSpace k kicuta dynamic korte chawa
                    // if (bookingSpace <= 10 && bookingSpace > 0) {
                    //     bookingSpace=bookingSpace-1;
                    //     console.log(bookingSpace);
                    // } else if (bookingSpace == 0) {
                    //     document.querySelector(".submit-btn").disabled = true;
                    // }
                    // console.log(bookingSpace)
                    alert('Submitted');
                    closeModal();
                }
            })
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center'>{bookingSub}</h2>
                <p className='text-secondary text-center'> On {date}</p>
                <form className='form-bar' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input{...register("name", { required: true })} className='input-bar' placeholder="Enter Your Name" />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    <div className='form-group'>
                        <input{...register("email", { required: true })} defaultValue={loginUser.email} className='input-bar' placeholder="Enter Your Email" />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className='form-group'>
                        <input {...register("phone", { required: true })} className='input-bar' placeholder="Enter Your Phone Number" />
                        {errors.phone && <span className="text-danger">Phone is required</span>}
                    </div>
                    <div className='form-group'>
                        <input {...register("address", { required: true })} className='input-bar' placeholder="Enter Your Permanent Address" />
                        {errors.address && <span className="text-danger">Address is required</span>}
                    </div>
                    <div className="input-group mb-3">
                        <select {...register("gender", { required: true })} className='option-bar' class="custom-select" id="inputGroupSelect01">
                            <option selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Third Gender">Third Gender</option>
                        </select>
                        <input {...register("age", { required: true })} className='option-bar' placeholder="Enter Your Age" />
                        {errors.age && <span className="text-danger">Age is required</span>}
                        <input {...register("weight", { required: true })} className='option-bar' placeholder="Enter Your Weight" />
                        {errors.weight && <span className="text-danger">Weight is required</span>}
                    </div>
                    <button className='btn btn-primary' type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;