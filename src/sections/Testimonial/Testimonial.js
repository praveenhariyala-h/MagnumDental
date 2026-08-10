import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const googleReviewsLink = 'https://www.google.com/maps/place/Magnum+Dental+Opus/@17.7189905,83.1997423,896m/data=!3m1!1e3!4m8!3m7!1s0x3a3969004663143d:0xca10e0fb7f5a6f9a!8m2!3d17.720091!4d83.203401!9m1!1b1!16s%2Fg%2F11ltfxm_cz?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D';

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Priya Sharma',
            'description' : 'The team at Magnum Dental Opus made my braces journey comfortable and easy. My smile has never looked better.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Ravi Kumar',
            'description' : 'I came in with severe tooth pain and got quick emergency care. Professional, gentle, and truly patient-focused.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Ananya Reddy',
            'description' : 'From consultation to smile designing, everything was explained clearly. Highly recommend Magnum Dental Opus.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Suresh Naidu',
            'description' : 'Clean clinic, friendly staff, and excellent implant treatment. Best dental experience in Sheela Nagar.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="What people have said about us"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">Real experiences from patients who trust Magnum Dental Opus for comfortable, high-quality dental care in Visakhapatnam.</p>
                        <div className="theme-btn mt-3">
                            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                                View Google Reviews
                            </a>
                        </div>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard key={testimonail.name} testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;
