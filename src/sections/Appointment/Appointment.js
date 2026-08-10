import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';
import mapScanner from '../../assets/map-scanner.png';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps?q=Magnum+Dental+Opus/@17.720091,83.203401&z=16&output=embed'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="map-scanner">
                                <img src={mapScanner} alt="Scan for directions to Magnum Dental Opus" />
                            </div>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Magnum Dental Opus, first floor, Sri Sai villa complex, right side of ayyappa swamy temple, towards STBL cinema theatre facing, NH-16, Sheela Nagar, Visakhapatnam, Gopalapatnam (rural), Andhra Pradesh 530012</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Magnum Dental Opus is a pleasure"
                            description="Book your visit online and our team will confirm your preferred time. We’re here for checkups, treatments, and smile makeovers."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;