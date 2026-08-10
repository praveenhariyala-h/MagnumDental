import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './StickyContact.scss';

const CLINIC_PHONE = '9100291726';
const CLINIC_WHATSAPP = '919100291726';

const StickyContact = () => {
    return (
        <div className="sticky-contact">
            <a
                className="sticky-contact__btn sticky-contact__btn--call"
                href={`tel:${CLINIC_PHONE}`}
                aria-label={`Call clinic ${CLINIC_PHONE}`}
            >
                <FaPhoneAlt />
                <span className="sticky-contact__number">{CLINIC_PHONE}</span>
            </a>
            <a
                className="sticky-contact__btn sticky-contact__btn--whatsapp"
                href={`https://wa.me/${CLINIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default StickyContact;
