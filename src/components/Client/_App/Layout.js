import Head from "next/head";
import React from 'react';
import GoTop from './GoTop';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Smart-Care</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Smart-Care" />
                <meta name="og:title" property="og:title" content="Smart-Care"></meta>
                <meta name="twitter:card" content="Smart-Care"></meta>
                <link rel="canonical" href="https://disin-react.envytheme.com/"></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;