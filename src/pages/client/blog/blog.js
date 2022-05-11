import Link from 'next/link';
import React, { useEffect } from 'react';
import PageBanner from '../../../components/Client/Common/PageBanner';
import Footer from '../../../components/Client/_App/Footer';






const Blog = () => {


    const disease = "Acne"
    const med_article = () => {
        const data = import(`../../../scraping/${disease}.json`).then((response) => {
            console.log(response.content)
        })


    }

    useEffect(() => {
        med_article()
    }, []);


    return (
        <>


            <PageBanner
                pageTitle="Blog"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog"
                bgImage="page-title-four"
            />

            <div className="blog-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog1.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                In this hospital there are special surgeon.
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog2.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                World AIDS Day, designated on 1 December
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog3.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                More than 80 clinical trials launch to test coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog4.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                We always give the best from us
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog5.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                Be aware about the coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog6.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                No one find any medicines to prevent evolovirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog7.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                Thailand is trying to make vaccine of coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog8.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                Already 1932 people have died in China
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/client/blog/blog-details">
                                        <a>
                                            <img src="/images/blog/blog9.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/client/blog/blog-details">
                                            <a>
                                                30+ countries have affected by coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/client/blog/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
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

export default Blog;