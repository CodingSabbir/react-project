import React from 'react';



const VegetablePhoto = (props) => {
  const {img}=props.img    
    return (
        <>
            <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg bg-slate-200 p-5"  src={img} alt=""/>
            </div>
        </>
    );
};

export default VegetablePhoto;