import React from 'react';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import OurDoctors from '../components/Common/OurDoctors';
import VideoIntro from '../components/Common/VideoIntro';
import AboutSection from '../components/Home/AboutSection';
import HeroSlider from '../components/Home/HeroSlider';
import OurExpertise from '../components/Home/OurExpertise';
import Services from '../components/Home/Services';
import Stats from '../components/Home/Stats';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';

const Index = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <HeroSlider />

            <Stats />

            <AboutSection />

            <Services />

            <OurExpertise />

            <VideoIntro />

            <OurDoctors />

            <LatestBlogPost />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Index;