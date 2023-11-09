import React from 'react';

const Heading = (props) => {
    return (
        <>
             <h1 className='text-[26px] font-semibold text-center text-black my-4 md:my-8'>{props.heading}</h1>
        </>
    );
};

export default Heading;