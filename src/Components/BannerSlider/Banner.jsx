import React from 'react';
import banner1 from '../img/landing-img.jpg'
import banner2 from '../img/banner6.png'
import banner3 from '../img/banner-img.png'

const Banner = () => {
return (

<div className="carousel w-full md:h-[600px] mt-14 ">
    <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />

        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <div className='flex justify-between mt-16'>
                <div> <a href="#slide4" className="text-[22px] text-black">❮</a></div>
                <div> <a href="#slide2" className="text-[22px] text-black">❯</a></div>
            </div>
            <div className='md:ml-36 ml-10 -mt-20 md:-mt-28'>
                <p className='tracking-widest text-gray-600 text-[12px] md:text-[14px]'>FRESH VEGETABLES</p>
                <p className=' md:text-[44px] font-mono font-semibold'>Eat Organic & <br /> <span
                className='underline text-purple-700'>Healthy Food</span></p>
                <button
                    className='font-mono text-[12px] md:text-[16px] font-semibold mt-2 md:mt-5 bg-[#82CD47] text-black px-2 md:px-4 py-1 md:py-2 rounded-md '>Learn
                   More</button>
            </div>


        </div>

    </div>
    <div id="slide2" className="carousel-item relative w-full">

        <img src={banner2} className="w-full" />
        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <div className='flex justify-between mt-16'>
                <div> <a href="#slide1" className="text-[22px] text-black">❮</a></div>
                <div> <a href="#slide3" className="text-[22px] text-black">❯</a></div>
            </div>
            <div className='md:ml-36 ml-10 -mt-20 md:-mt-28'>
                <p className='tracking-widest text-gray-600 text-[12px] md:text-[14px]'>FRESH VEGETABLES</p>
                <p className=' md:text-[44px] font-mono font-semibold'>Eat Organic & <br /> <span
                className='underline text-purple-700'>Healthy Food</span></p>
                <button
                    className='font-mono text-[12px] md:text-[16px] font-semibold mt-2 md:mt-5 bg-[#82CD47] text-black px-2 md:px-4 py-1 md:py-2 rounded-md '> Learn More
                    </button>
            </div>


        </div>


    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <div className='flex justify-between mt-16'>
                <div> <a href="#slide2" className="text-[22px] text-black">❮</a></div>
                <div> <a href="#slide4" className="text-[22px] text-black">❯</a></div>
            </div>
            <div className='md:ml-36 ml-10 -mt-20 md:-mt-28'>
                <p className='tracking-widest text-gray-600 text-[12px] md:text-[14px]'>FRESH VEGETABLES</p>
                <p className=' md:text-[44px] font-mono font-semibold'>Eat Organic & <br /> <span
                className='underline text-purple-700'>Healthy Food</span></p>
                <button
                    className='font-mono text-[12px] md:text-[16px] font-semibold mt-2 md:mt-5 bg-[#82CD47] text-black px-2 md:px-4 py-1 md:py-2 rounded-md '> Learn More
                    </button>
            </div>


        </div>


    </div>

</div>
);
};

export default Banner;
