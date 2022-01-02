import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import './Login.css';
import loginImg from '../../images/login.png'
import { UserSignInContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserSignInContext)
    const app = initializeApp(firebaseConfig);
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   


    const handleChange=(e)=>{
        console.log(e.target.value)
          const newUser={...loginUser}
          newUser[e.target.name]=e.target.value;
          setLoginUser(newUser)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        // console.log(data);
        // setLoginUser({
        //     isSignIn: true,
        //     email: data.email,
        //     password: data.password,
        //     errorMsg: ''
        // })
        if (loginUser.email && loginUser.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                    storeAuthToken();
                    history.replace(from)
                })
                .catch((error) => {
                    if (error) {
                        const auth = getAuth();
                        signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                storeAuthToken()
                                history.replace(from)
                                // console.log(user, "i am in")
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorMessage)
                            });
                    }
                });
        }
    };
    // console.log(loginUser)

    const resetPassword = (email) => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    const storeAuthToken=()=>{
        const auth = getAuth();
        auth.currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // Send token to your backend viat HTTPS
            sessionStorage.setItem('token',idToken) //jotokkn logIn takbe session e token ta save takbe tai setItem e set kora hoice
            console.log(idToken)
        }).catch(function(error) {
            // Handle error
        });
    }



    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6 col-sm-12 my-5'>
                    <form className='form-bar' onSubmit={handleSignIn} >
                        <h2 className='text-center text-secondary mb-5'> Login </h2>
                        <div className='form-group'>
                            <input type="email" onChange={handleChange} name='email'  className='input-bar' placeholder="Enter Your Email" />
                            {/* {errors.email && <span className="text-danger">Email is required</span>} */}
                        </div>
                        <div className='form-group'>
                            <input type="password" onChange={handleChange} name='password'  className='input-bar' placeholder="Enter Your Password" />
                            {/* {errors.password && <span className="text-danger">Password is required</span>} */}
                        </div>
                        <div className='text-danger'>
                            <p onClick={() => resetPassword(loginUser.email)}>Forget Your Password?</p>
                        </div>
                        <button className=' btn btn-primary input-bar text-center' type='submit'>Sign In </button>
                    </form>
                </div>
                <div className='col-md-6 col-sm-12 my-5  d-md-block d-none'>
                    <img src={loginImg} className='img-fluid' style={{ height: '520px' }} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;