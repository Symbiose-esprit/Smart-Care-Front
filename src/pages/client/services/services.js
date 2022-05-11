import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PageBanner from '../../../components/Client/Common/PageBanner';


const Services = () => {

    // ///////////////////////////////////
    // // user's position vars
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    // const [pos, setPos] = useState([latitude, longitude])

    // ///////////////////////////////////
    // // map import 
    // const Map = React.useMemo(() => dynamic(
    //     () => import('./map'), // replace '@components/map' with your component's location
    //     {
    //         loading: () => <p>A map is loading</p>,
    //         ssr: false // This line is important. It's what prevents server-side render
    //     }
    // ),
    //     /* list variables which should trigger a re-render here */
    //     [pos])
    // ///////////////////////////////////

    ///////////////////////////////////
    // get current position
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         // console.log("Latitude is :", position.coords.latitude);
    //         // console.log("Longitude is :", position.coords.longitude);
    //         setLatitude(latitude = position.coords.latitude);
    //         //  console.log(latitude)
    //         setLongitude(longitude = position.coords.longitude);
    //         // console.log(longitude)
    //         pos = [position.coords.latitude, position.coords.longitude];
    //         setPos(pos = pos)
    //         console.log("This is pos inside useEffect : " + pos)
    //     });
    // }, []);
    ///////////////////////////////////

    return (
        <>
            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
                bgImage="page-title-one"
            />

            <>
                {/* Load the map component from the map.jsx file here and pass the pos variable in the props */}
                {/* <Map pos={pos} /> */}
            </>

            <div className="services-area pt-100 pb-70">
                <div className="container">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
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

                                    <Link href="/service-details">
                                        <a>Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-doctor-alt"></i>
                                                <h3>Certified Doctors</h3>
                                                <p>We have the best doctors in the area.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-stretcher"></i>
                                                <h3>Diseases education</h3>
                                                <p>You will get to know more about certain Diseases.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-network"></i>
                                                <h3>Video calls</h3>
                                                <p>In SmartCare you will be able to have virtual appointments with your doctor.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-ambulance-cross"></i>
                                                <h3>Crypto paiment and security</h3>
                                                <p>You can pay through cryptocurrency and your whole date will be secured through blockchain.</p>
                                            </div>
                                        </a>
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


        </>
    )
}

export default Services;