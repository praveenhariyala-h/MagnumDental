import React, { useState } from 'react';
import './ContactForm.scss';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import icon from '../../assets/banner/icons/Calling.png';

const CLINIC_EMAIL = 'magnumdentalopus@gmail.com';
const CLINIC_WHATSAPP = '919100291726';
const CLINIC_PHONE = '9100291726';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Orthodontic Braces',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', text: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const buildWhatsAppMessage = () => {
        return (
            `*New Appointment Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Service:* ${formData.service}\n` +
            `*Message:* ${formData.message || 'N/A'}`
        );
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', text: '' });
        setSubmitting(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${CLINIC_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    _subject: 'New Appointment Booking - Magnum Dental Opus',
                    _template: 'table',
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send appointment email');
            }

            openWhatsApp();
            setStatus({
                type: 'success',
                text: 'Appointment sent! WhatsApp opened — tap Send to share the details.',
            });
            setFormData({
                name: '',
                email: '',
                service: 'Orthodontic Braces',
                phone: '',
                message: '',
            });
        } catch (error) {
            openWhatsApp();
            setStatus({
                type: 'error',
                text: 'Email could not be sent automatically. WhatsApp opened with your details — please tap Send.',
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="appointment-name">Name</label>
                        <input
                            id="appointment-name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name..."
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="appointment-email">E-mail Address</label>
                        <input
                            id="appointment-email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="appointment-service">Service</label>
                        <select
                            id="appointment-service"
                            name="service"
                            className="form-control"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="Orthodontic Braces">Orthodontic Braces</option>
                            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                            <option value="Wisdom Teeth">Wisdom Teeth</option>
                            <option value="Restorative">Restorative</option>
                            <option value="Invisible Aligners">Invisible Aligners</option>
                            <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                            <option value="Implants">Implants</option>
                            <option value="Root Canal">Root Canal</option>
                            <option value="Crowns & Bridges">Crowns & Bridges</option>
                            <option value="Flap Surgery">Flap Surgery</option>
                            <option value="Smile Designing">Smile Designing</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="appointment-phone">Phone Number</label>
                        <input
                            id="appointment-phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter your phone number..."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="appointment-message">Message</label>
                        <textarea
                            id="appointment-message"
                            name="message"
                            className="form-control"
                            placeholder="Enter your messages..."
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {status.text && (
                    <div className="col-lg-12">
                        <p className={`form-status form-status--${status.type}`}>{status.text}</p>
                    </div>
                )}

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn" disabled={submitting}>
                        {submitting ? 'Sending...' : 'Book an appointment'}
                    </button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="call-text">
                            <p>Dental 24H Emergency</p>
                            <h6>
                                <a href={`https://wa.me/${CLINIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="contact-icon whatsapp" />
                                    {CLINIC_PHONE}
                                </a>
                            </h6>
                            <h6>
                                <a href={`tel:${CLINIC_PHONE}`}>
                                    <FaPhoneAlt className="contact-icon call" />
                                    {CLINIC_PHONE}
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
