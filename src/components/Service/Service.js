import React from 'react';
import { Link } from 'react-router-dom';
import '../ThemeIcon/ThemeIcon.scss';
import './Service.scss';

const Service = ({serviceList}) => {
    const {title, description, icon: Icon} = serviceList;
 
    return (
        <div className='single-service'>
           <div className="service-box">
                <div className="service-icon">
                    <div className='icon-area'>
                        <div className='icon-box'>
                            <Icon />
                        </div>
                    </div>
                </div>
                <div className="service-text">
                    <h3><Link to="/singleservice">{title}</Link></h3>
                    <p>{description}</p>
                </div>
           </div>
        </div>
    );
};

export default Service;
