import React , { Fragment, useEffect } from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './features/User/UserSlice';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

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
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
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
                                                    <button type="submit" className="btn signup-btn" onClick={onSubmit}>Login</button>
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