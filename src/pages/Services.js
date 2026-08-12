import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import AosRefresh from '../components/AosRefresh/AosRefresh';

const Symptoms = lazy(() => import('../sections/Symptoms/Symptoms'));
const Gallery = lazy(() => import('../sections/Gallery/Gallery'));
const Appointment = lazy(() => import('../sections/Appointment/Appointment'));
const Footer = lazy(() => import('../sections/Footer/Footer'));

const Services = () => {
    return (
        <>
            <Navbar />
            <ServiceBanner />
            <Suspense fallback={null}>
                <AosRefresh />
                <Symptoms />
                <Gallery />
                <Appointment />
                <Footer />
            </Suspense>
        </>
    );
};

export default Services;
