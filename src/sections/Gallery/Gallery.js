import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/servicePage/gallery/1.webp';
import imgTwo from '../../assets/servicePage/gallery/2.webp';
import imgThree from '../../assets/servicePage/gallery/3.webp';
import imgFour from '../../assets/servicePage/gallery/4.webp';
import imgFive from '../../assets/servicePage/gallery/5.webp';
import imgSix from '../../assets/servicePage/gallery/6.webp';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="800">
            <div className="container">
                <SectionTitle 
                    subTitle="Gallery"
                    title="A look at our dental care in action"
                    description="Explore moments from Magnum Dental Opus — modern treatment spaces, skilled care, and smiles we help restore every day."
                />
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgOne} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;