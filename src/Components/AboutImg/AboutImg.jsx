import React from 'react';

const AboutImg = ({img}) => {
    return (
        <div>
              <img className='rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px]' src={img} alt="" />
        </div>
    );
};

export default AboutImg;