import React from 'react';
import Link from 'next/link';

const OurExpertise = () => {
    return (
        <div className="expertise-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Expertise</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-doctor-alt"></i>
                                        <h3> 
                                            <Link href="/client/doctor/doctor-details">
                                                <a>Certified Doctors</a>
                                            </Link>
                                        </h3>
                                        <p>We have the best doctors in the area.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-stretcher"></i>
                                        <h3> 
                                            <Link href="/client/doctor/doctor-details">
                                                <a>Diseases education</a>
                                            </Link>
                                        </h3>
                                        <p>You will get to know more about certain Diseases.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-network"></i>
                                        <h3> 
                                            <Link href="/client/doctor/doctor-details">
                                                <a>Video calls</a>
                                            </Link>
                                        </h3>
                                        <p>In SmartCare you will be able to have virtual appointments with your doctor.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-ambulance-cross"></i>
                                        <h3> 
                                            <Link href="/client/doctor/doctor-details">
                                                <a>Crypto paiment and security</a>
                                            </Link>
                                        </h3>
                                        <p>You can pay through cryptocurrency and your whole date will be secured through blockchain.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="expertise-right">
                                <img src="/images/about4.jpg" alt="Expertise" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertise;