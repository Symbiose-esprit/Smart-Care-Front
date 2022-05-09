import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 9000,
    autoplayHoverPause: true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],
};

const HeroSlider = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            {display ? <OwlCarousel
                className="home-slider owl-carousel owl-theme"
                {...options}
            >
                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img src="/images/home-one/home-slider1.png" alt="Shape" />
                                    </div>

                                    <h1>We Provide You With The Best Doctors In The Area</h1>
                                    <p>In SmartCare we have partnered up with the best doctors  in all regions because we care about our patients.</p>

                                    <div className="common-btn">
                                        <Link href="/client/appointments/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/client/other/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape-two">
                                        <img src="/images/home-one/home-slider2.png" alt="Shape" />
                                    </div>
                                    <h1>We Offer You An Amazing Experience With A Constant Followup</h1>
                                    <p>Because we believe in Customers centricity, we have made a clever followup system detecting your satisfaction.</p>

                                    <div className="common-btn">
                                        <Link href="/client/appointments/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/client/other/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape-three">
                                        <img src="/images/home-one/home-slider3.png" alt="Shape" />
                                    </div>
                                    <h1>We Offer A Smart System For Detecting Diseases</h1>
                                    <p>Without waiting for your appointment you can have an idea about your disease through a smart system developed by our experts.</p>

                                    <div className="common-btn">
                                        <Link href="/client/appointments/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/client/other/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default HeroSlider;