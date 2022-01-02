import React, { useState , useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { UserSignInContext } from '../../../App';


const AddDoctor = () => {
    const history=useHistory()
    const [loginUser, setLoginUser]=useContext(UserSignInContext)
    const [doctorInfo, setDoctorInfo] = useState({});
    const [file, setFile] = useState('')

    const handleBlur = (e) => {//mod-55.5 vid-1
        const newInfo = { ...doctorInfo };
        newInfo[e.target.name] = e.target.value;
        setDoctorInfo(newInfo);
    }
    console.log(doctorInfo);


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];//mod-55.5 vid-0 //ei kane file ek ta nibo tai [0] bosanu hoice
        setFile(newFile);
    }
    console.log(file)
    const handleSubmit = (e) => {//mod-55.5 vid-0 
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', doctorInfo.name)
        formData.append('email', doctorInfo.email)
        formData.append('loginEmail', loginUser.email)
       

        fetch('http://localhost:5000/addAdoctor', {
            method: 'POST',
            body: formData //stringify kora hocce na krn file bytes hisabe send hobe
            //header add korle json format e patanu jabe na syntext error asbe
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    alert('Doctor Added');
                    history.replace('/')
                }
                else{
                    alert('You are not Authorize to Add Doctor');
                }

            })
            .catch(error => {
                console.error(error)
            })
e.preventDefault();
    }

    return (
        <div style={{height:'100vh'}} className='row container-fluid'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 p-4 pe-5' style={{ position: 'relative' }}>
                <h5 className='text-brand'>Add a doctor</h5>
                <h3>Only Admin/Doctor access this part</h3>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" name="name" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Upload your image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;