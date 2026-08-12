import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBanner.scss';
import serviceBanner from '../../assets/servicePage/1.webp';

const ServiceBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="800">
                                    <h2>Root Canal Treatment</h2>
                                    <p>Root canal treatment doesn’t have to be scary. At Magnum Dental Opus, we relieve pain, save your natural tooth, and help you feel better — comfortably and confidently.</p>
                                    <div className="theme-btn">
                                        <Link to="/contact">Book an appointment</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="800">
                                    <img src={serviceBanner} alt="service" width="720" height="520" fetchPriority="high" decoding="async" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;