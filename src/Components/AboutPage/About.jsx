import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutText from '../AboutText/AboutText';
import aboutImg from '../img/AboutHeader.png'

const About = () => {
    return (
        <div>
            <AboutHeader img={aboutImg}/>
            <AboutText/>
        </div>
    );
};

export default About;