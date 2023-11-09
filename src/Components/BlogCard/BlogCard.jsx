import React from 'react';

const BlogCard = ({img,cardTitle,cardNew,cardText,cardFashion,cardProduct}) => {
return (
<div>
    <div className="card md:w-96 bg-base-200 shadow-xl my-3container mx-auto mt-4 ">
        <figure><img className='w-full'src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {cardTitle}
                <div className="badge badge-secondary">{cardNew}</div>
            </h2>
            <p>{cardText}</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">{cardFashion}</div>
                <div className="badge badge-outline">{cardProduct}</div>
            </div>
        </div>
    </div>
</div>
);
};

export default BlogCard;
