import React from 'react';
import './TestimoniCard.scss';
import { FaUserCircle } from 'react-icons/fa';

const TestimoniCard = ({testimonail}) => {

    const {name, description, ratings} = testimonail;
   
    return (
        <div className='col-lg-4 single-testimoni'>
            <div className="testimonial-card">
                <div className="testimonial-img">
                    <FaUserCircle className="testimonial-avatar" aria-hidden="true" />
                </div>
                <div className="testimonial-text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <ul className='testimonial-rating'>
                    {
                        ratings?.map((rating, index) => <li key={index}>{rating}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default TestimoniCard;
