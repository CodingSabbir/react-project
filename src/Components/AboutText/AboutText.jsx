import React from 'react';
import AboutImg from '../AboutImg/AboutImg';
import aboutTexImg from '../img/AboutTextImg.jpg'
import Text from '../TextAbout/Text';


const AboutText = () => {
    return (
        <div> 
            <div className='grid grid-cols-4 md:grid-cols-3 mt-5 container px-1 mx-auto'>
                <div className='col-span-1 md:col-span-1 '>
                   <AboutImg img={aboutTexImg}/>
                </div>
                <div className='col-span-3 md:col-span-2'>
                    <Text
                    heading="I'm James Anderson"
                    title='About My Goal'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vero molestias minima repellat magni odio at quis aut beatae officia dolore optio soluta ullam nobis doloribus voluptas ad, molestiae commodi iure ab excepturi. Rem, voluptatum esse omnis dignissimos, odit quos ad iste velit inventore quasi minima rerum enim sed? Aspernatur repellat fugit sapiente, officia omnis ipsam saepe veniam maiores voluptatem hic neque excepturi cupiditate exercitationem laborum aliquid porro assumenda a obcaecati quam! Quae dolorum ullam, repellat impedit totam porro officia qui voluptatem eaque nemo ratione molestiae laudantium dolorem.'
                    /> 
                </div>
            </div>
        </div>  
    );
};

export default AboutText;