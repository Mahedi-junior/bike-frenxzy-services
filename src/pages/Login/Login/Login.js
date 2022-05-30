import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import illastator1 from '../../../image/svg/illastator1.png';
import './Login.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;

    if (loading || sending) {
        return <Loading></Loading>
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(password, email)
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your email address')
        }
    }

    return (
        <div className='login-form container mx-auto mt-5 mb-5 row  '>

            <div className=''>
                <img height={600} className='w-100 rounded' src={illastator1} alt="" />
            </div>

            <div className='w-100 border p-5 rounded'>
                <Form onSubmit={handleSubmit} >
                    <h2 className='text-center text-primary mb-3'>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p className='mt-3 ms-3'>New to Genius Car? <Link to='/register' className='text-primary mt-3' onClick={navigateRegister}>Please Register</Link> </p>

                <p className='mt-3 ms-3 d-block'>Forget Password? <button className='btn btn-link text-danger' onClick={handleResetPassword}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;







