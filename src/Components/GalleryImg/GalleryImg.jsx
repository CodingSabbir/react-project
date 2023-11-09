import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import VegetablePhoto from '../VegetablePhoto/VegetablePhoto';
import fetchData from '../JsonData/vegetableImg.json'

const GalleryImg = () => {
const [vegetable,setVegetable]=useState([])
useEffect(()=>{
setVegetable(fetchData)
},[])
return (
<>
    <section>
        <Heading heading='Vegetable Photo' />
    </section>
    <div className="grid grid-cols-2 md:ml-16 md:grid-cols-4 gap-4 md:container mx-3 md:mx-auto">

        {
        vegetable.map((data,i) => (
        <VegetablePhoto img={data} key={i} />
        ))
        }

    </div>

</>
);
};

export default GalleryImg;
