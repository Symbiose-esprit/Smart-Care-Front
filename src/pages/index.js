import React from 'react';
import LatestBlogPost from '../components/Client/Common/LatestBlogPost';
import NewsletterForm from '../components/Client/Common/NewsletterForm';
import OurDoctors from '../components/Client/Common/OurDoctors';
import VideoIntro from '../components/Client/Common/VideoIntro';
import AboutSection from '../components/Client/Home/AboutSection';
import HeroSlider from '../components/Client/Home/HeroSlider';
import OurExpertise from '../components/Client/Home/OurExpertise';
import Services from '../components/Client/Home/Services';
import Stats from '../components/Client/Home/Stats';


const Index = () => {
    return (
        <>
            <HeroSlider />

            <Stats />

            <AboutSection />

            <Services />

            <OurExpertise />

            <VideoIntro />

            <OurDoctors />

            <LatestBlogPost />

            <NewsletterForm />

        </>
    )
}

export default Index;