import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import PageBanner from '../../../components/Client/Common/PageBanner';
import { clearState, signupDoctor, signupPatient, userSelector } from '../../../components/features/User/UserSlice';

const SignUp = () => {

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



  //form
  const [showDoctor,setshowDoctor]= useState(false);
  
  const [showPatient, setshowPatient] = useState(false);
  
    const DoctorHandler = () => {
        setshowDoctor(true);
        setshowPatient(false);
    }

    const PatientHandler = () => {
      setshowDoctor(false);
      setshowPatient(true);
  }

  // push data on submit
  const onSubmit = (data) => {
    if( showDoctor==true  & showPatient==false ){
       console.log(data);
       dispatch(signupDoctor(data));
    }else{
      console.log(data);
       dispatch(signupPatient(data));
    }
      
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  // after submit
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      router.push("/");
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);


  

  

  return (
    
    <>


      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
        bgImage="page-title-one"
      />

      <div className="signup-area ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-sm-4  ">
                              <div className="doctor-item">
                                  <div className="doctor-top">
                                      <img src="/images/doctors/doctor7.jpg" alt="Doctor" />
                                  </div>
                                  <div className="doctor-bottom">
                                      <h3>
                                          <button onClick={DoctorHandler} className="btn signup-btn">
                                              <a>Doctor</a>
                                          </button>
                                      </h3>
                                      <span></span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-4 ">
                              <div className="doctor-item">
                                  <div className="doctor-top">
                                      <img src="/images/clients/patient4.jpg" alt="Doctor" />
                                  </div>
                                  <div className="doctor-bottom">
                                      <h3>
                                          <button onClick={PatientHandler} className="btn signup-btn">
                                              <a>Patient</a>
                                          </button>
                                      </h3>
                                      <span></span>
                                  </div>
                              </div>
                          </div>


            <div className="col-lg-6 pl-0">
              <div className="signup-left">
                <img src="/images/signup-bg.jpg" alt="SignUp" />
              </div>
            </div>

            

            <div className="col-lg-6 ptb-100">
              <div className="signup-item">
                <div className="signup-head">
                  <h2>Sign Up Here</h2>
                  <p>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></p>
                </div>

                <div className="signup-form">
                  <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='name' className="form-control" placeholder="First Name" {...register("name")} onInput={({ target }) => setUsername(target.value)} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='lastname' className="form-control" placeholder="Last Name"  {...register("lastname")} onInput={({ target }) => setPassword(target.value)} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" name='email' className="form-control" placeholder="Your Email"  {...register("email")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='login' className="form-control" placeholder="Login" {...register("login")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="password" name='password' className="form-control" placeholder="Password"  {...register("password")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='telphone' className="form-control" placeholder="Phone Number" {...register("telephone")} />
                        </div>
                      </div> 
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='address' className="form-control" placeholder="Address" {...register("address")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="date" name='dateofbirth' className="form-control" placeholder="Date of birth" {...register("dateofbirth")} />
                        </div>
                      </div>
                      {/*<div className="col-lg-6">
                        <div className="form-group">
                          <input type="file" name='photo' className="form-control" placeholder="Photo" {...register("photo")} />
                        </div>
                       </div>*/}
                      {/*<div className="col-lg-6">
                        <div className="form-group m">
                        
                          <input type="radio"  name='sex'className="form-check-input" value="male" id="inlineRadio1" {...register("sex")} />
                          <label class="form-check-label" for="inlineRadio1">MALE</label>
                          <input type="radio" name='sex' className="form-check-input" value="female" id ="inlineRadio2" {...register("sex")} />
                          <label class="form-check-label" for="inlineRadio2">FEMALE</label>
                        </div>
                        </div>*/}
                      
                      
                      { showDoctor?
                      <div  className="row">
                    
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select id="inputState" class="form-control" placeholder="specialty"  {...register("specialty")}>
                          <option selected>Choose your Specialty</option>
                          <option>Rheumatologist</option>
                          <option>Cardiologist</option>
                          <option>ENT_specialist</option>
                          <option>Orthopedist</option>
                          <option>Neurologist</option>
                          <option>Allergist_Immunologist</option>
                          <option>Urologist</option>
                          <option>Dermatologist</option>
                          <option>Gastroenterologist</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='office_address' className="form-control" placeholder="Office address"  {...register("office_address")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='office_number' className="form-control" placeholder="Office number"  {...register("office_number")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                        <select id="inputState" class="form-control" placeholder="doctorate"  {...register("doctorate")}>
                          <option selected>Choose your doctorate</option>
                          <option>Bac +5</option>
                          <option>Bac +8</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="number" name='consult_price' className="form-control" placeholder="Consult price"  {...register("consult_price")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='coords' className="form-control" placeholder="Description"  {...register("coords")} />
                        </div>
                      </div>
                      </div> :''}


                      { showPatient?
                      <div  className="row">
                    
                      <div className="col-lg-6">
                        <div className="form-group">
                        <select id="inputState" class="form-control" placeholder="blood_type"  {...register("blood_type")}>
                          <option selected>Choose your Blood type</option>
                          <option>O+</option>
                          <option>O-</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                        <select id="inputState" class="form-control" placeholder="addictions"  {...register("addictions")}>
                          <option selected>Choose your addictions</option>
                          <option>None</option>
                          <option>Alcoholism</option>
                          <option>Drug Addiction</option>
                          <option>Tabacco Addiction</option>
                          <option>Caffeine Addiction</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="number" name='height' className="form-control" placeholder="Height"  {...register("height")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="number" name='weight' className="form-control" placeholder="Weight"  {...register("weight")} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                        <select id="inputState" class="form-control" placeholder="payment_method"  {...register("payment_method")}>
                          <option selected>Choose your Payment Method</option>
                          <option>Mobile payments </option>
                          <option>Credit cards</option>
                          <option>Debit cards</option>
                          <option>Electronic bank transfers</option>
                          <option>Caffeine Addiction</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name='insurance' className="form-control" placeholder="Insurance"  {...register("insurance")} />
                        </div>
                      </div>
                      </div> :''}

                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <input type="password" name='name' className="form-control" placeholder="Confirm Password"  {...register("name")} />
                        </div>
                      </div> */}

                      {/* <div className="col-lg-12">
                        <div className="form-group">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                              Yes, I agree with all <Link href="/terms-condition">Terms & Conditions</Link>
                            </label>
                          </div>
                        </div>
                      </div> */}

                      <div className="col-lg-12">
                        <div className="text-center">
                          <button type="submit" className="btn signup-btn">Sign Up</button>
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

export default SignUp;
