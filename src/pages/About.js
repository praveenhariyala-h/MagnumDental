import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import AosRefresh from '../components/AosRefresh/AosRefresh';

const Priority = lazy(() => import('../sections/Priority/Priority'));
const Safety = lazy(() => import('../sections/Safety/Safety'));
const Team = lazy(() => import('../sections/Team/Team'));
const Faq = lazy(() => import('../sections/Faq/Faq'));
const Footer = lazy(() => import('../sections/Footer/Footer'));

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Suspense fallback={null}>
                <AosRefresh />
                <Priority />
                <Safety />
                <Team />
                <Faq />
                <Footer />
            </Suspense>
        </>
    );
};

export default About;
