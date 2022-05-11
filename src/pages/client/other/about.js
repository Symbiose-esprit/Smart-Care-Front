import React from 'react';
import LatestBlogPost from '../../../components/Client/Common/LatestBlogPost';
import PageBanner from '../../../components/Client/Common/PageBanner';
import TestimonialSlider from '../../../components/Client/Common/TestimonialSlider';
import OurExpertise from '../../../components/Client/Home/OurExpertise';
import Services from '../../../components/Client/Home/Services';

const About = () => {
    return (
        <>
            
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-left">
                                    <img src="/images/about1.jpg" alt="About" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-item about-right">
                                <img src="/images/about-shape1.png" alt="About" />
                                <h2>About Our Website</h2>
                                <p>In SmartCare you will be matched with one of the best doctors in your area based on your symptoms while ensuring a compatibility between doctor's speciality and your disease.</p>
                                <ul>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Browse Our Website
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Choose Appointment
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Fill the needed information
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-area counter-bg counter-area-four">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-patient-bed"></i>
                                <h3 className="counter">129</h3>
                                <p>Country users</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-people"></i>
                                <h3><span className="counter">25000</span>+</h3>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-doctor-alt"></i>
                                <h3 className="counter">7500</h3>
                                <p>Doctors</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-badge"></i>
                                <h3 className="counter">5</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurExpertise /> 

            <Services /> 

            <TestimonialSlider /> 

            <LatestBlogPost />
        </>
    )
}

export default About;