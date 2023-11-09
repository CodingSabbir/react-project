import React from 'react';
import Logo from '../Logo/Logo';
import logoImg from '../img/logo.png';


const Footer = () => {
    return (
        <footer className='bg-[#B2B2B2] py-1 md:py-2 mt-5'>
         <div  className='flex justify-center items-center mt-2 md:mt-5 '>
               <Logo image={logoImg}/>
         </div>
         <p className='text-center text-[14px] md:text-[16px] py-2 text-mono text-black'>© 2023 Vegetables , All Rights Reserved.</p>
            
        </footer>
        
    );
};

export default Footer;