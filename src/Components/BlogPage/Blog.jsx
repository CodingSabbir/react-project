import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import blogImg from '../img/BlogImg.png'
import BlogContens from '../BlogContens/BlogContens';
import Heading from '../Heading/Heading';


const Blog = () => {
    return (
        <div>
            <AboutHeader img={blogImg}/>
            <Heading heading='My Product'/>
            <BlogContens/>       
        </div>
    );
};

export default Blog;