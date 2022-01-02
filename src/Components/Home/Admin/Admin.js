import React from 'react';
import { useForm } from "react-hook-form";
import NavbarTop from '../Navbar/NavbarTop';


const Admin = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     fetch('http://localhost:5000/admin',{
    //         method:'POST',
    //         body: JSON.stringify(data),
    //         headers:{
    //             'Content-Type':'Application/json',
    //         }
    //     })
    // };


    return (
        <div className='contiainer'>
            <NavbarTop></NavbarTop>
            
             <div className='text-center'>
             <h1>ONLY ADMIN CAN ACCESS THIS PAGE</h1>
              {/*  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='form-group'>
                        <input {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='form-group'>
                        <input {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    <input type="submit" />
                </form> */}
            </div> 
        </div>
    );
};

export default Admin;