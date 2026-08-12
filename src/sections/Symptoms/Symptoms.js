import React from 'react';
import './Symptoms.scss';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import iconOne from '../../assets/symptoms/1.png';
import iconTwo from '../../assets/symptoms/2.png';
import iconThree from '../../assets/symptoms/3.png';
import iconFour from '../../assets/symptoms/4.png';
import iconFive from '../../assets/symptoms/5.png';

const Symptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Spontaneous pain',
            'description':'Sudden toothache even when you are not eating or drinking' 
        },
        {
            'icon' : iconTwo,
            'title' : 'Discoloration of tooth',
            'description':'Darkening or discoloration of a tooth that may signal nerve damage' 
        },
        {
            'icon' : iconThree,
            'title' : 'Night-time pain',
            'description':'Pain that wakes you up in the middle of the night' 
        },
        {
            'icon' : iconFour,
            'title' : 'Tenderness in gums',
            'description':'Swollen, tender, or painful gums around an affected tooth' 
        },
        {
            'icon' : iconFive,
            'title' : 'Extreme sensitivity',
            'description':'Sharp sensitivity to cold or heat when you drink or eat' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="800">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="Signs and symptoms you may need a root canal"
                    description="If you notice any of these warning signs, visit Magnum Dental Opus promptly for an examination and relief."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                key={singleSymptoms.title}
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;
