import React from 'react';
import './ThemeIcon.scss';

const ThemeIcon = (icon) => {
    return (
        <div className='icon-box'>
            <img src={icon.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
    );
};

export default ThemeIcon;