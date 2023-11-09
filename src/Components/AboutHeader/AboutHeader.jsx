import React from 'react';


const AboutHeader = ({img}) => {
    return (
        <div className='mt-20 md:mt-0'>
            <img className='w-full h-[280px] md:h-[400px]' src={img} alt="" />
        </div>
    );
};

export default AboutHeader;