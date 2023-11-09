import React from 'react';
import Banner from '../BannerSlider/Banner';
import Services from '../Services/Services';
import GalleryImg from '../GalleryImg/GalleryImg';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Services/>
           <GalleryImg/>
        </div>
    );
};

export default Home;