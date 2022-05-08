import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import PageBanner from '../../../components/Client/Common/PageBanner';
import { clearState, loginUser, userSelector } from '../../../components/features/User/UserSlice';


const SignIn = () => {
    /////////////////////////////
    // next/js router
    const router = useRouter();
    // react hook form props
    const { register, errors, handleSubmit } = useForm();
    // redux actions
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );
    /////////////////////////////
    // presist logged in user
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()
    /////////////////////////////

    /////////////////////////////
    // get user if logged in
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         setUser(foundUser);
    //     }
    // }, []);
    /////////////////////////////

    /////////////////////////////
    // logout function
    // const handleLogout = () => {
    //     setUser({});
    //     setUsername("");
    //     setPassword("");
    //     localStorage.clear();
    //   };
    /////////////////////////////

    /////////////////////////////
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
            // clear redux vars
            dispatch(clearState());
            // get the login data since its a succesful login

            console.log(username + " login presist");
            const data = { username, password };
            // set the state of the user
            setUser(data);
            console.log("User information : " + JSON.stringify(user));
            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(data))
            router.push("/");
        }
    }, [isError, isSuccess]);
    /////////////////////////////

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
                                                    <input type="text" name='name' className="form-control" placeholder="Username" {...register("name")} onInput={({ target }) => setUsername(target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name='email' className="form-control" placeholder="Your Email"  {...register("email")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" name='password' className="form-control" placeholder="Password" {...register("password")} onInput={({ target }) => setPassword(target.value)} />
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