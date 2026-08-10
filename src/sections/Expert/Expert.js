import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Trusted dentistry from Magnum Dental Opus."
                                description="Our experienced dental team in Visakhapatnam delivers precise, comfortable care for children, adults, and families."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Experienced and caring dental team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    State-of-the-art dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Personalized treatment plans for every smile
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;