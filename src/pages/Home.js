import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';
import AosRefresh from '../components/AosRefresh/AosRefresh';

const Emergency = lazy(() => import('../sections/Emergency/Emergency'));
const Features = lazy(() => import('../sections/Features/Features'));
const Expert = lazy(() => import('../sections/Expert/Expert'));
const Testimonial = lazy(() => import('../sections/Testimonial/Testimonial'));
const Blogs = lazy(() => import('../sections/Blogs/Blogs'));
const Appointment = lazy(() => import('../sections/Appointment/Appointment'));
const Footer = lazy(() => import('../sections/Footer/Footer'));

const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Suspense fallback={null}>
                <AosRefresh />
                <Emergency/>
                <Features />
                <Expert/>
                <Testimonial/>
                <Blogs/>
                <Appointment/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default Home;
