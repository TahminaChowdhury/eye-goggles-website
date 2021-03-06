import React from 'react';
import './Login.css'
import { Button } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import img from '../../../images/160321_image-guide_LOOKBOOK_image_39.jpg'


const Login = () => {
    const {user, loginWithGoogle, loginWithFacebook ,loginWithEmailAndPassword,error} = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, history)
    };
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        loginWithEmailAndPassword(data.email, data.password, location, history)
        console.log(data)
    };
    return (
        <div className="loginForm">
           <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="container text-center mt-5 pt-5">
                        <h2 className="mb-3">Login</h2>
                        <span>Don't have an acoount ?</span><Link to="/signup" className="text-primary ps-2">Sign-up here!</Link> 
                        <div className="mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" {...register("email")} placeholder="Email"className="input-field"/>

                        <input type="password" placeholder="Password"{...register("password")} className="input-field"/>
                        <h5 className="text-danger my-3">{error}</h5>
                        
                        <input type="submit" value="Login" className="submit-input rounded-pill fs-5 fw-bold"/>

                        </form>
                        </div>
                    </div>
                    <div className="text-center my-5">
                        <h6>Or Login Using</h6>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <div className="me-2">
                        <button onClick={handleLoginWithGoogle} className="social-btn"><i class="fab fa-google"></i></button>
                        </div>
                        <div className="ms-2">
                        <button onClick={loginWithFacebook} className="social-btn"><i class="fab fa-facebook-f"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 login-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
           </div>
        </div>
    );
};

export default Login;