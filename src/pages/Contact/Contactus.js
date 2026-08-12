import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                    description="Reach Magnum Dental Opus in Sheela Nagar, Visakhapatnam. Call or WhatsApp 9100291726, or email magnumdentalopus@gmail.com."
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="800">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;