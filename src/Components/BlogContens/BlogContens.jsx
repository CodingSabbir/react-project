import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import blogImg1 from '../img/blogImg1.jpg'
import blogImg2 from '../img/blogImg2.jpg'
import blogImg3 from '../img/blogImg3.jpg'


const BlogContens = () => {
return (
    
<div className='grid md:grid-cols-3 mt-5 mx-2'>
<BlogCard img={blogImg1} cardTitle='Shoes!' cardNew='New' cardText='If a dog chews shoes whose shoes does he choose?'
        cardFashion='Fashion' cardProduct='Product' />

<BlogCard img={blogImg2} cardTitle='Shoes!' cardNew='New' cardText='If a dog chews shoes whose shoes does he choose?'
        cardFashion='Fashion' cardProduct='Product' />

<BlogCard img={blogImg3} cardTitle='Shoes!' cardNew='New' cardText='If a dog chews shoes whose shoes does he choose?'
        cardFashion='Fashion' cardProduct='Product' />
</div>
);
};

export default BlogContens;
