import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
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
                            <p>In SmartCare you will be matched with one of the best doctors in your area based on your symptoms while ensuring a compatibility between doctor's speciality and your disease. </p>
                            
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

                            <Link href="/client/other/about">
                                <a>Know More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;