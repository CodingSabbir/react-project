import React, { useEffect, useState } from 'react';
import Service from '../ServiceChild/Service';
import Heading from '../Heading/Heading';
import fetechData from '../JsonData/Fetech.json'


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        setServices(fetechData)
    },[])
return (
 <div>
        <Heading heading='My Service'/>
    <div className="grid md:grid-cols-3  container mx-auto mr-4 ">
        {
            services.map((item)=>(
                <Service  item={item} key={item.id}/>
             ))
        }
    </div>
</div>


);
};

export default Services;
