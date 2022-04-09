import React from 'react';
import OurDoctors from '../../../components/Client/Common/OurDoctors';
import PageBanner from '../../../components/Client/Common/PageBanner';
import TestimonialSlider from '../../../components/Client/Common/TestimonialSlider';
import OurExpertise from '../../../components/Client/Home/OurExpertise';

const Testimonials = () => {
    return (
        <>


            <PageBanner
                pageTitle="Testimonials"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Testimonials"
                bgImage="page-title-one"
            />

            <div className="pt-100">
                <OurExpertise />
            </div>

            <TestimonialSlider />

            <OurDoctors />


        </>
    )
}

export default Testimonials;