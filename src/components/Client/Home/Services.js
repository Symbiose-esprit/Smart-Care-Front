import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Website Services</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>In smartcare we provide you with the best doctors in your area.</p>
                            </div>
                            
                            <div className="service-end">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>In smartcare we provide you with the best doctors in your area.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-prescription"></i>
                                <h3>Symptoms selections</h3>
                                <p>You can select your symptom through our list.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-prescription"></i>
                                <h3>Symptoms selections</h3>
                                <p>You can select your symptom through our list.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-patient-file"></i>
                                <h3>Get to know your disease</h3>
                                <p>After selecting your symptoms you will get a prediction of your disease.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-patient-file"></i>
                                <h3>Get to know your disease</h3>
                                <p>After selecting your symptoms you will get a prediction of your disease.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-tooth"></i>
                                <h3>Get information about the disease</h3>
                                <p>Based on the symptoms you selected, you will get the disease and information about it.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-tooth"></i>
                                <h3>Get information about the disease</h3>
                                <p>Based on the symptoms you selected, you will get the disease and information about it.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-heart-beat-alt"></i>
                                <h3>Remote Consultations</h3>
                                <p>You will be able to have video calls as appointments with your doctors.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-heart-beat-alt"></i>
                                <h3>Remote Consultations</h3>
                                <p>You will be able to have video calls as appointments with your doctors.</p>
                                
                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-drug"></i>
                                <h3>Crypto paiment</h3>
                                <p>You will be able to pay with your cryptocurrency.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-drug"></i>
                                <h3>Crypto paiment</h3>
                                <p>You will be able to pay with your cryptocurrency.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-dna-alt-1"></i>
                                <h3>Schedule</h3>
                                <p>Each doctor has his own schedule where patients can pick their appointments based on it. </p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-dna-alt-1"></i>
                                <h3>Schedule</h3>
                                <p>Each doctor has his own schedule where patients can pick their appointments based on it. </p>
                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Constant Followup</h3>
                                <p>We provide you with a good followup system with constant newsletters.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Constant Followup</h3>
                                <p>We provide you with a good followup system with constant newsletters.</p>

                                <Link href="/client/services/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;