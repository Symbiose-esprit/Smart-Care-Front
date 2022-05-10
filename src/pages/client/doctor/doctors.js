import Link from 'next/link';
import React from 'react';
import { doctorRows } from "../../../dummyData";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import PageBanner from '../../../components/Client/Common/PageBanner';
import { DiseaseSelector, predictDisease } from '../../../components/features/User/DiseaseSlice';
import { ListDoctors } from "../../../components/features/User/AdminSlice";
const Doctors = () => {

    // redux actions
    const [data, setData] = useState(doctorRows);

  const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const dispatch = useDispatch();

    useEffect(() => {
        const doctors = dispatch(ListDoctors());
        console.log("doctors",doctors);
        
  });

  
  const onSubmit = (data) => {
      console.log("doctors",doctors);
   
};
    /*const { } = useSelector(
        DiseaseSelector
    );


    


    // push data on submit
    const onSubmit = (data) => {
        data = {
            "symptoms": "acidity"
        }
        console.log(data);
        dispatch(predictDisease(data));
    };*/
    return (
        <>


            <PageBanner
                pageTitle="Meet Our Qualified Doctors"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Doctors"
                bgImage="page-title-five"
            />

            <div className="doctor-search-area">
                <div className="container">
                    <form>
                        <div className="row doctor-search-wrap">
                            <div className="col-sm-6 col-lg-6">
                                <div className="doctor-search-item">
                                    <div className="form-group">
                                        <i className="icofont-doctor-alt"></i>
                                        <label>Search</label>
                                        <input type="text" className="form-control" placeholder="Doctor Name" />
                                    </div>
                                    <button type="submit" onSubmit={onSubmit()} className="btn doctor-search-btn">
                                        <i className="icofont-search-1"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="doctor-search-item">
                                    <div className="form-group">
                                        <i className="icofont-hospital"></i>
                                        <label>Category</label>
                                        <select className="form-control">
                                            <option>Neurosurgeon</option>
                                            <option>Cardiology</option>
                                            <option>Pathology</option>
                                            <option>Dental Care</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="doctors-area doctors-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                    {/*{data.map(doctors =>
                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor1.jpg" alt="Doctor" />

                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. {dortor.lastname}</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>
                    )}  */  }                       
                    </div>
                </div>
            </div>


        </>
    )
}

export default Doctors;