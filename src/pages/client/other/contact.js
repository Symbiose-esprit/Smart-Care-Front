import React from 'react';
import PageBanner from '../../../components/Client/Common/PageBanner';
import ContactForm from '../../../components/Client/Contact/ContactForm';
import ContactInfo from '../../../components/Client/Contact/ContactInfo';
import GoogleMap from '../../../components/Client/Contact/GoogleMap';

const Contact = () => {
    return (
        <>


            <PageBanner
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
                bgImage="page-title-one"
            />

            <ContactInfo />

            <ContactForm />

            <GoogleMap />


        </>
    )
}

export default Contact;