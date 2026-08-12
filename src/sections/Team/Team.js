import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/banner/1.webp';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';
import imgFour from '../../assets/about/team/4.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr. Thanmai'
        },
        {
            'img': imgTwo,
            'name': 'Dental Specialist'
        },
        {
            'img': imgThree,
            'name': 'Clinical Assistant'
        },
        {
            'img': imgFour,
            'name': 'Patient Care Team'
        }
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the Magnum Dental Opus team"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Our caring clinicians and support staff work together to deliver gentle, precise dental care for every patient who walks through our doors.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6" key={team.name}>
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt={team.name} loading="lazy" decoding="async" />
                                    </div>
                                    <h3>{team.name}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;