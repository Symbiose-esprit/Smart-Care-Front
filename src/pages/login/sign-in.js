import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import PageBanner from '../../components/Common/PageBanner';
import { clearState, loginUser, userSelector } from '../features/User/UserSlice';


const SignIn = () => {

    // next/js router
    const router = useRouter();
    // react hook form props
    const { register, errors, handleSubmit } = useForm();
    // redux actions
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );

    // push data on sumbit
    const onSubmit = (data) => {
        console.log(data);
        dispatch(loginUser(data));
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);


    //after submit
    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {
            dispatch(clearState());
            router.push("/");
        }
    }, [isError, isSuccess]);

    return (
        <>
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
                                                    <input type="text" name='name' className="form-control" placeholder="First Name" {...register("name")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name='email' className="form-control" placeholder="Your Email"  {...register("email")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" name='password' className="form-control" placeholder="Password" {...register("password")} />
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
        </>
    )
}

export default SignIn;