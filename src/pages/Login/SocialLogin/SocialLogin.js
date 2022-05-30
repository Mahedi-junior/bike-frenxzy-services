import React from 'react';
import googleLogo from '../../../image/Social/google3.png'
import facebook from '../../../image/Social/facebook (2).png'
import github from '../../../image/Social/github.png'
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || githubError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message || githubError?.message}</p>
        </div>
    }

    if (loading || githubLoading) {
        return <Loading></Loading>
    }

    if (user || githubUser) {
        navigate('/home')
    }


    return (
        <div>
            <div className='container  d-flex align-items-center'>
                <div style={{ height: '3px' }} className='w-50 mx-auto bg-primary'></div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '3px' }} className='w-50 mx-auto bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-75 d-block mx-auto my-2'><img className='mx-2 ' height={'35px'} src={googleLogo} alt="" /> Google SignIn</button>
                <button className='btn btn-primary w-75 d-block mx-auto my-2'><img className='mx-2 ' height={'35px'} src={facebook} alt="" /> Facebook SignIn</button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-75 d-block mx-auto'><img className='mx-2 ' height={'35px'} src={github} alt="" /> Github SignIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;