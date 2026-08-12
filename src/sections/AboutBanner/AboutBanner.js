import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.webp'
import bannerTwo from '../../assets/about/banner/banner_2.webp'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="800">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <p>At Magnum Dental Opus in Sheela Nagar, Visakhapatnam, we want you to feel confident about your oral health — every time you smile, eat, speak, or laugh.</p>

                                    <div className="theme-btn">
                                        <Link to='/contact'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner" loading="eager" decoding="async" />
                                    <img src={bannerTwo} alt="about banner two" loading="lazy" decoding="async" />
                                    <img className='pattern' src={pattern} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;