import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/_App/Footer';
import Navbar from '../../components/_App/Navbar';
import TopHeader from '../../components/_App/TopHeader';
import PageBanner from '../../components/Common/PageBanner';
import { clearState, loginUser, userSelector } from '../features/User/UserSlice';

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, errors, handleSubmit } = useForm();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );

    const onSubmit = (data) => {
        console.log(data);
        dispatch(loginUser(data));
    };
    // const onSubmit = (name, password, email) => {
    //     dispatch(loginUser(name, password, email));
    // };
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {

            dispatch(clearState());
            history.push('/');
        }
    }, [isError, isSuccess]);

    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Sign In"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Sign In"
                bgImage="page-title-one"
            />

            <div className="signup-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 pl-0">
                            <div className="login-left">
                                <img src="/images/login-bg.jpg" alt="Login" />
                            </div>
                        </div>

                        <div className="col-lg-6 ptb-100">
                            <div className="signup-item">
                                <div className="signup-head">
                                    <h2>Login Here</h2>
                                    <p>Didn't you account yet? <Link href="/sign-up"><a>Sign Up Here</a></Link></p>
                                </div>
                                <div className="signup-form">
                                    <form className="space-y-6"
                                        onSubmit={handleSubmit(onSubmit)}
                                        method="POST">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name='name' className="form-control" placeholder="First Name" {...register("name")} onInput={e => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name='email' className="form-control" placeholder="Your Email"  {...register("email")} onInput={e => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" name='password' className="form-control" placeholder="Password" {...register("password")} onInput={e => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                                </div>
                                            </div> */}

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="forgot-pass">
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <button type="submit" className="btn signup-btn" >Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignIn;