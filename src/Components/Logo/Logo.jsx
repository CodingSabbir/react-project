import React from 'react';

const Logo = ({image}) => {
    return (
        <div>
            <img src={image} className="h-6 mr-3 sm:h-9" alt=" Logo" />
        </div>
    );
};

export default Logo;