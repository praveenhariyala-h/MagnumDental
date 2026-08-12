import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/about'
        },
        {
            'name' : 'Dental Services',
            'link' : '/singleservice'
        },
        {
            'name' : 'Blogs',
            'link' : '/blogs'
        },
        {
            'name' : 'Contact Us',
            'link' : '/contact'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': (
                <>
                    <a href="https://wa.me/919100291726" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="contact-icon whatsapp" />
                        9100291726
                    </a>
                    <a href="tel:9100291726">
                        <FaPhoneAlt className="contact-icon call" />
                        9100291726
                    </a>
                </>
            ),
            'icon': call
        },
        {
            'title': 'Open Hours',
            'info': '09:00 AM - 06:00 PM',
            'icon': time
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" loading="lazy" decoding="async" />
                        </div>
                        <p>Magnum Dental Opus is a trusted dental clinic in Sheela Nagar, Visakhapatnam, offering cosmetic, preventive, and restorative care for the whole family.</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li key={singleMenu.name}><Link to={singleMenu.link}>{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Magnum Dental Opus. All Rights Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;
