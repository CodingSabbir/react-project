import React from 'react';

const Text = ({heading,title,text}) => {
    return (
        <div>
             <h2 className='text-[16px] font-mono text-gray-400'>{heading}</h2>
                    <h3 className=' md:text-[26px] font-semibold text-black'>{title}</h3>
                    <p className='text-[12px] md:text-[16px]'>{text}</p>
        </div>
    );
};

export default Text;